"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    project: "",
    budget: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const offices = [
    {
      city: "New York",
      address: "123 Creative Street\nSoHo, NY 10013",
      phone: "+1 (555) 123-4567",
      email: "ny@basicdept.com",
    },
    {
      city: "Berlin",
      address: "Kreuzberg Studios\n10997 Berlin, Germany",
      phone: "+49 30 12345678",
      email: "berlin@basicdept.com",
    },
    {
      city: "Remote",
      address: "Everywhere & Anywhere\nGlobal Collaboration",
      phone: "+1 (555) 987-6543",
      email: "remote@basicdept.com",
    },
  ]

  return (
    <div className="min-h-screen bg-[#252422] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Let's Talk</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to create something extraordinary? We'd love to hear about your project and explore how we can bring
            your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-[#f9cdcd]">Start a Project</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#f4f4f4]/10 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f9cdcd] focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#f4f4f4]/10 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f9cdcd] focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2">
                  Company
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#f4f4f4]/10 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f9cdcd] focus:border-transparent"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="project" className="block text-sm font-medium mb-2">
                    Project Type
                  </label>
                  <select
                    id="project"
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#f4f4f4]/10 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f9cdcd] focus:border-transparent"
                  >
                    <option value="">Select a project type</option>
                    <option value="website">Website Design & Development</option>
                    <option value="mobile">Mobile App</option>
                    <option value="branding">Brand Identity</option>
                    <option value="ecommerce">E-commerce Platform</option>
                    <option value="campaign">Digital Campaign</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium mb-2">
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-[#f4f4f4]/10 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f9cdcd] focus:border-transparent"
                  >
                    <option value="">Select budget range</option>
                    <option value="25k-50k">$25k - $50k</option>
                    <option value="50k-100k">$50k - $100k</option>
                    <option value="100k-250k">$100k - $250k</option>
                    <option value="250k+">$250k+</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Tell us about your project *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Describe your project, goals, timeline, and any specific requirements..."
                  className="w-full px-4 py-3 bg-[#f4f4f4]/10 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#f9cdcd] focus:border-transparent resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-[#f9cdcd] text-[#252422] hover:bg-[#f9cdcd]/90 transition-colors duration-300 py-4"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-8 text-[#f9cdcd]">Get in Touch</h2>

            <div className="space-y-8 mb-12">
              <div>
                <h3 className="text-xl font-semibold mb-3">General Inquiries</h3>
                <p className="text-gray-300 mb-2">hello@basicdept.com</p>
                <p className="text-gray-300">+1 (555) 123-4567</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">New Business</h3>
                <p className="text-gray-300 mb-2">projects@basicdept.com</p>
                <p className="text-gray-300">+1 (555) 987-6543</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Press & Media</h3>
                <p className="text-gray-300 mb-2">press@basicdept.com</p>
                <p className="text-gray-300">+1 (555) 456-7890</p>
              </div>
            </div>

            {/* Office Locations */}
            <h3 className="text-2xl font-bold mb-6 text-[#f9cdcd]">Our Offices</h3>
            <div className="space-y-6">
              {offices.map((office, index) => (
                <div key={index} className="bg-[#f4f4f4]/5 rounded-lg p-6">
                  <h4 className="text-lg font-semibold mb-3">{office.city}</h4>
                  <div className="text-gray-300 space-y-1">
                    <p className="whitespace-pre-line">{office.address}</p>
                    <p>{office.phone}</p>
                    <p>{office.email}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Response Time */}
            <div className="mt-8 p-6 bg-[#f9cdcd]/10 rounded-lg border border-[#f9cdcd]/20">
              <h4 className="font-semibold mb-2 text-[#f9cdcd]">Response Time</h4>
              <p className="text-gray-300 text-sm">
                We typically respond to all inquiries within 24 hours during business days. For urgent matters, please
                call us directly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
