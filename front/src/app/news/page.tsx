export default function NewsPage() {
  const news = [
    {
      title: "BASIC/DEPT. Wins 26th Annual Webby Awards",
      date: "March 15, 2024",
      category: "Awards",
      excerpt:
        "Our Google Pixel campaign takes home the prestigious Webby Award for Best Mobile Experience, marking our third consecutive year of recognition.",
      image: "/placeholder.svg?height=300&width=500",
      featured: true,
    },
    {
      title: "Expanding Our Creative Team",
      date: "February 28, 2024",
      category: "Company News",
      excerpt:
        "We're excited to welcome five new talented designers and developers to our growing team as we continue to take on ambitious projects.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Partnership with Sustainable Brands Initiative",
      date: "February 10, 2024",
      category: "Sustainability",
      excerpt:
        "BASIC/DEPT. joins forces with leading sustainability advocates to create digital experiences that promote environmental consciousness.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "Featured in Design Week Magazine",
      date: "January 22, 2024",
      category: "Press",
      excerpt:
        "Our innovative approach to data visualization is highlighted in Design Week's annual review of breakthrough creative agencies.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "New Office Opening in Berlin",
      date: "January 8, 2024",
      category: "Expansion",
      excerpt:
        "We're thrilled to announce the opening of our European headquarters in Berlin, expanding our global reach and creative capabilities.",
      image: "/placeholder.svg?height=300&width=500",
    },
    {
      title: "AI Integration in Creative Workflows",
      date: "December 15, 2023",
      category: "Innovation",
      excerpt:
        "Exploring how artificial intelligence can enhance creativity while maintaining the human touch that defines exceptional design.",
      image: "/placeholder.svg?height=300&width=500",
    },
  ]

  return (
    <div className="min-h-screen bg-[#252422] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Latest News</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with our latest projects, achievements, and insights from the world of digital design.
          </p>
        </div>

        {/* Featured Article */}
        {news
          .filter((article) => article.featured)
          .map((article, index) => (
            <div key={index} className="mb-16 bg-[#f4f4f4]/5 rounded-2xl overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-80 lg:h-auto">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#f9cdcd] text-[#252422] px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-[#f9cdcd] font-medium">{article.category}</span>
                    <span className="text-gray-400 text-sm">{article.date}</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">{article.title}</h2>
                  <p className="text-gray-300 leading-relaxed mb-6">{article.excerpt}</p>
                  <button className="text-[#f9cdcd] font-medium hover:underline self-start">Read Full Story →</button>
                </div>
              </div>
            </div>
          ))}

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news
            .filter((article) => !article.featured)
            .map((article, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-[#252422]/80 text-white px-3 py-1 rounded-full text-sm">
                      {article.category}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-gray-400 text-sm">{article.date}</div>
                  <h3 className="text-xl font-bold group-hover:text-[#f9cdcd] transition-colors duration-300">
                    {article.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{article.excerpt}</p>
                  <button className="text-[#f9cdcd] text-sm font-medium hover:underline">Read More →</button>
                </div>
              </div>
            ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-20 bg-[#f9cdcd] text-[#252422] rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay in the Loop</h2>
          <p className="text-lg mb-8 opacity-80">Get the latest news and insights delivered to your inbox.</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 focus:outline-none focus:ring-2 focus:ring-[#252422]"
            />
            <button className="bg-[#252422] text-white px-6 py-3 rounded-lg hover:bg-[#252422]/90 transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
