import Link from "next/link";

// Mock post data
const post = {
  title: "The Future of EdTech",
  author: "Dr. Sara Malik",
  date: "2024-04-10",
  tags: ["Education", "Technology"],
  content: (
    <article className="prose prose-blue dark:prose-invert max-w-none">
      <h2>How technology is transforming education</h2>
      <p>
        The education sector is undergoing a massive transformation thanks to
        rapid advances in technology. From AI-powered tutors to immersive VR
        classrooms, the future of learning is more accessible and engaging than
        ever before.
      </p>
      <h3>Key Trends</h3>
      <ul>
        <li>Personalized learning paths</li>
        <li>Remote and hybrid classrooms</li>
        <li>Gamification and interactive content</li>
      </ul>
      <h3>Sample Code</h3>
      <pre className="bg-gray-900 text-gray-100 rounded-lg p-4 overflow-x-auto text-sm mb-4">
        <code>{`def greet(name):
    print(f"Hello, {name}!")

greet("World")`}</code>
      </pre>
      <h3>EdTech in Action</h3>
      <p>
        <img
          src="https://images.unsplash.com/photo-1513258496099-48168024aec0?w=800&q=80"
          alt="Students using technology"
          className="rounded-lg shadow mb-4"
        />
        Schools and universities are adopting new tools to make learning more
        effective and inclusive. The future is bright for students and educators
        alike.
      </p>
    </article>
  ),
};

export default function BlogPostPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 dark:from-[#18181b] dark:to-[#23272f] py-12 px-4 flex flex-col items-center">
      <div className="w-full max-w-3xl mx-auto bg-white dark:bg-[#23272f] rounded-xl shadow p-8">
        {/* Title, author, date */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-2">
          {post.title}
        </h1>
        <div className="flex flex-wrap gap-4 items-center text-sm text-gray-500 dark:text-gray-400 mb-8">
          <span>By {post.author}</span>
          <span>•</span>
          <span>{post.date}</span>
        </div>
        {/* Main content */}
        <div className="mb-8">{post.content}</div>
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-8">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        {/* Back to Blog */}
        <Link
          href="/blog"
          className="inline-block px-6 py-2 rounded-full bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
        >
          ← Back to Blog
        </Link>
      </div>
    </div>
  );
}
