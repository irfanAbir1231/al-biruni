import Link from "next/link";

const seminarImages = [
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=600&q=80",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&q=80",
  "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=600&q=80",
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 dark:from-[#18181b] dark:to-[#23272f] flex flex-col">
      {/* Hero Section */}
      <section className="relative w-full h-[420px] sm:h-[520px] flex items-center justify-center overflow-hidden mb-12">
        <img
          src="hero.jpg"
          alt="Al Biruni Society Group"
          className="absolute inset-0 w-full h-full object-cover object-center z-0 blur-md"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-blue-900/60 z-10" />
        <div className="relative z-20 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight drop-shadow-lg">
            Welcome to Al Biruni Research & Innovation Society
          </h1>
          <p className="text-lg sm:text-2xl text-blue-100 mb-6 max-w-2xl font-medium drop-shadow">
            Igniting curiosity. Empowering discovery. Shaping the future.
          </p>
          <p className="text-base sm:text-lg text-blue-200 mb-8 max-w-xl">
            Join a vibrant community of scholars, innovators, and learners
            dedicated to advancing research and fostering innovation.
          </p>
          <Link
            href="#courses"
            className="inline-block px-8 py-3 rounded-full bg-blue-600 text-white font-semibold shadow-lg hover:bg-blue-700 transition-colors text-lg"
          >
            Join Our Courses
          </Link>
        </div>
      </section>

      {/* About Us */}
      <section className="py-10 px-4 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-gray-800 dark:text-gray-100 tracking-tight leading-snug">
          About Us
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
          We are a vibrant community of scholars, innovators, and learners
          dedicated to advancing research and fostering innovation. Our mission
          is to bridge the gap between curiosity and impact through
          collaborative learning, hands-on projects, and thought leadership.
        </p>
      </section>

      {/* Featured Course */}
      <section id="courses" className="py-10 px-4 max-w-4xl mx-auto w-full">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100 tracking-tight leading-snug">
          Featured Course
        </h2>
        <div className="bg-white dark:bg-[#23272f] rounded-xl border border-blue-100 dark:border-blue-900 shadow-lg p-6 flex flex-col sm:flex-row items-center justify-between gap-6 transition-shadow duration-200">
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold text-blue-700 dark:text-blue-400 mb-2 leading-tight">
              Introduction to Quantum Computing
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-1 text-base sm:text-lg">
              Duration: 8 weeks
            </p>
          </div>
          <Link
            href="#"
            className="px-6 py-2 rounded-full bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition-colors text-base"
          >
            View Details
          </Link>
        </div>
      </section>

      {/* Recent Seminars */}
      <section className="py-10 px-4 max-w-6xl mx-auto w-full">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100 tracking-tight leading-snug">
          Recent Seminars
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "AI in Healthcare",
              date: "2024-04-10",
              desc: "Exploring the impact of artificial intelligence on modern healthcare systems.",
              img: seminarImages[0],
            },
            {
              title: "Renewable Energy Trends",
              date: "2024-03-28",
              desc: "Latest research and innovations in renewable energy technologies.",
              img: seminarImages[1],
            },
            {
              title: "Blockchain for Social Good",
              date: "2024-03-15",
              desc: "How blockchain technology is being used to drive positive social change.",
              img: seminarImages[2],
            },
          ].map((seminar, i) => (
            <div
              key={i}
              className="bg-white dark:bg-[#23272f] rounded-xl border border-gray-100 dark:border-gray-800 shadow-lg p-0 flex flex-col overflow-hidden transition-transform duration-200 ease-in-out hover:scale-[1.03] hover:shadow-xl group"
            >
              <img
                src={seminar.img}
                alt={seminar.title}
                className="w-full h-40 object-cover object-center group-hover:brightness-95 transition duration-200"
                loading="lazy"
              />
              <div className="p-5 flex flex-col flex-1">
                <span className="text-xs text-gray-400 mb-2">
                  {seminar.date}
                </span>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1 leading-tight">
                  {seminar.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-2 flex-1">
                  {seminar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="py-10 px-4 max-w-6xl mx-auto w-full">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100 tracking-tight leading-snug">
          Recent Blog Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              className="bg-white dark:bg-[#23272f] rounded-xl border border-gray-100 dark:border-gray-800 shadow-lg p-5 flex flex-col items-start transition-shadow duration-200 hover:shadow-xl"
            >
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2 leading-tight">
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
      <section className="py-10 px-4 max-w-3xl mx-auto w-full">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800 dark:text-gray-100 tracking-tight leading-snug">
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
    </div>
  );
}
