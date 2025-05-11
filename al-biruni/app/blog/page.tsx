"use client";
import Link from "next/link";
import { useState } from "react";

const posts = [
  {
    id: 1,
    title: "The Future of EdTech",
    excerpt:
      "How technology is transforming education for the next generation.",
    author: "Dr. Sara Malik",
    date: "2024-04-10",
    tag: "Education",
  },
  {
    id: 2,
    title: "Nanotechnology Breakthroughs",
    excerpt: "Recent advances in nanotech and their real-world applications.",
    author: "Adeel Khan",
    date: "2024-03-28",
    tag: "Science",
  },
  {
    id: 3,
    title: "Women in STEM: Breaking Barriers",
    excerpt: "Stories and strategies for empowering women in science and tech.",
    author: "Fatima Zahra",
    date: "2024-03-15",
    tag: "Diversity",
  },
  {
    id: 4,
    title: "AI for Social Good",
    excerpt:
      "Exploring how artificial intelligence can address global challenges.",
    author: "Omar Farooq",
    date: "2024-04-01",
    tag: "AI",
  },
  {
    id: 5,
    title: "Robotics in Everyday Life",
    excerpt: "How robotics is quietly revolutionizing our daily routines.",
    author: "Sara Malik",
    date: "2024-03-22",
    tag: "Technology",
  },
  {
    id: 6,
    title: "Climate Change and Innovation",
    excerpt:
      "Innovative solutions to combat climate change from the research frontlines.",
    author: "Bilal Khan",
    date: "2024-03-10",
    tag: "Environment",
  },
  {
    id: 7,
    title: "The Power of Open Source",
    excerpt: "Why open source matters for research and innovation.",
    author: "Ayesha Siddiqui",
    date: "2024-02-28",
    tag: "Technology",
  },
  {
    id: 8,
    title: "Data Science Bootcamp Recap",
    excerpt: "Key takeaways from our recent intensive data science bootcamp.",
    author: "Fatima Zahra",
    date: "2024-02-15",
    tag: "Data Science",
  },
  {
    id: 9,
    title: "Quantum Computing Demystified",
    excerpt: "A simple guide to understanding quantum computing basics.",
    author: "Prof. Adeel Khan",
    date: "2024-01-30",
    tag: "Science",
  },
];

const tags = ["All", ...Array.from(new Set(posts.map((p) => p.tag)))];

export default function BlogPage() {
  const [selectedTag, setSelectedTag] = useState("All");
  const filtered =
    selectedTag === "All" ? posts : posts.filter((p) => p.tag === selectedTag);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 dark:from-[#18181b] dark:to-[#23272f] py-12 px-4 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-10 text-center">
        Community Blog
      </h1>

      {/* Tag Filter */}
      <div className="flex flex-wrap gap-3 mb-10 justify-center">
        {tags.map((tag) => (
          <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-4 py-1 rounded-full border text-sm font-medium transition shadow-sm
              ${
                selectedTag === tag
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-white dark:bg-[#23272f] text-gray-700 dark:text-gray-200 border-gray-200 dark:border-gray-700 hover:bg-blue-100 dark:hover:bg-blue-900"
              }
            `}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Blog Grid */}
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filtered.map((post) => (
          <Link
            key={post.id}
            href={`/blog/${post.id}`}
            className="bg-white dark:bg-[#23272f] rounded-xl shadow p-6 flex flex-col border border-gray-100 dark:border-gray-800 hover:shadow-xl hover:border-blue-400 dark:hover:border-blue-500 transition group"
          >
            <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-400 mb-2 group-hover:underline">
              {post.title}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 flex-1">
              {post.excerpt}
            </p>
            <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mt-auto">
              <span>By {post.author}</span>
              <span>{post.date}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
