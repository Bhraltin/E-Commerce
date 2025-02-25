
import React from 'react';
import { ChevronRight, MessageSquare, Calendar } from 'lucide-react';

const FeaturedPost = () => {
  const posts = [
    {
      id: 1,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/desktop-blog-3-10MUDkoBekozZWfKP45VHlNDQXWxRi.png",
      tags: ["Google", "Trending", "New"],
      title: "Loudest à la Madison #1 (L'integral)",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10,
    },
    {
      id: 2,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/desktop-blog-3-10MUDkoBekozZWfKP45VHlNDQXWxRi.png",
      tags: ["Google", "Trending", "New"],
      title: "Loudest à la Madison #1 (L'integral)",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10,
    },
    {
      id: 3,
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/desktop-blog-3-10MUDkoBekozZWfKP45VHlNDQXWxRi.png",
      tags: ["Google", "Trending", "New"],
      title: "Loudest à la Madison #1 (L'integral)",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: "22 April 2021",
      comments: 10,
    },
  ];

  return (
    <section className="container mx-auto px-4 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="text-blue-500 text-sm font-medium mb-2 block">
          Practice Advice
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Featured Posts
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Problems trying to resolve the conflict between 
          the two major realms of Classical physics: Newtonian mechanics
        </p>
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
            {/* Image Container */}
            <div className="relative">
              <img 
                src={post.image || "/placeholder.svg"} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                NEW
              </span>
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Tags */}
              <div className="flex gap-3 mb-4">
                {post.tags.map((tag, index) => (
                  <span 
                    key={index}
                    className={`text-xs ${
                      tag === 'Google' ? 'text-blue-500' : 
                      tag === 'Trending' ? 'text-gray-600' : 
                      'text-gray-500'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {post.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-4">
                {post.description}
              </p>

              {/* Meta Info */}
              <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {post.date}
                </div>
                <div className="flex items-center">
                  <MessageSquare className="w-4 h-4 mr-2" />
                  {post.comments} comments
                </div>
              </div>

              {/* Learn More Link */}
              <a 
                href="#" 
                className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700"
              >
                Learn More
                <ChevronRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default FeaturedPost;