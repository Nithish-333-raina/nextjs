export default function ThinkingPage() {
  const articles = [
    {
      title: "The Future of Digital Experiences",
      author: "Sarah Chen",
      date: "March 20, 2024",
      readTime: "8 min read",
      excerpt:
        "Exploring how emerging technologies like AI, AR, and voice interfaces are reshaping the way we design digital products.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Future Tech", "UX Design", "Innovation"],
    },
    {
      title: "Sustainable Design in the Digital Age",
      author: "Elena Rodriguez",
      date: "March 10, 2024",
      readTime: "6 min read",
      excerpt:
        "How conscious design choices can reduce digital carbon footprints while creating more meaningful user experiences.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Sustainability", "Design Ethics", "Environment"],
    },
    {
      title: "The Psychology of Color in Digital Branding",
      author: "David Kim",
      date: "February 25, 2024",
      readTime: "10 min read",
      excerpt:
        "Understanding how color psychology influences user behavior and brand perception in digital environments.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Branding", "Psychology", "Color Theory"],
    },
    {
      title: "Microinteractions: The Details That Matter",
      author: "Marcus Johnson",
      date: "February 15, 2024",
      readTime: "7 min read",
      excerpt:
        "Why small interactive elements can make or break user experience and how to implement them effectively.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["UI Design", "Interaction", "User Experience"],
    },
    {
      title: "Building Inclusive Digital Products",
      author: "Sarah Chen",
      date: "February 5, 2024",
      readTime: "9 min read",
      excerpt: "A comprehensive guide to creating digital experiences that are accessible and inclusive for all users.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Accessibility", "Inclusion", "Design Ethics"],
    },
    {
      title: "The Art of Visual Storytelling",
      author: "Elena Rodriguez",
      date: "January 28, 2024",
      readTime: "5 min read",
      excerpt:
        "How to craft compelling narratives through visual design that resonate with audiences and drive engagement.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Storytelling", "Visual Design", "Content Strategy"],
    },
  ]

  return (
    <div className="min-h-screen bg-[#252422] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">Thinking</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Insights, perspectives, and deep dives into the world of design, technology, and digital innovation.
          </p>
        </div>

        {/* Featured Article */}
        <div className="mb-16 bg-[#f4f4f4]/5 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            <div className="relative h-80 lg:h-auto">
              <img
                src={articles[0].image || "/placeholder.svg"}
                alt={articles[0].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="bg-[#f9cdcd] text-[#252422] px-3 py-1 rounded-full text-sm font-medium">Featured</span>
              </div>
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-[#f9cdcd] font-medium">{articles[0].author}</span>
                <span className="text-gray-400 text-sm">{articles[0].date}</span>
                <span className="text-gray-400 text-sm">{articles[0].readTime}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">{articles[0].title}</h2>
              <p className="text-gray-300 leading-relaxed mb-6">{articles[0].excerpt}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {articles[0].tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-[#f4f4f4]/10 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <button className="text-[#f9cdcd] font-medium hover:underline self-start">Read Article →</button>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(1).map((article, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={article.image || "/placeholder.svg"}
                  alt={article.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <span>{article.author}</span>
                  <span>•</span>
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
                <h3 className="text-xl font-bold group-hover:text-[#f9cdcd] transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">{article.excerpt}</p>
                <div className="flex flex-wrap gap-2">
                  {article.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-[#f4f4f4]/10 rounded text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                <button className="text-[#f9cdcd] text-sm font-medium hover:underline">Read More →</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
