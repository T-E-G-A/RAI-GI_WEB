import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// Using Font Awesome icons

export const metadata: Metadata = {
  title: "Contact - RAI-GI",
  description: "Get in touch with RAI-GI",
};

export default function Contact() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/handshake.png"
            alt="Contact Us"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-blue/80"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold">
              Contact <span className="text-blue-300">Us</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-8 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <p className="text-center text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Get in touch with our team to learn more about our work or explore partnership opportunities
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Information */}
            <div className="space-y-4">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-envelope text-brand-blue"></i>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold mb-1 text-gray-900 dark:text-white">Email</h3>
                      <a
                        href="mailto:contact@responsibleaigovernance.org"
                        className="text-gray-600 dark:text-gray-400 hover:text-brand-blue transition-colors"
                      >
                        contact@responsibleaigovernance.org
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-green/10 flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-phone text-brand-green"></i>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold mb-1 text-gray-900 dark:text-white">Phone</h3>
                      <a
                        href="tel:+2341234567890"
                        className="text-gray-600 dark:text-gray-400 hover:text-brand-green transition-colors"
                      >
                        +234 123 456 7890
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0">
                      <i className="fas fa-map-marker-alt text-brand-blue"></i>
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold mb-1 text-gray-900 dark:text-white">Address</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        1140, Durumi District<br />
                        Abuja, FCT, Nigeria
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg bg-gray-50 dark:bg-gray-900">
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl">Follow Us</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-4">
                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center text-white hover:bg-brand-blue/80 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center text-white hover:bg-brand-blue/80 transition-colors"
                      aria-label="Twitter"
                    >
                      <i className="fab fa-twitter"></i>
                    </a>
                    <a
                      href="https://facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-brand-blue flex items-center justify-center text-white hover:bg-brand-blue/80 transition-colors"
                      aria-label="Facebook"
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* View Contact Form Button */}
              <Button size="lg" className="w-full bg-brand-green text-white hover:bg-brand-green/90">
                <i className="fas fa-external-link-alt mr-2"></i>
                View Contact Form
              </Button>
            </div>

            {/* Google Map */}
            <Card className="shadow-lg overflow-hidden h-full min-h-[500px]">
              <CardContent className="p-0 h-full">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126094.53835406924!2d7.352299548306032!3d9.022253437766661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0c98d5cca1a9%3A0x57bf763a3f9f9513!2sDurumi%2C%20Abuja%2C%20Federal%20Capital%20Territory%2C%20Nigeria!5e0!3m2!1sen!2suk!4v1769560592366!5m2!1sen!2suk" 
                  className="w-full h-full" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="RAI-GI Location Map"
                ></iframe>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
