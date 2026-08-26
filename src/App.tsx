import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DotComparator } from './components/DotComparator';
import { PlateConfigurator } from './components/PlateConfigurator';
import { IndustriesSection } from './components/IndustriesSection';
import { ServicesSection } from './components/ServicesSection';
import { WorkflowSection } from './components/WorkflowSection';
import { ArticlesHub } from './components/ArticlesHub';
import { FaqSection } from './components/FaqSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { ThemeProvider } from './context/ThemeContext';
import { getStructuredData } from './data/schema';

function AppContent() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteTopic, setQuoteTopic] = useState<string>('');
  const [contactPrefill, setContactPrefill] = useState<{
    service?: string;
    substrate?: string;
    thickness?: string;
    notes?: string;
    subject?: string;
  }>({});

  // Inject Structured JSON-LD Schema for SEO & AI Search Engines
  useEffect(() => {
    const schemas = getStructuredData();
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.innerHTML = JSON.stringify([
      schemas.organizationSchema,
      schemas.localBusinessSchema,
      schemas.faqSchema,
      schemas.productSchema
    ]);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleNavigateSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleOpenQuote = (topic?: string) => {
    setQuoteTopic(topic || '');
    setIsQuoteModalOpen(true);
  };

  const handleSelectSpecFromConfigurator = (spec: {
    substrate: string;
    thickness: string;
    lpi: string;
    notes: string;
  }) => {
    setContactPrefill({
      substrate: spec.substrate,
      thickness: spec.thickness,
      subject: `RFQ for ${spec.substrate} (${spec.thickness})`,
      notes: `${spec.notes}\nTarget Screen: ${spec.lpi}`
    });
    handleNavigateSection('contact');
  };

  const handleSelectIndustryForQuote = (industryName: string) => {
    setContactPrefill({
      service: 'CDI Laser Plate Making',
      substrate: industryName,
      subject: `Plate RFQ for ${industryName}`,
      notes: `Target Application: ${industryName}`
    });
    handleNavigateSection('contact');
  };

  const handleSelectServiceForQuote = (serviceName: string) => {
    setContactPrefill({
      service: serviceName,
      subject: `Inquiry for ${serviceName}`
    });
    handleNavigateSection('contact');
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-navy-950 text-slate-900 dark:text-white font-body selection:bg-flexo-yellow selection:text-navy-950 flex flex-col transition-colors duration-200">
      {/* Top Navigation */}
      <Navbar
        onOpenQuote={() => handleOpenQuote()}
        onNavigateSection={handleNavigateSection}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenQuote={() => handleOpenQuote()}
          onNavigateSection={handleNavigateSection}
        />

        {/* 2. Interactive Dot Gain & German HD Flat Top Comparator */}
        <DotComparator />

        {/* 3. Industries We Serve */}
        <IndustriesSection onSelectIndustryForQuote={handleSelectIndustryForQuote} />

        {/* 4. Interactive Plate Configurator & Spec Builder */}
        <PlateConfigurator onSelectSpec={handleSelectSpecFromConfigurator} />

        {/* 5. End-to-End Capabilities & Services */}
        <ServicesSection onSelectServiceForQuote={handleSelectServiceForQuote} />

        {/* 6. 6-Stage German Workflow Pipeline */}
        <WorkflowSection />

        {/* 7. 18 Technical B2B Articles Knowledge Hub */}
        <ArticlesHub onOpenQuoteWithTopic={(topic) => handleOpenQuote(topic)} />

        {/* 8. Frequently Asked Questions (SEO Structured) */}
        <FaqSection />

        {/* 9. Contact Desk & Direct RFQ Submission Engine */}
        <ContactSection prefilledData={contactPrefill} />
      </main>

      {/* Industrial Footer */}
      <Footer
        onNavigateSection={handleNavigateSection}
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Floating Modal for Instant RFQs */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        defaultTopic={quoteTopic}
      />
    </div>
  );
}

export function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
