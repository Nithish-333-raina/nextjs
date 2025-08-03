export default function AboutPage() {
  const team = [
    { name: "Sarah Chen", role: "Creative Director", image: "/placeholder.svg?height=300&width=300" },
    { name: "Marcus Johnson", role: "Lead Developer", image: "/placeholder.svg?height=300&width=300" },
    { name: "Elena Rodriguez", role: "UX Designer", image: "/placeholder.svg?height=300&width=300" },
    { name: "David Kim", role: "Brand Strategist", image: "/placeholder.svg?height=300&width=300" },
  ]

  const stats = [
    { number: "150+", label: "Projects Completed" },
    { number: "50+", label: "Global Clients" },
    { number: "8", label: "Years Experience" },
    { number: "25+", label: "Awards Won" },
  ]

  return (
    <div className="min-h-screen bg-[#252422] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold mb-8">About BASIC/DEPT.</h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Founded in 2016, BASIC/DEPT. is a creative agency that bridges the gap between innovative design and
            cutting-edge technology. We believe in creating digital experiences that not only look beautiful but drive
            meaningful results for our clients.
          </p>
        </div>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#f9cdcd]">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              We exist to help brands tell their stories in ways that matter. Through thoughtful design, strategic
              thinking, and technical excellence, we create digital experiences that connect with audiences on a deeper
              level.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our approach combines data-driven insights with creative intuition, ensuring every project delivers both
              aesthetic appeal and measurable business impact.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 text-[#f9cdcd]">Our Values</h2>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <span className="text-[#f9cdcd] mr-3">•</span>
                <span>
                  <strong>Innovation:</strong> We push boundaries and explore new possibilities in every project.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#f9cdcd] mr-3">•</span>
                <span>
                  <strong>Collaboration:</strong> We believe the best work comes from true partnership with our clients.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#f9cdcd] mr-3">•</span>
                <span>
                  <strong>Excellence:</strong> We're committed to delivering work that exceeds expectations.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#f9cdcd] mr-3">•</span>
                <span>
                  <strong>Impact:</strong> Every project should create positive change for users and businesses.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="space-y-2">
              <div className="text-4xl md:text-5xl font-bold text-[#f9cdcd]">{stat.number}</div>
              <div className="text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center group">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#f9cdcd] transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-gray-400">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Services Section */}
        <div className="bg-[#f4f4f4]/5 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4 text-[#f9cdcd]">Design</h3>
              <p className="text-gray-300">
                Brand identity, UI/UX design, and visual storytelling that captures attention and drives engagement.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4 text-[#f9cdcd]">Development</h3>
              <p className="text-gray-300">
                Custom web applications, e-commerce platforms, and mobile experiences built with cutting-edge
                technology.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4 text-[#f9cdcd]">Strategy</h3>
              <p className="text-gray-300">
                Digital strategy, user research, and data analysis to ensure every decision is backed by insights.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
