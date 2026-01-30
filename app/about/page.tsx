import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// Using Font Awesome icons

export const metadata: Metadata = {
  title: "About - RAI-GI",
  description: "Learn about the Responsible AI Governance Initiative's mission, vision, and team",
};

export default function About() {
  const teamMembers = [
    {
      name: "Muhammad Ahmad Janyau",
      role: "Executive Director",
      description: "Visionary leader in AI governance and ethics, dedicated to ensuring responsible AI development across Africa.",
      image: "/images/team/muhammad.jpeg",
    },
    {
      name: "Bridget Oviasogie",
      role: "Director of Internal Operations & Administration",
      description: "Strategic operations leader focused on organizational excellence and administrative coordination.",
      image: "/images/team/bridget.jpeg",
    },
    {
      name: "Tega Oviasogie",
      role: "Chief Technology & Safety Officer",
      description: "Technology and AI safety expert ensuring responsible implementation of AI systems.",
      image: "/images/team/Tega.jpeg",
    },
    {
      name: "Ahmad Ibrahim",
      role: "Director of Government Relations",
      description: "Government relations expert building strategic partnerships with public sector stakeholders.",
      image: "/images/team/Ahmad.jpeg",
    },
  ];

  const strategicPillars = [
    {
      icon: "fa-landmark",
      title: "Governance & Policy",
      description: "Developing ethical AI frameworks",
    },
    {
      icon: "fa-shield-alt",
      title: "AI Safety",
      description: "Monitoring and risk mitigation",
    },
    {
      icon: "fa-microscope",
      title: "Research",
      description: "Evidence-based insights",
    },
    {
      icon: "fa-graduation-cap",
      title: "Education",
      description: "Capacity building programs",
    },
    {
      icon: "fa-handshake",
      title: "Collaboration",
      description: "Continental partnerships",
    },
  ];

  const journeyMilestones = [
    {
      year: "2024",
      title: "Foundation",
      items: [
        "RAI-GI conceptualized and founded",
        "Initial strategic framework developed",
        "First partnerships established"
      ]
    },
    {
      year: "2025",
      title: "Official Launch",
      items: [
        "Officially registered with Nigeria CAC",
        "Participated in National AI Roundtable",
        "Expanded partnership network"
      ]
    },
    {
      year: "2026",
      title: "Scale & Impact",
      items: [
        "Launch African AI Fellows Program",
        "Publish comprehensive AI governance assessment",
        "Train 1,000+ policymakers and stakeholders"
      ]
    },
    {
      year: "2027-2028",
      title: "Continental Leadership",
      items: [
        "Support 10+ African governments on AI policy",
        "Publish 20+ research papers and policy briefs",
        "Establish continental AI safety network"
      ]
    },
  ];

  return (
    <main className="flex-1">
      {/* Hero Section with Scales of Justice Banner */}
      <section
        className="relative py-24 md:py-32 overflow-hidden bg-brand-blue"
        style={{
          backgroundImage: `url('/images/about-hero.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-brand-blue/70"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold">
              About RAI-GI
            </h1>
          </div>
        </div>
      </section>

      {/* About RAI-GI Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="mb-8 p-8 bg-white">
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                The Responsible AI Governance Initiative (RAI-GI) is an independent African nonprofit working to ensure that AI technologies are developed and deployed ethically, safely, and responsibly.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We build capacity for governments, support policy development, conduct AI safety research, and empower citizens with the knowledge to navigate digital risks.
              </p>
            </Card>

            {/* Purpose and Registration Rectangles */}
            <div className="space-y-4 mb-12">
              <div className="rounded-xl p-6 text-white bg-brand-green">
                <p className="text-lg font-semibold">
                  <strong>Our Purpose:</strong> To protect human rights, strengthen institutions, and help Africa responsibly harness AI and future advanced technologies.
                </p>
              </div>
              <div className="rounded-xl p-6 text-white bg-brand-blue">
                <p className="text-lg font-semibold">
                  <strong>Officially Registered:</strong> Nigeria CAC • RC – 8538166 • Founded 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Meet the dedicated professionals leading Africa's responsible AI governance movement
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                  />
                  <CardTitle className="text-xl mb-2">{member.name}</CardTitle>
                  <p className="text-brand-blue font-medium mb-3">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">{member.description}</p>
                  <div className="flex gap-3 justify-center">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-brand-blue flex items-center justify-center text-white hover:bg-brand-blue/80 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <i className="fab fa-linkedin"></i>
                    </a>
                    <a
                      href="mailto:"
                      className="w-10 h-10 rounded-full bg-gray-600 flex items-center justify-center text-white hover:bg-gray-700 transition-colors"
                      aria-label="Email"
                    >
                      <i className="fas fa-envelope"></i>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Our <span className="text-brand-blue">Journey</span>
            </h2>
          </div>
          
          <div className="max-w-6xl mx-auto relative">
            {/* Center Timeline Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform -translate-x-1/2 hidden md:block"></div>
            
            <div className="space-y-12">
              {/* 2024 - Foundation (Right) */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right"></div>
                <div className="relative">
                  <div className="absolute left-0 md:left-[-2.5rem] top-6 w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold z-10">
                    1
                  </div>
                  <Card className="ml-8 md:ml-0">
                    <CardHeader>
                      <CardTitle className="text-brand-blue">2024</CardTitle>
                      <p className="text-lg font-semibold text-gray-900">Foundation</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <i className="fas fa-check text-brand-green mt-1"></i>
                          <span className="text-gray-700">RAI-GI conceptualized and founded</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <i className="fas fa-check text-brand-green mt-1"></i>
                          <span className="text-gray-700">Initial strategic framework developed</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <i className="fas fa-check text-brand-green mt-1"></i>
                          <span className="text-gray-700">First partnerships established</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* 2025 - Official Launch (Left) */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="md:order-1 relative">
                  <div className="absolute left-0 md:right-[-2.5rem] md:left-auto top-6 w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold z-10">
                    2
                  </div>
                  <Card className="ml-8 md:ml-0">
                    <CardHeader>
                      <CardTitle className="text-brand-blue">2025</CardTitle>
                      <p className="text-lg font-semibold text-gray-900">Official Launch</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <i className="fas fa-check text-brand-green mt-1"></i>
                          <span className="text-gray-700">Officially registered with Nigeria CAC</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <i className="fas fa-check text-brand-green mt-1"></i>
                          <span className="text-gray-700">Participated in National AI Roundtable</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <i className="fas fa-check text-brand-green mt-1"></i>
                          <span className="text-gray-700">Expanded partnership network</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="md:order-2"></div>
              </div>

              {/* 2026 - Scale & Impact (Right) */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="md:text-right"></div>
                <div className="relative">
                  <div className="absolute left-0 md:left-[-2.5rem] top-6 w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold z-10">
                    3
                  </div>
                  <Card className="ml-8 md:ml-0">
                    <CardHeader>
                      <CardTitle className="text-brand-blue">2026</CardTitle>
                      <p className="text-lg font-semibold text-gray-900">Scale & Impact</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <i className="fas fa-check text-brand-green mt-1"></i>
                          <span className="text-gray-700">Launch African AI Fellows Program</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <i className="fas fa-check text-brand-green mt-1"></i>
                          <span className="text-gray-700">Publish comprehensive AI governance assessment</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <i className="fas fa-check text-brand-green mt-1"></i>
                          <span className="text-gray-700">Train 1,000+ policymakers and stakeholders</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* 2027-2028 - Continental Leadership (Left) */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="md:order-1 relative">
                  <div className="absolute left-0 md:right-[-2.5rem] md:left-auto top-6 w-12 h-12 rounded-full bg-brand-blue text-white flex items-center justify-center font-bold z-10">
                    4
                  </div>
                  <Card className="ml-8 md:ml-0">
                    <CardHeader>
                      <CardTitle className="text-brand-blue">2027-2028</CardTitle>
                      <p className="text-lg font-semibold text-gray-900">Continental Leadership</p>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <i className="fas fa-check text-brand-green mt-1"></i>
                          <span className="text-gray-700">Support 10+ African governments on AI policy</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <i className="fas fa-check text-brand-green mt-1"></i>
                          <span className="text-gray-700">Publish 20+ research papers and policy briefs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <i className="fas fa-check text-brand-green mt-1"></i>
                          <span className="text-gray-700">Establish continental AI safety network</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="md:order-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Foundation Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Foundation</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="p-8 bg-brand-blue text-white hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                  <i className="fas fa-bullseye text-2xl"></i>
                </div>
                <CardTitle className="text-2xl text-white">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90 leading-relaxed mb-4">
                  To advance ethical, safe, and responsible governance of artificial intelligence across Africa by developing policy frameworks, safety standards, institutional capacity, and public education that protect rights, strengthen institutions, and enable inclusive technological progress.
                </p>
                <ul className="space-y-2 text-sm text-white/80">
                  <li>• Developing ethical AI governance frameworks</li>
                  <li>• Establishing AI safety standards</li>
                  <li>• Building capacity through education programs</li>
                  <li>• Protecting human rights and communities</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="p-8 bg-brand-green text-white hover:shadow-xl transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-4">
                  <i className="fas fa-eye text-2xl"></i>
                </div>
                <CardTitle className="text-2xl text-white">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-white/90 leading-relaxed mb-4">
                  An Africa where AI—and eventually AGI—advances human welfare, strengthens democratic institutions, protects societal stability, and drives sustainable development within a framework of strong ethical and safety safeguards.
                </p>
                <ul className="space-y-2 text-sm text-white/80">
                  <li>• AI aligned with human rights and values</li>
                  <li>• Sustainable innovation and prosperity</li>
                  <li>• Long-term safety for future generations</li>
                  <li>• Continental leadership in responsible AI</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Strategic Pillars Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Strategic Pillars</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Five core pillars that guide our work in advancing responsible AI governance across Africa
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {strategicPillars.map((pillar, index) => (
                <Card key={index} className="text-center p-4 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-4">
                    <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center mx-auto mb-3">
                      <i className={`fas ${pillar.icon} text-xl text-brand-blue`}></i>
                    </div>
                    <h3 className="font-bold text-sm mb-2 text-gray-900">{pillar.title}</h3>
                    <p className="text-xs text-gray-600">{pillar.description}</p>
                  </CardContent>
                </Card>
            ))}
          </div>
        </div>
      </section>


    </main>
  );
}
