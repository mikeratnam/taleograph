import React from 'react';
import { Clock, Eye, MessageSquare, BookOpen } from 'lucide-react';

export default function TravelBlog() {
  const posts = [
    {
      id: 1,
      title: "Hidden Gems of Kyoto: A Local's Perspective",
      excerpt: "Discovering the secret gardens and ancient temples that tourists often miss...",
      image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      readTime: "8 min read",
      views: 1234,
      comments: 23,
      date: "3 days ago"
    },
    {
      id: 2,
      title: "Sustainable Travel: My Journey Through Scandinavia",
      excerpt: "How I explored Norway, Sweden, and Denmark while minimizing my carbon footprint...",
      image: "https://images.unsplash.com/photo-1520681363578-a4e98c5460fd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      readTime: "12 min read",
      views: 856,
      comments: 15,
      date: "1 week ago"
    },
    {
      id: 3,
      title: "A Food Lover's Guide to Mediterranean Cuisine",
      excerpt: "From Spanish tapas to Greek mezedes, exploring the diverse flavors of the Mediterranean...",
      image: "https://images.unsplash.com/photo-1507048331197-7d4ac70811cf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      readTime: "10 min read",
      views: 2045,
      comments: 45,
      date: "2 weeks ago"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-gray-900">Travel Blog</h2>
        <button className="flex items-center text-blue-600 hover:text-blue-700">
          <BookOpen className="h-5 w-5 mr-2" />
          View All Posts
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article key={post.id} className="bg-white rounded-xl shadow-sm overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-48 object-cover"
            />
            
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {post.title}
              </h3>
              
              <p className="text-gray-600 mb-4">
                {post.excerpt}
              </p>
              
              <div className="flex items-center text-sm text-gray-500 space-x-4">
                <span className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  {post.readTime}
                </span>
                <span className="flex items-center">
                  <Eye className="h-4 w-4 mr-1" />
                  {post.views}
                </span>
                <span className="flex items-center">
                  <MessageSquare className="h-4 w-4 mr-1" />
                  {post.comments}
                </span>
              </div>
              
              <button className="mt-4 w-full px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-gray-200 transition-colors">
                Read More
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}