export default function PledgePage() {
  const commitments = [
    {
      title: "Carbon Neutral by 2025",
      description: "We're committed to achieving carbon neutrality across all our operations and projects by 2025.",
      icon: "🌱",
    },
    {
      title: "Inclusive Design Standards",
      description: "Every project we create meets WCAG 2.1 AA accessibility standards as a minimum requirement.",
      icon: "♿",
    },
    {
      title: "Ethical AI Implementation",
      description: "We pledge to use AI responsibly, with transparency and human oversight in all AI-assisted work.",
      icon: "🤖",
    },
    {
      title: "Fair Labor Practices",
      description: "We ensure fair wages, work-life balance, and equal opportunities for all team members.",
      icon: "⚖️",
    },
    {
      title: "Open Source Contribution",
      description: "We contribute 10% of our development time to open source projects that benefit the community.",
      icon: "💻",
    },
    {
      title: "Education & Mentorship",
      description:
        "We provide free mentorship and educational resources to underrepresented groups in tech and design.",
      icon: "📚",
    },
  ]

  return (
    <div className="min-h-screen bg-[#252422] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Pledge</h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We believe that great design comes with great responsibility. Our pledge represents our commitment to
            creating positive impact through our work, our practices, and our community involvement.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-[#f9cdcd] text-[#252422] rounded-2xl p-8 md:p-12 mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-lg leading-relaxed max-w-4xl mx-auto">
            "To create digital experiences that not only drive business success but also contribute to a more inclusive,
            sustainable, and equitable digital future for everyone."
          </p>
        </div>

        {/* Commitments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {commitments.map((commitment, index) => (
            <div
              key={index}
              className="bg-[#f4f4f4]/5 rounded-xl p-6 hover:bg-[#f4f4f4]/10 transition-colors duration-300"
            >
              <div className="text-4xl mb-4">{commitment.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-[#f9cdcd]">{commitment.title}</h3>
              <p className="text-gray-300 leading-relaxed">{commitment.description}</p>
            </div>
          ))}
        </div>

        {/* Progress Section */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Progress</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#f9cdcd]">2024 Achievements</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-[#f9cdcd] mr-3">✓</span>
                  <span>Reduced our digital carbon footprint by 40% through optimized code and green hosting</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f9cdcd] mr-3">✓</span>
                  <span>Achieved 100% accessibility compliance across all client projects</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f9cdcd] mr-3">✓</span>
                  <span>Mentored 25 junior designers from underrepresented communities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f9cdcd] mr-3">✓</span>
                  <span>Contributed 500+ hours to open source projects</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 text-[#f9cdcd]">2025 Goals</h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <span className="text-[#f9cdcd] mr-3">→</span>
                  <span>Achieve complete carbon neutrality across all operations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f9cdcd] mr-3">→</span>
                  <span>Launch our free design education program for underserved communities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f9cdcd] mr-3">→</span>
                  <span>Establish our sustainability consulting service for other agencies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#f9cdcd] mr-3">→</span>
                  <span>Partner with 10 non-profit organizations for pro-bono work</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-6">Join Us in Making a Difference</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            We believe that positive change happens when we work together. Whether you're a client, partner, or fellow
            creative, let's collaborate to build a better digital future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#f9cdcd] text-[#252422] px-8 py-3 rounded-lg hover:bg-[#f9cdcd]/90 transition-colors duration-300">
              Partner With Us
            </button>
            <button className="border border-[#f9cdcd] text-[#f9cdcd] px-8 py-3 rounded-lg hover:bg-[#f9cdcd] hover:text-[#252422] transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
