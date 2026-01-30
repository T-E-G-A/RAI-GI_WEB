/* Footer Component - Redesigned to match reference site
 * - Dark navy background (#1a2332)
 * - Three column layout: Organization info, Explore links, Get Involved links, Contact Info
 * - Social media icons
 * - Professional institutional styling
 */

'use client';

import Link from "next/link";

export default function Footer() {
  const exploreLinks = [
    { label: "Home", href: "/", id: "explore-home" },
    { label: "About", href: "/about", id: "explore-about" },
    { label: "Programs", href: "/projects", id: "explore-programs" },
    { label: "Impact", href: "/", id: "explore-impact" },
  ];

  const getInvolvedLinks = [
    { label: "Join Us", href: "/about", id: "involved-join" },
    { label: "Support", href: "/contact", id: "involved-support" },
    { label: "News", href: "/articles", id: "involved-news" },
    { label: "Report Incident", href: "/contact", id: "involved-report" },
  ];

  return (
    <footer style={{backgroundColor: '#0a1628'}} className="text-white">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Organization Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logoonly_noText_noBG.png" alt="RAI-GI Logo" className="w-12 h-12" />
              <span className="text-lg font-bold">Responsible AI Governance Initiative</span>
            </div>
            <p className="text-white/90 leading-relaxed mb-6">
              Fostering ethical, inclusive, and accountable AI development across Africa and beyond.
            </p>
            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-md bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-md bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-md bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="font-medium text-sm mb-4 text-white">Explore</h3>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.id}>
                  <Link href={link.href} className="text-white/80 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved Links */}
          <div>
            <h3 className="font-medium text-sm mb-4 text-white">Get Involved</h3>
            <ul className="space-y-3">
              {getInvolvedLinks.map((link) => (
                <li key={link.id}>
                  <Link href={link.href} className="text-white/80 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-medium text-sm mb-4 text-white">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt text-brand-light-blue mt-1"></i>
                <span className="text-white/80">
                  1140, Durumi District, Abuja, FCT, Nigeria
                </span>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-envelope text-brand-light-blue"></i>
                <a
                  href="mailto:contact@responsibleaigovernance.org"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  contact@responsibleaigovernance.org
                </a>
              </li>
              <li className="flex items-center gap-3">
                <i className="fas fa-phone text-brand-light-blue"></i>
                <a
                  href="tel:+2341234567890"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  +234 123 456 7890
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/70 text-sm">
              © {new Date().getFullYear()} RAI-GI (Responsible AI Governance Initiative). All rights reserved.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <button
                onClick={() => {
                  const event = new CustomEvent('open-policy-modal', { detail: 'privacy-policy' });
                  window.dispatchEvent(event);
                }}
                className="text-white/70 hover:text-white transition-colors"
              >
                Privacy Policy
              </button>
              <span className="text-white/30">|</span>
              <button
                onClick={() => {
                  const event = new CustomEvent('open-policy-modal', { detail: 'terms-and-conditions' });
                  window.dispatchEvent(event);
                }}
                className="text-white/70 hover:text-white transition-colors"
              >
                Terms & Conditions
              </button>
              <span className="text-white/30">|</span>
              <button
                onClick={() => {
                  const event = new CustomEvent('open-policy-modal', { detail: 'cookie-policy' });
                  window.dispatchEvent(event);
                }}
                className="text-white/70 hover:text-white transition-colors"
              >
                Cookie Policy
              </button>
              <span className="text-white/30">|</span>
              <button
                onClick={() => {
                  const event = new CustomEvent('open-policy-modal', { detail: 'disclaimer' });
                  window.dispatchEvent(event);
                }}
                className="text-white/70 hover:text-white transition-colors"
              >
                Disclaimer
              </button>
              <span className="text-white/30">|</span>
              <button
                onClick={() => {
                  const event = new CustomEvent('open-policy-modal', { detail: 'code-of-conduct' });
                  window.dispatchEvent(event);
                }}
                className="text-white/70 hover:text-white transition-colors"
              >
                Code of Conduct
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
