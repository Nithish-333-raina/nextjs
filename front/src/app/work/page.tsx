"use client"

import { Button } from "@/components/ui/button"

export default function WorkPage() {
  const projects = [
    {
      title: "Google Pixel Campaign",
      client: "Google",
      year: "2024",
      category: "Digital Campaign",
      description:
        "A revolutionary mobile experience design that redefined how users interact with smartphone technology.",
      image: "/placeholder.svg?height=500&width=800",
      tags: ["UX/UI", "Mobile", "Campaign"],
    },
    {
      title: "KFC Digital Ecosystem",
      client: "KFC",
      year: "2023",
      category: "Digital Transformation",
      description:
        "Complete digital transformation including mobile ordering, loyalty programs, and in-store experiences.",
      image: "/placeholder.svg?height=500&width=800",
      tags: ["E-commerce", "Mobile App", "Brand Identity"],
    },
    {
      title: "Wilson Tennis Innovation",
      client: "Wilson",
      year: "2024",
      category: "E-commerce Platform",
      description: "Interactive product showcase and e-commerce platform for premium tennis equipment.",
      image: "/placeholder.svg?height=500&width=800",
      tags: ["E-commerce", "Product Design", "Sports"],
    },
    {
      title: "Nike Air Max Experience",
      client: "Nike",
      year: "2023",
      category: "Interactive Experience",
      description: "Immersive web experience celebrating 35 years of Air Max innovation.",
      image: "/placeholder.svg?height=500&width=800",
      tags: ["Interactive", "3D", "Brand Experience"],
    },
    {
      title: "Spotify Wrapped Reimagined",
      client: "Spotify",
      year: "2024",
      category: "Data Visualization",
      description: "Next-generation music data visualization and sharing experience.",
      image: "/placeholder.svg?height=500&width=800",
      tags: ["Data Viz", "Social", "Music"],
    },
    {
      title: "Tesla Model Y Launch",
      client: "Tesla",
      year: "2023",
      category: "Product Launch",
      description: "Digital launch experience for Tesla's most anticipated vehicle.",
      image: "/placeholder.svg?height=500&width=800",
      tags: ["Automotive", "3D", "Launch Campaign"],
    },
  ]

  return (
    <div className="min-h-screen bg-[#252422] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Work</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We partner with forward-thinking brands to create digital experiences that drive results and inspire action.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-[#f9cdcd] font-medium">{project.client}</span>
                  <span className="text-gray-400 text-sm">{project.year}</span>
                </div>

                <h3 className="text-2xl font-bold group-hover:text-[#f9cdcd] transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-300 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-[#f4f4f4]/10 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                <Button
                  variant="outline"
                  className="bg-transparent border-[#f9cdcd] text-[#f9cdcd] hover:bg-[#f9cdcd] hover:text-[#252422] transition-all duration-300"
                >
                  View Case Study
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
