import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 dark:from-[#18181b] dark:to-[#23272f] flex flex-col">
      {/* Hero Section */}
      <section className="w-full py-20 px-4 flex flex-col items-center justify-center text-center bg-white dark:bg-[#18181b]">
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-4 text-gray-900 dark:text-white">
          Al Biruni Research & Innovation Society
        </h1>
        <p className="text-lg sm:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl">
          Igniting curiosity. Empowering discovery. Shaping the future.
        </p>
        <Link
          href="#courses"
          className="inline-block px-8 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 transition"
        >
          Explore Courses
        </Link>
      </section>

      {/* About Us */}
      <section className="py-12 px-4 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-100">
          About Us
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg">
          We are a vibrant community of scholars, innovators, and learners
          dedicated to advancing research and fostering innovation. Our mission
          is to bridge the gap between curiosity and impact through
          collaborative learning, hands-on projects, and thought leadership.
        </p>
      </section>

      {/* Featured Course */}
      <section id="courses" className="py-12 px-4 max-w-4xl mx-auto w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
          Featured Course
        </h2>
        <div className="bg-white dark:bg-[#23272f] rounded-xl shadow-md p-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-2">
              Introduction to Quantum Computing
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-1">
              Duration: 8 weeks
            </p>
          </div>
          <Link
            href="#"
            className="px-6 py-2 rounded-full bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
          >
            View Details
          </Link>
        </div>
      </section>

      {/* Recent Seminars */}
      <section className="py-12 px-4 max-w-5xl mx-auto w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
          Recent Seminars
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { title: "AI in Healthcare", date: "2024-04-10" },
            { title: "Renewable Energy Trends", date: "2024-03-28" },
            { title: "Blockchain for Social Good", date: "2024-03-15" },
          ].map((seminar, i) => (
            <div
              key={i}
              className="bg-white dark:bg-[#23272f] rounded-lg shadow p-5 flex flex-col items-start"
            >
              <span className="text-xs text-gray-400 mb-2">{seminar.date}</span>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                {seminar.title}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="py-12 px-4 max-w-5xl mx-auto w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
          Recent Blog Posts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { title: "The Future of EdTech", author: "Dr. Sara Malik" },
            { title: "Nanotechnology Breakthroughs", author: "Adeel Khan" },
            {
              title: "Women in STEM: Breaking Barriers",
              author: "Fatima Zahra",
            },
          ].map((post, i) => (
            <div
              key={i}
              className="bg-white dark:bg-[#23272f] rounded-lg shadow p-5 flex flex-col items-start"
            >
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                {post.title}
              </h3>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                By {post.author}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Activity Feed Preview */}
      <section className="py-12 px-4 max-w-3xl mx-auto w-full">
        <h2 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100">
          Activity Feed
        </h2>
        <ul className="space-y-4">
          {[
            { date: "2024-04-12", title: "Launched new mentorship program" },
            { date: "2024-04-05", title: "Published annual research report" },
            { date: "2024-03-30", title: "Hosted STEM outreach event" },
          ].map((activity, i) => (
            <li key={i} className="flex items-center gap-4">
              <span className="text-xs text-gray-400 w-20">
                {activity.date}
              </span>
              <span className="text-gray-700 dark:text-gray-200">
                {activity.title}
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* Footer */}
      <footer className="mt-auto w-full bg-gray-900 text-gray-100 py-10 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div>
            <h4 className="font-bold mb-2">Contact</h4>
            <p className="text-sm">
              albiruni@university.edu
              <br />
              123 Innovation Ave, City
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-2">Quick Links</h4>
            <ul className="text-sm space-y-1">
              <li>
                <Link href="#">Home</Link>
              </li>
              <li>
                <Link href="#courses">Courses</Link>
              </li>
              <li>
                <Link href="#">Seminars</Link>
              </li>
              <li>
                <Link href="#">Blog</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-2">Socials</h4>
            <div className="flex gap-4 mt-1">
              <a href="#" className="hover:text-blue-400" aria-label="Twitter">
                Twitter
              </a>
              <a href="#" className="hover:text-blue-400" aria-label="LinkedIn">
                LinkedIn
              </a>
              <a
                href="#"
                className="hover:text-blue-400"
                aria-label="Instagram"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
        <div className="text-center text-xs text-gray-400 mt-8">
          © 2024 Al Biruni Research & Innovation Society
        </div>
      </footer>
    </div>
  );
}
