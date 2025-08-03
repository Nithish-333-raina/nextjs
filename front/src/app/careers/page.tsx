export default function CareersPage() {
  const openPositions = [
    {
      title: "Senior UX Designer",
      department: "Design",
      location: "New York / Remote",
      type: "Full-time",
      description:
        "Lead user experience design for major client projects, conduct user research, and mentor junior designers.",
      requirements: [
        "5+ years UX design experience",
        "Proficiency in Figma and design systems",
        "Strong portfolio of digital products",
      ],
    },
    {
      title: "Frontend Developer",
      department: "Development",
      location: "Berlin / Remote",
      type: "Full-time",
      description:
        "Build responsive, accessible web applications using modern JavaScript frameworks and cutting-edge technologies.",
      requirements: [
        "3+ years React/Next.js experience",
        "Strong CSS and animation skills",
        "Experience with accessibility standards",
      ],
    },
    {
      title: "Creative Director",
      department: "Creative",
      location: "New York",
      type: "Full-time",
      description:
        "Lead creative vision for major campaigns, oversee design team, and collaborate with clients on strategic initiatives.",
      requirements: ["8+ years creative leadership", "Award-winning portfolio", "Experience with brand strategy"],
    },
    {
      title: "Motion Designer",
      department: "Design",
      location: "Remote",
      type: "Contract",
      description: "Create engaging motion graphics and animations for web and mobile applications.",
      requirements: ["After Effects expertise", "3D animation skills preferred", "Portfolio of web animations"],
    },
  ]

  const benefits = [
    { icon: "💰", title: "Competitive Salary", description: "Above-market compensation with annual reviews" },
    { icon: "🏥", title: "Health & Wellness", description: "Comprehensive health, dental, and vision coverage" },
    { icon: "🏖️", title: "Unlimited PTO", description: "Take the time you need to recharge and stay creative" },
    { icon: "📚", title: "Learning Budget", description: "$3,000 annual budget for courses, conferences, and books" },
    { icon: "🏠", title: "Remote Flexibility", description: "Work from anywhere with flexible hours" },
    { icon: "🚀", title: "Growth Opportunities", description: "Clear career progression and leadership development" },
  ]

  return (
    <div className="min-h-screen bg-[#252422] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Careers</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join our team of passionate creatives, strategists, and technologists who are shaping the future of digital
            experiences.
          </p>
        </div>

        {/* Culture Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#f9cdcd]">Our Culture</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              At BASIC/DEPT., we believe that great work comes from great people. We've built a culture that values
              creativity, collaboration, and continuous learning. Our team is diverse, inclusive, and united by a shared
              passion for creating meaningful digital experiences.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We encourage experimentation, celebrate failures as learning opportunities, and support each other's
              growth both professionally and personally.
            </p>
          </div>
          <div className="relative">
            <img
              src="/placeholder.svg?height=400&width=600"
              alt="Team collaboration"
              className="w-full h-80 object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-6 bg-[#f4f4f4]/5 rounded-xl hover:bg-[#f4f4f4]/10 transition-colors duration-300"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-[#f9cdcd]">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Open Positions</h2>
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div
                key={index}
                className="bg-[#f4f4f4]/5 rounded-xl p-6 md:p-8 hover:bg-[#f4f4f4]/10 transition-colors duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-2 text-[#f9cdcd]">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <span>{position.department}</span>
                      <span>•</span>
                      <span>{position.location}</span>
                      <span>•</span>
                      <span>{position.type}</span>
                    </div>
                  </div>
                  <button className="mt-4 md:mt-0 bg-[#f9cdcd] text-[#252422] px-6 py-2 rounded-lg hover:bg-[#f9cdcd]/90 transition-colors duration-300">
                    Apply Now
                  </button>
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed">{position.description}</p>
                <div>
                  <h4 className="font-semibold mb-2">Requirements:</h4>
                  <ul className="text-gray-300 text-sm space-y-1">
                    {position.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start">
                        <span className="text-[#f9cdcd] mr-2">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="bg-[#f9cdcd] text-[#252422] rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Join Us?</h2>
          <p className="text-lg mb-8 opacity-80 max-w-2xl mx-auto">
            Don't see a perfect fit? We're always looking for exceptional talent. Send us your portfolio and let's start
            a conversation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#252422] text-white px-8 py-3 rounded-lg hover:bg-[#252422]/90 transition-colors duration-300">
              Send Portfolio
            </button>
            <button className="border-2 border-[#252422] text-[#252422] px-8 py-3 rounded-lg hover:bg-[#252422] hover:text-white transition-all duration-300">
              Learn About Our Process
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
