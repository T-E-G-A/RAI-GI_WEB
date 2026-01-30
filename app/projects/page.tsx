"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
// Using Font Awesome icons
import { useState } from "react";

type ProjectStatus = "All" | "Ongoing" | "Concluded";

interface Project {
  status: "Ongoing" | "Concluded";
  title: string;
  description: string;
  duration: string;
  image: string;
  tags: string[];
}

export default function Projects() {
  const [filter, setFilter] = useState<ProjectStatus>("All");

  const projects: Project[] = [
    {
      status: "Ongoing",
      title: "AI Governance Framework Development for West Africa",
      description: "Developing comprehensive AI governance frameworks tailored to West African contexts, addressing regional challenges and opportunities in AI deployment.",
      duration: "2024 - 2026",
      image: "/images/articles/Articlesimg3.jpeg",
      tags: ["Policy", "Governance", "West Africa"],
    },
    {
      status: "Ongoing",
      title: "AI Safety Research Initiative",
      description: "Conducting cutting-edge research on AI safety, alignment, and existential risk mitigation with focus on African perspectives and priorities.",
      duration: "2024 - Ongoing",
      image: "/images/articles/Articlesimg1.jpeg",
      tags: ["Research", "AI Safety", "Risk Mitigation"],
    },
    {
      status: "Ongoing",
      title: "Digital Literacy and AI Awareness Campaign",
      description: "Large-scale public education initiative to promote digital literacy and AI awareness across African communities, reaching millions of citizens.",
      duration: "2025 - 2027",
      image: "/images/articles/Articlesimg5.jpeg",
      tags: ["Education", "Public Awareness", "Capacity Building"],
    },
    {
      status: "Concluded",
      title: "AAA Systems Certification Framework Launch",
      description: "Successfully launched Nigeria's first independent certification framework for AI, Algorithmic, and Autonomous Systems in partnership with ForHumanity.",
      duration: "2024 - 2025",
      image: "/images/articles/Articlesimg2.jpeg",
      tags: ["Certification", "Standards", "Partnership"],
    },
    {
      status: "Concluded",
      title: "National AI Policy Consultation Series",
      description: "Completed comprehensive stakeholder consultation series informing Nigeria's national AI policy, engaging government, industry, and civil society.",
      duration: "2024",
      image: "/images/articles/Articlesimg4.jpeg",
      tags: ["Policy", "Consultation", "Stakeholder Engagement"],
    },
    {
      status: "Ongoing",
      title: "African AI Ethics Network",
      description: "Building a pan-African network of AI ethics researchers, practitioners, and policymakers to share knowledge and coordinate efforts across the continent.",
      duration: "2025 - Ongoing",
      image: "/images/articles/RAI-GIxUNIDO.jpeg",
      tags: ["Network", "Collaboration", "Ethics"],
    },
  ];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.status === filter);

  const ongoingCount = projects.filter(p => p.status === "Ongoing").length;
  const concludedCount = projects.filter(p => p.status === "Concluded").length;

  const getStatusColor = (status: string) => {
    return status === "Ongoing" 
      ? "bg-green-100 text-green-700"
      : "bg-gray-100 text-gray-700";
  };

  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/partnership-bg.png"
            alt="Our Projects"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-brand-green/80"></div>
        </div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold">
              Our <span className="text-green-300">Projects</span>
            </h1>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Advancing responsible AI governance through strategic initiatives and collaborative projects across Africa
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-4 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Filter Buttons */}
          <div className="flex justify-center gap-4">
            <button
              onClick={() => setFilter("All")}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                filter === "All"
                  ? "bg-brand-blue text-white shadow-lg"
                  : "bg-white text-gray-700 hover:shadow-md"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter("Ongoing")}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                filter === "Ongoing"
                  ? "bg-brand-blue text-white shadow-lg"
                  : "bg-white text-gray-700 hover:shadow-md"
              }`}
            >
              Ongoing ({ongoingCount})
            </button>
            <button
              onClick={() => setFilter("Concluded")}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                filter === "Concluded"
                  ? "bg-brand-blue text-white shadow-lg"
                  : "bg-white text-gray-700 hover:shadow-md"
              }`}
            >
              Concluded ({concludedCount})
            </button>
          </div>
        </div>
      </section>

      {/* Projects List */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <div className="grid md:grid-cols-[300px_1fr] gap-0">
                  {/* Image */}
                  <div className="relative h-64 md:h-auto">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(project.status)}`}>
                          {project.status}
                        </span>
                        <span className="text-sm text-gray-500">
                          📅 {project.duration}
                        </span>
                      </div>
                      
                      <h2 className="text-2xl font-bold mb-3 text-gray-900">
                        {project.title}
                      </h2>
                      
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 rounded-full text-xs bg-brand-blue/10 text-brand-blue"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <Button className="bg-brand-blue hover:bg-brand-blue/90 text-white">
                        Learn More <i className="fas fa-arrow-right ml-2"></i>
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
