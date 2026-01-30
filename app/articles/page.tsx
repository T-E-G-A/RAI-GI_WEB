'use client';

import { useState } from "react";
import type { Metadata} from "next";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import PublicationModal from "@/components/PublicationModal";

// Using Font Awesome icons

interface Article {
  category: string;
  readTime: string;
  title: string;
  author: string;
  date: string;
  excerpt: string;
  image: string;
  summary?: string;
  pdfUrl?: string;
}

export default function Articles() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const articles: Article[] = [
    {
      category: "Announcement",
      readTime: "7 min read",
      title: "Pioneering AAA Systems Auditing & Certification in Nigeria",
      author: "RAI-GI & ForHumanity Partnership Team",
      date: "August 6, 2025",
      excerpt: "RAI-GI, in partnership with ForHumanity, announces Nigeria's first independent certification framework for AI, Algorithmic, and Autonomous Systems, aligned with NDPC 2023.",
      image: "/images/articles/Articlesimg2.jpeg",
      summary: `The Responsible AI Governance Initiative (RAI-GI), in partnership with ForHumanity, has launched Nigeria's first independent certification framework for AI, Algorithmic, and Autonomous (AAA) Systems. This groundbreaking initiative establishes a comprehensive audit and certification system fully aligned with Nigeria's Data Protection Commission (NDPC) 2023 regulations, positioning Nigeria as a continental leader in responsible AI governance.

The certification framework addresses critical gaps in AI accountability by providing organizations with clear, actionable standards for ethical AI deployment. Through a modular approach, the framework covers key areas including data protection, algorithmic transparency, bias mitigation, and human rights impact assessments. This ensures that AI systems deployed in Nigeria meet international best practices while respecting local regulatory requirements and cultural contexts.

RAI-GI and ForHumanity have established weekly working sessions bringing together legal experts, technical specialists, regulators, and civil society representatives to co-develop localized certification standards. The initiative includes both legal and technical taskforces responsible for framework development, public outreach, and stakeholder engagement. By leveraging ForHumanity's open-source tools and adapting them for Nigerian and broader African governance realities, the partnership creates accessible, affordable pathways for organizations to achieve certification.

This initiative represents a significant milestone in building Africa's Infrastructure of Trust for AI systems. It provides a foundation for responsible innovation, enabling Nigerian organizations to demonstrate compliance with ethical AI principles while fostering public confidence in algorithmic decision-making. The certification framework is designed to be scalable across the continent, offering a model for other African nations seeking to establish robust AI governance mechanisms.`,
      pdfUrl: "/files/forhumanity-certification.pdf",
    },
    {
      category: "Partnership",
      readTime: "5 min read",
      title: "RAI-GI Joins UNIDO AIM Global Alliance on AI for Industry and Manufacturing",
      author: "RAI-GI Leadership Team",
      date: "August 7, 2025",
      excerpt: "RAI-GI officially joins the UNIDO AIM Global Alliance, reaffirming our commitment to advancing responsible, ethical, and inclusive AI adoption in Africa's industrial and manufacturing sectors.",
      image: "/images/articles/RAI-GIxUNIDO.jpeg",
      summary: `RAI-GI has officially joined the United Nations Industrial Development Organization (UNIDO) AIM Global Alliance, marking a strategic partnership to advance responsible AI adoption in Africa's industrial and manufacturing sectors. This collaboration positions RAI-GI as a key player in shaping how emerging technologies can drive sustainable industrial transformation across the continent while ensuring ethical governance frameworks are embedded from the outset.

The partnership focuses on bridging the gap between AI innovation and practical industrial applications in African contexts. Through this alliance, RAI-GI will contribute expertise in responsible AI governance, helping to ensure that AI deployments in manufacturing and industry prioritize worker safety, environmental sustainability, and equitable economic benefits. The collaboration emphasizes capacity building, knowledge transfer, and the development of context-appropriate AI solutions that address Africa's unique industrial challenges.

Key areas of focus include supporting small and medium enterprises (SMEs) in adopting AI technologies responsibly, developing training programs for industrial AI literacy, and creating governance frameworks that balance innovation with social responsibility. The partnership also aims to facilitate technology transfer and foster regional cooperation in AI-driven industrial development, ensuring that African nations can participate meaningfully in the global AI economy.

This alliance represents RAI-GI's commitment to ensuring that Africa's industrial transformation is guided by principles of responsibility, inclusivity, and sustainability. By working with UNIDO and other global partners, RAI-GI helps to ensure that AI serves as a tool for broad-based economic development rather than exacerbating existing inequalities.`,
    },
    {
      category: "Announcement",
      readTime: "4 min read",
      title: "RAI-GI Signs the Global AI Treaty",
      author: "RAI-GI Leadership Team",
      date: "November 15, 2025",
      excerpt: "RAI-GI officially signs the AI Treaty on AITreaty.org, joining a global coalition dedicated to ensuring that artificial intelligence is developed safely, ethically, and for the benefit of all humanity.",
      image: "/images/articles/Articlesimg1.jpeg",
      summary: `RAI-GI has officially signed the Global AI Treaty on AITreaty.org, joining a worldwide coalition of organizations, governments, and civil society groups committed to ensuring that artificial intelligence is developed and deployed safely, ethically, and for the benefit of all humanity. This signature represents RAI-GI's formal commitment to upholding universal principles of AI governance and accountability.

The Global AI Treaty establishes foundational principles for responsible AI development, including commitments to transparency, human rights protection, democratic oversight, and equitable benefit sharing. By signing, RAI-GI pledges to advocate for these principles in all its work across Africa, ensuring that AI governance frameworks developed on the continent align with global best practices while respecting local contexts and values.

This commitment reinforces RAI-GI's role as a bridge between global AI governance discussions and African implementation realities. The organization will work to ensure that African voices are heard in international AI policy debates and that global frameworks are adapted appropriately for African contexts. This includes advocating for governance mechanisms that address Africa's specific challenges, such as limited regulatory capacity, digital infrastructure gaps, and the need for inclusive stakeholder engagement.

The treaty signature also strengthens RAI-GI's partnerships with international organizations working on AI governance, creating opportunities for knowledge exchange, capacity building, and collaborative policy development. Through this global engagement, RAI-GI aims to position Africa not just as a recipient of AI governance frameworks but as an active contributor to shaping the future of responsible AI worldwide.`,
    },
    {
      category: "Announcement",
      readTime: "3 min read",
      title: "📢 Big News: RAI-GI is Now Officially Registered!",
      author: "RAI-GI Leadership Team",
      date: "June 5, 2025",
      excerpt: "We are proud to announce that the Responsible AI Governance Initiative Ltd/GTE has been formally registered with Nigeria's Corporate Affairs Commission (CAC) under registration number RC – 8538166.",
      image: "/images/articles/Articlesimg4.jpeg",
      summary: `The Responsible AI Governance Initiative has achieved a significant milestone with its formal registration as Responsible AI Governance Initiative Ltd/GTE with Nigeria's Corporate Affairs Commission (CAC) under registration number RC – 8538166. This official recognition establishes RAI-GI as a legally constituted entity capable of entering into partnerships, securing funding, and executing projects across Nigeria and the broader African continent.

The registration represents more than an administrative achievement—it signifies RAI-GI's transition from an informal network to a structured organization with clear governance mechanisms, accountability frameworks, and operational capacity. This legal status enables RAI-GI to engage more effectively with government agencies, international organizations, and private sector partners, strengthening its ability to influence AI policy and governance across Africa.

With formal registration, RAI-GI can now pursue institutional partnerships, apply for grants and funding opportunities, and establish formal agreements with stakeholders. This enhanced capacity allows the organization to scale its impact, expand its programs, and build sustainable operations that support long-term AI governance work across the continent.

The registration also demonstrates RAI-GI's commitment to transparency and accountability in its own operations, modeling the governance principles it advocates for in AI systems. As a registered entity, RAI-GI is subject to regulatory oversight and reporting requirements, ensuring that its work meets high standards of organizational integrity and public accountability.`,
    },
    {
      category: "Research",
      readTime: "12 min read",
      title: "Harnessing AI and Emerging Technologies to Accelerate Africa's Sustainable Development Goals",
      author: "Muhammad Ahmad Janyau, Founder, RAI-GI",
      date: "June 2, 2025",
      excerpt: "How AI and emerging technologies can accelerate Africa's progress toward the UN Sustainable Development Goals by 2030.",
      image: "/images/articles/Articlesimg3.jpeg",
      summary: `This comprehensive research examines how artificial intelligence and emerging technologies can serve as powerful accelerators for achieving the United Nations Sustainable Development Goals (SDGs) across Africa by 2030. The analysis explores concrete applications of AI in addressing Africa's most pressing development challenges while highlighting the governance frameworks needed to ensure these technologies benefit all segments of society.

The research identifies specific opportunities for AI deployment across multiple SDG areas, including precision agriculture for food security (SDG 2), AI-powered diagnostic tools for healthcare access (SDG 3), personalized learning platforms for quality education (SDG 4), and smart grid technologies for clean energy (SDG 7). Each application is analyzed through the lens of African contexts, considering infrastructure limitations, capacity constraints, and the need for culturally appropriate solutions.

A critical component of the research addresses the governance challenges that must be resolved to realize AI's potential for development. This includes ensuring data sovereignty, building local AI capacity, establishing regulatory frameworks that encourage innovation while protecting rights, and creating mechanisms for equitable benefit sharing. The analysis emphasizes that without proper governance, AI could exacerbate existing inequalities rather than reducing them.

The research concludes with actionable recommendations for policymakers, development organizations, and technology providers. These include investing in AI literacy and capacity building, establishing multi-stakeholder governance mechanisms, prioritizing locally relevant AI applications, and ensuring that AI deployment is guided by principles of sustainability, inclusivity, and human rights. The work provides a roadmap for harnessing AI as a tool for transformative development across Africa.`,
    },
    {
      category: "Event",
      readTime: "6 min read",
      title: "RAI-GI Joins National AI Stakeholders Roundtable",
      author: "Communications Team",
      date: "April 25, 2025",
      excerpt: "Proud to be part of a pivotal conversation on shaping Nigeria's AI future through ethical governance and inclusive stakeholder engagement.",
      image: "/images/articles/Articlesimg5.jpeg",
      summary: `RAI-GI participated as a key stakeholder in Nigeria's National AI Stakeholders Roundtable, convened on April 25, 2025, at the National Universities Commission (NUC) Headquarters in Abuja. This strategic gathering, organized by the American Center for Artificial Intelligence (ACAI), brought together diverse stakeholders to chart Nigeria's path toward responsible AI adoption and governance, representing a critical juncture in the nation's AI policy development trajectory.

The roundtable employed a multi-stakeholder approach, incorporating perspectives from government agencies (25%), academic institutions (30%), civil society organizations (25%), and the private sector (20%). This inclusive composition ensured that AI governance frameworks under discussion reflected the needs and concerns of all segments of Nigerian society. RAI-GI's participation centered on advocating for human-centric policy architectures and the integration of African values into AI governance structures.

RAI-GI advanced three primary policy recommendations during the roundtable: First, a human-centric AI policy framework prioritizing transparency, algorithmic accountability, and public trust mechanisms, with human rights impact assessments integrated into all AI deployment protocols. Second, an African Values Integration Model emphasizing Ubuntu principles of collective responsibility and communal decision-making within contemporary AI governance structures. Third, an inclusive governance architecture institutionalizing marginalized community participation through structured consultation mechanisms.

The convening generated substantial momentum toward establishing Nigeria as a continental leader in ethical AI governance, with explicit commitments to multi-stakeholder engagement in subsequent policy development phases. The roundtable demonstrated unprecedented consensus on the need for proactive, inclusive AI governance frameworks that balance innovation with social responsibility, setting the stage for Nigeria's emergence as a model for responsible AI governance in Africa.`,
    },
  ];

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Announcement: "bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300",
      Partnership: "bg-green-100 text-green-700 dark:bg-green-950 dark:text-green-300",
      Research: "bg-purple-100 text-purple-700 dark:bg-purple-950 dark:text-purple-300",
      Event: "bg-orange-100 text-orange-700 dark:bg-orange-950 dark:text-orange-300",
    };
    return colors[category] || "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300";
  };

  const handleArticleClick = (article: Article) => {
    setSelectedArticle(article);
    setIsModalOpen(true);
  };

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/research-article.png"
            alt="Research and Insights"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-green/80"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold">
              Research & <span className="text-green-300">Insights</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-8 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <p className="text-center text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Latest research, policy analysis, and thought leadership on AI governance in Africa
          </p>
        </div>
      </section>

      {/* Articles List */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            {articles.map((article, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="grid md:grid-cols-[300px_1fr] gap-0">
                  {/* Image */}
                  <div className="relative h-64 md:h-auto">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getCategoryColor(article.category)}`}>
                          {article.category}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {article.readTime}
                        </span>
                      </div>
                      
                      <h2 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                        {article.title}
                      </h2>
                      
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                        {article.author} • {article.date}
                      </p>
                      
                      <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                        {article.excerpt}
                      </p>
                    </div>
                    
                    <div>
                      <Button 
                        onClick={() => handleArticleClick(article)}
                        className="bg-brand-blue hover:bg-brand-blue/90 text-white"
                      >
                        Read Full Article <i className="fas fa-arrow-right ml-2"></i>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Publication Modal */}
      <PublicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        publication={selectedArticle}
      />
    </main>
  );
}
