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

if (empty($fullName) || empty($email)) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Please provide your Name and Email."]);
    exit();
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(400);
    echo json_encode(["status" => "error", "message" => "Invalid email address."]);
    exit();
}

// Destination recipients
$recipients = [
    "info@flexoprocess.com",
    "faisal@flexoprocess.com",
    "saleem@flexoprocess.com",
    "flexoprocesspk@gmail.com"
];
$to = implode(", ", $recipients);

$emailSubject = "[FlexoProcess RFQ] " . ($subject ? $subject : "Inquiry from " . $fullName);

// HTML Email Body
$htmlBody = '<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>New Inquiry</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif; background-color: #f8fafc; color: #1e293b; margin: 0; padding: 20px; }
    .card { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 12px; border: 1px solid #e2e8f0; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
    .header { background: #0f172a; padding: 24px; color: #ffffff; border-bottom: 3px solid #ff7a00; }
    .header h2 { margin: 0; font-size: 20px; color: #ffffff; }
    .header p { margin: 4px 0 0; font-size: 13px; color: #94a3b8; }
    .content { padding: 24px; }
    .field-group { margin-bottom: 16px; border-bottom: 1px solid #f1f5f9; padding-bottom: 12px; }
    .field-group:last-child { border-bottom: none; }
    .label { font-size: 11px; font-weight: bold; text-transform: uppercase; color: #64748b; margin-bottom: 4px; }
    .value { font-size: 15px; font-weight: 600; color: #0f172a; }
    .message-box { background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; font-size: 14px; line-height: 1.6; color: #334155; white-space: pre-wrap; }
    .footer { background: #f1f5f9; padding: 16px 24px; font-size: 12px; color: #64748b; text-align: center; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h2>Flexo Process — New Web RFQ Inquiry</h2>
      <p>Submitted via flexoprocess.com website contact form</p>
    </div>
    <div class="content">
      <div class="field-group">
        <div class="label">Client Name</div>
        <div class="value">' . htmlspecialchars($fullName) . '</div>
      </div>
      <div class="field-group">
        <div class="label">Company Name</div>
        <div class="value">' . htmlspecialchars($companyName ?: "Not Provided") . '</div>
      </div>
      <div class="field-group">
        <div class="label">Email Address</div>
        <div class="value"><a href="mailto:' . htmlspecialchars($email) . '" style="color: #2563eb;">' . htmlspecialchars($email) . '</a></div>
      </div>
      <div class="field-group">
        <div class="label">Phone / WhatsApp</div>
        <div class="value">' . htmlspecialchars($phone ?: "Not Provided") . '</div>
      </div>
      <div class="field-group">
        <div class="label">Service / Project Type</div>
        <div class="value">' . htmlspecialchars($service) . '</div>
      </div>
      <div class="field-group">
        <div class="label">Substrate & Plate Thickness</div>
        <div class="value">' . htmlspecialchars($substrate) . ' &bull; ' . htmlspecialchars($thickness) . '</div>
      </div>
      <div class="field-group">
        <div class="label">Subject</div>
        <div class="value">' . htmlspecialchars($subject) . '</div>
      </div>
      <div class="field-group">
        <div class="label">Project Specifications / Message</div>
        <div class="message-box">' . nl2br(htmlspecialchars($message ?: "No additional message provided.")) . '</div>
      </div>
    </div>
    <div class="footer">
      Received: ' . date("d M Y, h:i A") . ' (PKT) | Submitter IP: ' . htmlspecialchars($_SERVER['REMOTE_ADDR'] ?? 'Unknown') . '
    </div>
  </div>
</body>
</html>';

// Send email using standard cPanel sendmail
$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";
$headers .= "From: Flexo Process Web <info@flexoprocess.com>\r\n";
$headers .= "Reply-To: " . $fullName . " <" . $email . ">\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";

$mailSent = @mail($to, $emailSubject, $htmlBody, $headers, "-finfo@flexoprocess.com");

// If return-path flag failed, try without 5th param
if (!$mailSent) {
    $mailSent = @mail($to, $emailSubject, $htmlBody, $headers);
}

http_response_code(200);
echo json_encode([
    "status" => "success",
    "message" => "Thank you! Your inquiry has been dispatched to our engineering team. We will respond promptly."
]);
?>
