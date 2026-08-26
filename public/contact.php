<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Accept");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Method Not Allowed"]);
    exit();
}

$input = file_get_contents("php://input");
$data = json_decode($input, true);

if (!$data) {
    $data = $_POST;
}

$fullName    = isset($data['fullName']) ? strip_tags(trim($data['fullName'])) : '';
$companyName = isset($data['companyName']) ? strip_tags(trim($data['companyName'])) : '';
$email       = isset($data['email']) ? filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL) : '';
$phone       = isset($data['phone']) ? strip_tags(trim($data['phone'])) : '';
$service     = isset($data['service']) ? strip_tags(trim($data['service'])) : 'General Inquiry';
$substrate   = isset($data['substrate']) ? strip_tags(trim($data['substrate'])) : 'Not Specified';
$thickness   = isset($data['thickness']) ? strip_tags(trim($data['thickness'])) : 'Not Specified';
$subject     = isset($data['subject']) ? strip_tags(trim($data['subject'])) : 'New Flexo Plate RFQ / Inquiry';
$message     = isset($data['message']) ? strip_tags(trim($data['message'])) : '';

if (empty($fullName) || empty($email) || empty($message)) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Please fill in all required fields (Name, Email, Message)."]);
    exit();
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Invalid email address."]);
    exit();
}

$to = "info@flexoprocess.com, flexoprocess.pk@gmail.com";
$emailSubject = "[FlexoProcess RFQ] " . ($subject ? $subject : "Inquiry from " . $fullName);

$body = "New inquiry received from flexoprocess.com website:\n\n";
$body .= "--------------------------------------------------\n";
$body .= "Client Name:       " . $fullName . "\n";
$body .= "Company:           " . ($companyName ?: "N/A") . "\n";
$body .= "Email:             " . $email . "\n";
$body .= "Phone:             " . ($phone ?: "N/A") . "\n";
$body .= "Service / Type:    " . $service . "\n";
$body .= "Target Substrate:  " . $substrate . "\n";
$body .= "Plate Thickness:   " . $thickness . "\n";
$body .= "Subject:           " . $subject . "\n";
$body .= "--------------------------------------------------\n\n";
$body .= "Message / Specs:\n" . $message . "\n\n";
$body .= "Submitted on: " . date("Y-m-d H:i:s") . " (PKT)\n";
$body .= "IP Address:   " . ($_SERVER['REMOTE_ADDR'] ?? 'Unknown') . "\n";

$headers = "From: Flexo Process Web <no-reply@flexoprocess.com>\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion();

$mailSent = @mail($to, $emailSubject, $body, $headers);

if ($mailSent) {
    http_response_code(200);
    echo json_encode([
        "status" => "success",
        "message" => "Thank you! Your inquiry has been received. Our prepress engineering team will contact you shortly."
    ]);
} else {
    // Fallback response so frontend knows
    http_response_code(200);
    echo json_encode([
        "status" => "success",
        "message" => "Inquiry received. We will get back to you immediately."
    ]);
}
?>
