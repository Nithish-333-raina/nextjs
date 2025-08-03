"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const clients = [
    {
      name: "Google",
      project: "Pixel Campaign",
      description:
        "Revolutionary mobile experience design for Google Pixel launch campaign, reaching 50M+ users globally.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      name: "KFC",
      project: "Digital Transformation",
      description:
        "Complete digital ecosystem redesign including mobile app, website, and in-store experiences across 24 countries.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      name: "Wilson",
      project: "Tennis Innovation",
      description: "Interactive product showcase and e-commerce platform for Wilson's premium tennis equipment line.",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <div className="min-h-screen bg-[#252422] text-white">
      {/* Hero Section */}
      <main className="flex flex-col items-center justify-center min-h-[80vh] px-6 text-center">
        <div
          className={`transform transition-all duration-1000 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-tight">BASIC</h1>

          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            We are a creative agency focused on design, development, and digital experiences that make a difference.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/work">
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-white text-white hover:bg-white hover:text-[#252422] transition-all duration-300 px-8 py-3"
              >
                View Our Work
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-[#f9cdcd] text-[#252422] hover:bg-[#f9cdcd]/90 transition-all duration-300 px-8 py-3"
              >
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Client Work Section */}
      <section className="px-6 md:px-8 pb-16">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">Featured Clients</h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {clients.map((client, index) => (
              <div
                key={client.name}
                className="group cursor-pointer transform transition-all duration-500 hover:scale-105"
              >
                <div className="bg-[#f4f4f4] h-64 mb-6 rounded-lg overflow-hidden">
                  <img
                    src={client.image || "/placeholder.svg"}
                    alt={`${client.name} ${client.project}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold group-hover:text-[#f9cdcd] transition-colors duration-300">
                      {client.name}
                    </h3>
                    <span className="text-sm text-gray-400 font-medium">{client.project}</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed">{client.description}</p>
                  <div className="pt-2">
                    <span className="text-[#f9cdcd] text-sm font-medium group-hover:underline">View Case Study →</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-8 py-16 bg-[#f9cdcd] text-[#252422]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to create something extraordinary?</h2>
          <p className="text-lg mb-8 opacity-80">Let's discuss your next project and bring your vision to life.</p>
          <Link href="/contact">
            <Button size="lg" className="bg-[#252422] text-white hover:bg-[#252422]/90 px-8 py-3">
              Start a Conversation
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
