import type { Metadata} from "next";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
// Using Font Awesome icons

export const metadata: Metadata = {
  title: "Articles - RAI-GI",
  description: "Latest research and news on AI governance in Africa",
};

export default function Articles() {
  const articles = [
    {
      category: "Announcement",
      readTime: "7 min read",
      title: "Pioneering AAA Systems Auditing & Certification in Nigeria",
      author: "RAI-GI & ForHumanity Partnership Team",
      date: "August 6, 2025",
      excerpt: "RAI-GI, in partnership with ForHumanity, announces Nigeria's first independent certification framework for AI, Algorithmic, and Autonomous Systems, aligned with NDPC 2023.",
      image: "/images/articles/Articlesimg2.jpeg",
    },
    {
      category: "Partnership",
      readTime: "5 min read",
      title: "RAI-GI Joins UNIDO AIM Global Alliance on AI for Industry and Manufacturing",
      author: "RAI-GI Leadership Team",
      date: "August 7, 2025",
      excerpt: "RAI-GI officially joins the UNIDO AIM Global Alliance, reaffirming our commitment to advancing responsible, ethical, and inclusive AI adoption in Africa's industrial and manufacturing sectors.",
      image: "/images/articles/RAI-GIxUNIDO.jpeg",
    },
    {
      category: "Announcement",
      readTime: "4 min read",
      title: "RAI-GI Signs the Global AI Treaty",
      author: "RAI-GI Leadership Team",
      date: "November 15, 2025",
      excerpt: "RAI-GI officially signs the AI Treaty on AITreaty.org, joining a global coalition dedicated to ensuring that artificial intelligence is developed safely, ethically, and for the benefit of all humanity.",
      image: "/images/articles/Articlesimg1.jpeg",
    },
    {
      category: "Announcement",
      readTime: "3 min read",
      title: "📢 Big News: RAI-GI is Now Officially Registered!",
      author: "RAI-GI Leadership Team",
      date: "June 5, 2025",
      excerpt: "We are proud to announce that the Responsible AI Governance Initiative Ltd/GTE has been formally registered with Nigeria's Corporate Affairs Commission (CAC) under registration number RC – 8538166.",
      image: "/images/articles/Articlesimg4.jpeg",
    },
    {
      category: "Research",
      readTime: "12 min read",
      title: "Harnessing AI and Emerging Technologies to Accelerate Africa's Sustainable Development Goals",
      author: "Muhammad Ahmad Janyau, Founder, RAI-GI",
      date: "June 2, 2025",
      excerpt: "How AI and emerging technologies can accelerate Africa's progress toward the UN Sustainable Development Goals by 2030.",
      image: "/images/articles/Articlesimg3.jpeg",
    },
    {
      category: "Event",
      readTime: "6 min read",
      title: "RAI-GI Joins National AI Stakeholders Roundtable",
      author: "Communications Team",
      date: "April 25, 2025",
      excerpt: "Proud to be part of a pivotal conversation on shaping Nigeria's AI future through ethical governance and inclusive stakeholder engagement.",
      image: "/images/articles/Articlesimg5.jpeg",
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
                      <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white">
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
    </main>
  );
}
