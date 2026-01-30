'use client';

import { useEffect, useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface PolicyContent {
  title: string;
  content: React.ReactNode;
}

const policies: Record<string, PolicyContent> = {
  'privacy-policy': {
    title: 'Privacy Policy',
    content: (
      <div className="space-y-6 text-sm text-gray-700">
        <p className="text-xs text-gray-500">
          <strong>Effective Date:</strong> January 30, 2025<br />
          <strong>Last Updated:</strong> January 30, 2025
        </p>

        <section>
          <h3 className="text-base font-semibold text-gray-900 mb-3">Introduction</h3>
          <p className="text-justify">
            The Responsible AI Governance Initiative (RAI-GI) is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website responsibleaigovernance.org and interact with our services.
          </p>
        </section>

        <section>
          <h3 className="text-base font-semibold text-gray-900 mb-3">Information We Collect</h3>
          
          <h4 className="text-sm font-semibold text-gray-800 mb-2 mt-4">Information You Provide to Us</h4>
          <p className="text-justify mb-3">
            We collect information that you voluntarily provide when you subscribe to our newsletter, contact us through our contact form, register for events or programs, participate in surveys or research activities, or apply for partnership opportunities.
          </p>
          <p className="text-justify">
            This information may include: Name and contact details (email address, phone number), professional affiliation and role, areas of interest in AI governance, and any other information you choose to provide.
          </p>

          <h4 className="text-sm font-semibold text-gray-800 mb-2 mt-4">Information Automatically Collected</h4>
          <p className="text-justify">
            When you visit our website, we automatically collect certain information about your device and browsing activity, including IP address and geographic location, browser type and version, device type and operating system, pages visited and time spent on pages, referring website addresses, and date and time of access. We collect this information through cookies and similar tracking technologies to analyze website traffic and improve user experience.
          </p>
        </section>

        <section>
          <h3 className="text-base font-semibold text-gray-900 mb-3">How We Use Your Information</h3>
          <p className="text-justify">
            We use the information we collect to: send newsletters and updates about our initiatives, research, and events; respond to your inquiries and provide customer support; process applications for programs, partnerships, or events; conduct research and analysis to improve our services; monitor and analyze website usage and trends; comply with legal obligations and protect our rights; and prevent fraud and ensure website security.
          </p>
        </section>

        <section>
          <h3 className="text-base font-semibold text-gray-900 mb-3">How We Share Your Information</h3>
          <p className="text-justify mb-3">
            We do not sell, trade, or rent your personal information to third parties. We may share your information with service providers who assist us with email marketing, website hosting and analytics, event management, and data storage. These providers are contractually obligated to protect your information.
          </p>
          <p className="text-justify">
            We may also share information with partner organizations (with your consent) for collaborative initiatives, or disclose information if required by law or to protect our rights and safety.
          </p>
        </section>

        <section>
          <h3 className="text-base font-semibold text-gray-900 mb-3">Your Rights</h3>
          <p className="text-justify">
            You have the right to access, correct, delete, object to processing, restrict processing, port your data, and withdraw consent. To exercise these rights, please contact us at contact@responsibleaigovernance.org.
          </p>
        </section>

        <section>
          <h3 className="text-base font-semibold text-gray-900 mb-3">Data Security</h3>
          <p className="text-justify">
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
          </p>
        </section>

        <section>
          <h3 className="text-base font-semibold text-gray-900 mb-3">Contact Us</h3>
          <p className="text-justify">
            <strong>Responsible AI Governance Initiative (RAI-GI)</strong><br />
            Email: contact@responsibleaigovernance.org<br />
            Phone: +234 123 456 7890<br />
            Address: 1140, Durumi District, Abuja, FCT, Nigeria
          </p>
          <p className="text-justify mt-3">
            For data protection inquiries specifically, you may also contact our Data Protection Officer at: privacy@responsibleaigovernance.org
          </p>
        </section>
      </div>
    ),
  },
  'terms-and-conditions': {
    title: 'Terms and Conditions',
    content: (
      <div className="space-y-6 text-sm text-gray-700">
        <p className="text-xs text-gray-500">
          <strong>Effective Date:</strong> January 30, 2025<br />
          <strong>Last Updated:</strong> January 30, 2025
        </p>

        <section>
          <h3 className="text-base font-semibold text-gray-900 mb-3">1. Acceptance of Terms</h3>
          <p className="text-justify">
            Welcome to the Responsible AI Governance Initiative (RAI-GI) website. By accessing or using responsibleaigovernance.org (the "Website"), you agree to be bound by these Terms and Conditions ("Terms"). If you do not agree to these Terms, please do not use the Website.
          </p>
        </section>

        <section>
          <h3 className="text-base font-semibold text-gray-900 mb-3">2. About RAI-GI</h3>
          <p className="text-justify">
            RAI-GI is a non-profit organization registered in Nigeria (CAC Registration: RC-8538166) dedicated to advancing safe, ethical, inclusive, and accountable artificial intelligence development and deployment across Africa.
          </p>
        </section>

        <section>
          <h3 className="text-base font-semibold text-gray-900 mb-3">3. Use of the Website</h3>
          
          <h4 className="text-sm font-semibold text-gray-800 mb-2 mt-4">3.1 Permitted Use</h4>
          <p className="text-justify">
            You may use the Website for lawful purposes only, including accessing information about AI governance, reading research publications and articles, subscribing to newsletters and updates, contacting us for inquiries or partnership opportunities, and participating in events and programs.
          </p>

          <h4 className="text-sm font-semibold text-gray-800 mb-2 mt-4">3.2 Prohibited Use</h4>
          <p className="text-justify">
            You agree not to: use the Website for any unlawful purpose or in violation of these Terms; attempt to gain unauthorized access to any part of the Website; interfere with or disrupt the Website's functionality or servers; transmit viruses, malware, or other harmful code; harvest or collect information about other users without consent; impersonate any person or entity; use automated systems (bots, scrapers) without our prior written consent; or reproduce, distribute, or commercially exploit Website content without permission.
          </p>
        </section>

        <section>
          <h3 className="text-base font-semibold text-gray-900 mb-3">4. Intellectual Property Rights</h3>
          <p className="text-justify">
            All content on the Website, including text, graphics, logos, images, videos, research publications, and software, is the property of RAI-GI or its licensors and is protected by Nigerian and international copyright, trademark, and intellectual property laws. We grant you a limited, non-exclusive, non-transferable license to access and use the Website for personal, non-commercial purposes.
          </p>
        </section>

        <section>
          <h3 className="text-base font-semibold text-gray-900 mb-3">5. Disclaimer of Warranties</h3>
          <p className="text-justify">
            The Website and all content are provided "as is" and "as available" without warranties of any kind, either express or implied. While we strive to provide accurate and up-to-date information, RAI-GI makes no representations or warranties regarding the accuracy, completeness, or timeliness of any content on the Website.
          </p>
        </section>

        <section>
          <h3 className="text-base font-semibold text-gray-900 mb-3">6. Limitation of Liability</h3>
          <p className="text-justify">
            To the fullest extent permitted by law, RAI-GI, its directors, officers, employees, partners, and affiliates shall not be liable for any indirect, incidental, special, consequential, or punitive damages, loss of profits, data, use, or goodwill, service interruptions or data loss, or any damages arising from your use of or inability to use the Website.
          </p>
        </section>

        <section>
          <h3 className="text-base font-semibold text-gray-900 mb-3">7. Governing Law</h3>
          <p className="text-justify">
            These Terms are governed by the laws of the Federal Republic of Nigeria, without regard to conflict of law principles. Any disputes arising from these Terms or your use of the Website shall be subject to the exclusive jurisdiction of the courts of Nigeria.
          </p>
        </section>

        <section>
          <h3 className="text-base font-semibold text-gray-900 mb-3">8. Contact Information</h3>
          <p className="text-justify">
            <strong>Responsible AI Governance Initiative (RAI-GI)</strong><br />
            Email: contact@responsibleaigovernance.org<br />
            Phone: +234 123 456 7890<br />
            Address: 1140, Durumi District, Abuja, FCT, Nigeria
          </p>
        </section>
      </div>
    ),
  },
  'cookie-policy': {
    title: 'Cookie Policy',
    content: (
      <div className="space-y-6 text-sm text-gray-700">
        <p className="text-xs text-gray-500">
          <strong>Effective Date:</strong> January 30, 2025<br />
          <strong>Last Updated:</strong> January 30, 2025
        </p>

        <section>
          <h3 className="text-base font-semibold text-gray-900 mb-3">What Are Cookies?</h3>
          <p className="text-justify">
            Cookies are small text files that are placed on your device (computer, smartphone, or tablet) when you visit a website. They are widely used to make websites work more efficiently and provide information to website owners.
          </p>
        </section>

        <section>
          <h3 className="text-base font-semibold text-gray-900 mb-3">How We Use Cookies</h3>
          <p className="text-justify">
            The Responsible AI Governance Initiative (RAI-GI) uses cookies and similar tracking technologies on responsibleaigovernance.org to: ensure the website functions properly, analyze how visitors use our website, improve user experience and website performance, and remember your preferences and settings.
          </p>
        </section>

        <section>
          <h3 className="text-base font-semibold text-gray-900 mb-3">Types of Cookies We Use</h3>
          
          <h4 className="text-sm font-semibold text-gray-800 mb-2 mt-4">1. Essential Cookies</h4>
          <p className="text-justify">
            These cookies are necessary for the website to function and cannot be disabled in our systems. They are usually set in response to actions you take, such as setting privacy preferences or filling in forms. Examples include session management cookies, security cookies, and load balancing cookies. Duration: Session or up to 1 year.
          </p>

          <h4 className="text-sm font-semibold text-gray-800 mb-2 mt-4">2. Analytics Cookies</h4>
          <p className="text-justify">
            We use analytics cookies to understand how visitors interact with our website. This helps us improve website functionality and content. Information collected includes pages visited and time spent on pages, traffic sources and referral URLs, device type, browser, and operating system, geographic location (country/city level), and user interactions and navigation patterns. Duration: Up to 2 years.
          </p>

          <h4 className="text-sm font-semibold text-gray-800 mb-2 mt-4">3. Functional Cookies</h4>
          <p className="text-justify">
            These cookies enable enhanced functionality and personalization, such as remembering your language preferences, newsletter subscription preferences, and display settings. Duration: Up to 1 year.
          </p>
        </section>

        <section>
          <h3 className="text-base font-semibold text-gray-900 mb-3">How to Control Cookies</h3>
          <p className="text-justify mb-3">
            Most web browsers allow you to control cookies through their settings. You can view what cookies are stored and delete them individually, block third-party cookies, block all cookies from specific websites, delete all cookies when you close your browser, or enable "Do Not Track" signals.
          </p>
          <p className="text-justify">
            <strong>How to access cookie settings in popular browsers:</strong><br />
            • Chrome: Settings → Privacy and security → Cookies and other site data<br />
            • Firefox: Settings → Privacy & Security → Cookies and Site Data<br />
            • Safari: Preferences → Privacy → Cookies and website data<br />
            • Edge: Settings → Cookies and site permissions → Cookies and site data
          </p>
        </section>

        <section>
          <h3 className="text-base font-semibold text-gray-900 mb-3">Contact Us</h3>
          <p className="text-justify">
            <strong>Responsible AI Governance Initiative (RAI-GI)</strong><br />
            Email: contact@responsibleaigovernance.org<br />
            Phone: +234 123 456 7890<br />
            Address: 1140, Durumi District, Abuja, FCT, Nigeria
          </p>
        </section>
      </div>
    ),
  },
  'disclaimer': {
    title: 'Disclaimer',
    content: (
      <div className="space-y-6 text-sm text-gray-700">
        <p className="text-xs text-gray-500">
          <strong>Effective Date:</strong> January 30, 2025<br />
          <strong>Last Updated:</strong> January 30, 2025
        </p>

        <section>
          <h3 className="text-base font-semibold text-gray-900 mb-3">General Information</h3>
          <p className="text-justify">
            The information provided on the Responsible AI Governance Initiative (RAI-GI) website (responsibleaigovernance.org) is for general informational and educational purposes only. While we strive to provide accurate, current, and reliable information, RAI-GI makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on the website.
          </p>
        </section>

        <section>
          <h3 className="text-base font-semibold text-gray-900 mb-3">Not Professional Advice</h3>
          
          <h4 className="text-sm font-semibold text-gray-800 mb-2 mt-4">Legal Advice</h4>
          <p className="text-justify">
            The information on this website does not constitute legal advice and should not be relied upon as such. Laws and regulations regarding artificial intelligence, data protection, and technology governance vary by jurisdiction and are subject to change. For specific legal advice, please consult a qualified attorney in your jurisdiction.
          </p>

          <h4 className="text-sm font-semibold text-gray-800 mb-2 mt-4">Technical or Professional Advice</h4>
          <p className="text-justify">
            Information about AI systems, governance frameworks, and technical implementations is provided for educational purposes only. RAI-GI does not provide professional consulting services through this website. Organizations should seek qualified technical and professional advisors for implementation decisions.
          </p>

          <h4 className="text-sm font-semibold text-gray-800 mb-2 mt-4">Policy Recommendations</h4>
          <p className="text-justify">
            While RAI-GI may provide policy recommendations and frameworks, these are general guidelines and may not be suitable for all contexts. Policy decisions should be made in consultation with relevant stakeholders and experts familiar with local conditions and requirements.
          </p>
        </section>

        <section>
          <h3 className="text-base font-semibold text-gray-900 mb-3">Limitation of Liability</h3>
          <p className="text-justify">
            To the fullest extent permitted by applicable law, RAI-GI, its directors, officers, employees, partners, affiliates, and contributors shall not be liable for any loss or damage, including but not limited to direct, indirect, incidental, or consequential damages, loss of profits, revenue, data, or business opportunities, damages arising from reliance on information provided on the website, damages resulting from errors, omissions, or inaccuracies in content, or damages from interruptions, delays, or unavailability of the website.
          </p>
        </section>

        <section>
          <h3 className="text-base font-semibold text-gray-900 mb-3">Third-Party Content and Links</h3>
          <p className="text-justify">
            The website may contain links to third-party websites, resources, or services. These links are provided for convenience only and do not constitute an endorsement by RAI-GI. We have no control over and assume no responsibility for the content, accuracy, or availability of third-party websites, the privacy practices or policies of external sites, or any damages or losses arising from your use of third-party websites.
          </p>
        </section>

        <section>
          <h3 className="text-base font-semibold text-gray-900 mb-3">Contact Us</h3>
          <p className="text-justify">
            <strong>Responsible AI Governance Initiative (RAI-GI)</strong><br />
            Email: contact@responsibleaigovernance.org<br />
            Phone: +234 123 456 7890<br />
            Address: 1140, Durumi District, Abuja, FCT, Nigeria
          </p>
        </section>
      </div>
    ),
  },
  'code-of-conduct': {
    title: 'Code of Conduct',
    content: (
      <div className="space-y-6 text-sm text-gray-700">
        <p className="text-xs text-gray-500">
          <strong>Effective Date:</strong> January 30, 2025<br />
          <strong>Last Updated:</strong> January 30, 2025
        </p>

        <section>
          <h3 className="text-base font-semibold text-gray-900 mb-3">Our Commitment</h3>
          <p className="text-justify">
            The Responsible AI Governance Initiative (RAI-GI) is dedicated to creating an inclusive, respectful, and collaborative environment for all participants in our community. This Code of Conduct outlines our expectations for behavior and our commitment to fostering a safe, welcoming space for everyone involved in our work.
          </p>
        </section>

        <section>
          <h3 className="text-base font-semibold text-gray-900 mb-3">Who This Applies To</h3>
          <p className="text-justify">
            This Code of Conduct applies to all individuals participating in RAI-GI activities, including team members, staff, and volunteers; partners and collaborators; event participants and speakers; research contributors and advisors; community members and website users; and anyone representing RAI-GI in any capacity.
          </p>
        </section>

        <section>
          <h3 className="text-base font-semibold text-gray-900 mb-3">Our Values</h3>
          <p className="text-justify">
            RAI-GI is guided by the following core values: <strong>Inclusivity</strong> - We welcome and respect people of all backgrounds, identities, and experiences. <strong>Integrity</strong> - We conduct our work with honesty, transparency, and accountability. <strong>Collaboration</strong> - We believe in the power of partnership and collective action. <strong>Excellence</strong> - We strive for quality and rigor in all our activities. <strong>Impact</strong> - We are committed to creating meaningful, positive change in AI governance across Africa and beyond.
          </p>
        </section>

        <section>
          <h3 className="text-base font-semibold text-gray-900 mb-3">Expected Behavior</h3>
          <p className="text-justify">
            All community members are expected to: <strong>Be Respectful</strong> - Treat all individuals with dignity, courtesy, and respect. Value diverse opinions and perspectives. <strong>Be Inclusive</strong> - Use welcoming and inclusive language. Make space for others to participate. <strong>Be Professional</strong> - Conduct yourself professionally at all times. Honor commitments and meet deadlines. <strong>Be Collaborative</strong> - Work cooperatively toward shared goals. Share knowledge and credit generously. <strong>Be Responsible</strong> - Take responsibility for your words and actions. Report violations of this Code of Conduct.
          </p>
        </section>

        <section>
          <h3 className="text-base font-semibold text-gray-900 mb-3">Unacceptable Behavior</h3>
          <p className="text-justify">
            The following behaviors are considered unacceptable: Harassment and discrimination based on race, ethnicity, national origin, religion, gender, gender identity, sexual orientation, age, disability, or any other protected characteristic. Disruptive behavior including sustained disruption of discussions, aggressive or threatening language, personal attacks, or trolling. Dishonesty and misconduct including plagiarism, fabrication of data, undisclosed conflicts of interest, or misuse of RAI-GI's name or resources. Privacy violations including sharing private information without consent or recording individuals without permission.
          </p>
        </section>

        <section>
          <h3 className="text-base font-semibold text-gray-900 mb-3">Reporting Violations</h3>
          <p className="text-justify">
            If you experience or witness behavior that violates this Code of Conduct, please report it promptly to conduct@responsibleaigovernance.org or call +234 123 456 7890. All reports will be handled with discretion and confidentiality.
          </p>
        </section>

        <section>
          <h3 className="text-base font-semibold text-gray-900 mb-3">Contact Us</h3>
          <p className="text-justify">
            <strong>Responsible AI Governance Initiative (RAI-GI)</strong><br />
            Email: conduct@responsibleaigovernance.org<br />
            Phone: +234 123 456 7890<br />
            Address: 1140, Durumi District, Abuja, FCT, Nigeria
          </p>
        </section>
      </div>
    ),
  },
};

export default function PolicyModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentPolicy, setCurrentPolicy] = useState<string>('privacy-policy');

  useEffect(() => {
    const handleOpenModal = (event: CustomEvent) => {
      setCurrentPolicy(event.detail);
      setIsOpen(true);
    };

    window.addEventListener('open-policy-modal' as any, handleOpenModal);

    return () => {
      window.removeEventListener('open-policy-modal' as any, handleOpenModal);
    };
  }, []);

  const policy = policies[currentPolicy];

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      // Emit close event when modal closes
      const event = new CustomEvent('close-policy-modal');
      window.dispatchEvent(event);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-[650px] max-h-[80vh] overflow-hidden p-0">
        <div className="overflow-hidden rounded-lg">
          {/* Header - Fixed */}
          <DialogHeader className="px-6 pt-6 pb-4 border-b border-gray-200">
            <DialogTitle className="text-2xl font-bold text-gray-900 text-justify">
              {policy?.title}
            </DialogTitle>
          </DialogHeader>

          {/* Content - Scrollable */}
          <div className="px-6 py-6 overflow-y-auto max-h-[calc(80vh-100px)]">
            {policy?.content}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
