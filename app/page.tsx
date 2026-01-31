import type { Metadata } from "next";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Responsible AI Governance Initiative",
  description: "Advancing safe, ethical, inclusive, and accountable AI development across Africa",
};
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
// Using Font Awesome icons instead of Lucide React

export default function Home() {
  const focusAreas = [
    {
      icon: "fa-balance-scale",
      title: "AI Ethics & Policy",
      description: "Draft and promote AI policies rooted in ethics and fairness",
    },
    {
      icon: "fa-shield-alt",
      title: "AI Safety Research",
      description: "Including existential risk mitigation and alignment studies",
    },
    {
      icon: "fa-graduation-cap",
      title: "Public Education",
      description: "Promoting digital literacy and AI awareness",
    },
    {
      icon: "fa-globe",
      title: "Global Partnerships",
      description: "Aligning African perspectives with global AI governance",
    },
  ];

  const testimonials = [
    {
      quote: "RAI-GI is at the forefront of ensuring Africa's voice is heard in global AI governance discussions.",
      author: "Policy Stakeholder",
      role: "Senior Advisor",
      organization: "African Union Commission",
    },
    {
      quote: "Their research and capacity building programs are crucial for developing responsible AI frameworks across the continent.",
      author: "Research Partner",
      role: "Professor",
      organization: "University of Lagos",
    },
    {
      quote: "Working with RAI-GI has strengthened our understanding of ethical AI implementation in government services.",
      author: "Government Official",
      role: "Director",
      organization: "Ministry of Digital Economy",
    },
  ];

  const partners = [
    { name: "UNIDO", logo: "/images/partners/UNIDO.png" },
    { name: "ForHumanity", logo: "/images/partners/forhumanity.jpeg" },
    { name: "IESP", logo: "/images/partners/IESP.jpeg" },
    { name: "Secure & Responsible Tech Lab", logo: "/images/partners/SECUREANDRESPONSIBLETECHLAB.jpeg" },
    { name: "Assessed Intelligence", logo: "/images/partners/ASSESSEDINTELLIGENCE.jpeg" },
    { name: "CREACC", logo: "/images/partners/CREACC.jpeg" },
    { name: "21st Century", logo: "/images/partners/21stcentury.jpeg" },
  ];

  const impactMetrics = [
    { icon: "fa-file-alt", value: "15+", label: "AI Governance Frameworks" },
    { icon: "fa-users", value: "500+", label: "Stakeholders to Train" },
    { icon: "fa-globe-africa", value: "5M+", label: "People to Reach" },
    { icon: "fa-handshake", value: "25+", label: "Active Partnerships" },
  ];

  const latestNews = [
    {
      date: "November 15, 2025",
      title: "RAI-GI Signs the Global AI Treaty",
      excerpt: "RAI-GI officially signs the AI Treaty, joining a global coalition dedicated to ensuring AI is developed safely, ethically, and for the benefit of all humanity...",
      image: "/images/articles/Articlesimg1.jpeg",
    },
    {
      date: "August 6, 2025",
      title: "Pioneering AAA Systems Certification",
      excerpt: "Nigeria's first independent certification framework for AI, Algorithmic, and Autonomous Systems in partnership with ForHumanity...",
      image: "/images/articles/Articlesimg2.jpeg",
    },
    {
      date: "August 7, 2025",
      title: "RAI-GI Joins UNIDO AIM Global Alliance",
      excerpt: "RAI-GI officially joins the UNIDO AIM Global Alliance, reaffirming our commitment to advancing responsible, ethical, and inclusive AI adoption...",
      image: "/images/articles/RAI-GIxUNIDO.jpeg",
    },
    {
      date: "June 2, 2025",
      title: "Harnessing AI for Africa's SDGs",
      excerpt: "How AI and emerging technologies can accelerate Africa's progress toward the UN Sustainable Development Goals by 2030...",
      image: "/images/articles/Articlesimg3.jpeg",
    },
  ];

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section
        className="relative py-24 md:py-32 overflow-hidden bg-brand-blue"
        style={{
          backgroundImage: `url('/images/hero-bg.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
        }}
      >
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Shaping the Future of <span className="text-green-300">AI in Africa</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white/90">
              Advancing safe, ethical, inclusive, and accountable AI development through cutting-edge research, policy advocacy, and strategic capacity building across the African continent.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                <i className="fas fa-users mr-2"></i>
                Join Our Mission
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-brand-blue">
                <i className="fas fa-book mr-2"></i>
                Our Research
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Our <span className="text-brand-blue">Focus Areas</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We work across multiple domains to ensure AI development serves humanity ethically, inclusively, and with accountability at every level.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {focusAreas.map((area, index) => (
                <Card key={index} className="card-elevated">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <i className={`fas ${area.icon} text-2xl text-primary`}></i>
                    </div>
                    <CardTitle className="text-xl">{area.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{area.description}</CardDescription>
                  </CardContent>
                </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-brand-blue text-white">
              <i className="fas fa-arrow-right mr-2"></i>
              Explore Our Programs
            </Button>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Our Strategic <span className="text-brand-blue">Partners</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Collaborating with leading organizations worldwide to advance responsible AI governance across Africa
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6 mb-16">
            {partners.map((partner, index) => (
              <Card key={index} className="p-6 flex items-center justify-center hover:shadow-lg transition-smooth">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-w-full h-16 object-contain opacity-70 hover:opacity-100 transition-smooth"
                />
              </Card>
            ))}
          </div>

          {/* Partner With Us Subsection */}
          <div className="rounded-2xl p-12 text-center bg-green-50">
            <h3 className="text-3xl font-bold mb-4 text-gray-900">Partner With Us</h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Join our network of organizations committed to advancing responsible AI governance in Africa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-brand-green text-white hover:bg-brand-green/90">
                <i className="fas fa-handshake mr-2"></i>
                Become a Partner
              </Button>
              <Button size="lg" variant="outline" className="border-brand-blue text-brand-blue hover:bg-brand-blue/10">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What Our Partners Say Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">What Our Partners Say</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Trusted by governments, institutions, and organizations across Africa
            </p>
          </div>
          <TestimonialsCarousel testimonials={testimonials} />
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 text-white bg-brand-green">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-white">Our Impact at a Glance</h2>
            <p className="text-white/90 max-w-2xl mx-auto">
              Building Africa's responsible AI ecosystem through strategic action and partnerships
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
                <Card key={index} className="bg-white/10 border-white/20 backdrop-blur text-white text-center p-8 hover:bg-white/20 transition-smooth">
                  <div className="text-5xl mb-4 flex justify-center">
                    <i className={`fas ${metric.icon}`}></i>
                  </div>
                  <div className="text-4xl font-bold mb-2">{metric.value}</div>
                  <div className="text-white/90">{metric.label}</div>
                </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              <i className="fas fa-chart-line mr-2"></i>
              View Detailed Impact Report
            </Button>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">
              Latest <span className="text-brand-blue">Research & News</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Stay updated with our latest research, policy insights, and developments in AI governance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {latestNews.map((news, index) => (
              <Card key={index} className="card-elevated overflow-hidden">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-48 object-cover"
                />
                <CardHeader>
                  <p className="text-sm text-muted-foreground mb-2">{news.date}</p>
                  <CardTitle className="text-lg">{news.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{news.excerpt}</CardDescription>
                      <Button variant="link" className="p-0">
                    Read More <i className="fas fa-arrow-right ml-2"></i>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/articles">
              <Button size="lg" className="bg-brand-blue text-white">
                View All Research & News
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Become a Country Ambassador Section */}
      <section className="py-20 bg-muted">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <i className="fas fa-globe-africa text-6xl text-primary mx-auto mb-6"></i>
            </div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Become a <span className="text-brand-blue">Country Ambassador</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-4">
              Join our growing network of passionate advocates championing responsible AI governance across Africa. As a volunteer Country Ambassador, you'll play a vital role in shaping AI policy, building local capacity, and connecting your community to our continental movement.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              This is a <strong>volunteer role</strong> offering meaningful impact, professional development, and the opportunity to be at the forefront of Africa's AI future.
            </p>
            <a href="https://app.youform.com/forms/olzjjuv0" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-brand-green text-white hover:bg-brand-green/90">
                <i className="fas fa-hand-peace mr-2"></i>
                Apply to Become an Ambassador
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
