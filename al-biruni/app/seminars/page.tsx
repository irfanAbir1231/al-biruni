import Link from "next/link";

const upcoming = [
  {
    title: "AI in Healthcare",
    speaker: "Dr. Sara Malik",
    datetime: "2024-05-10, 3:00 PM",
    desc: "Exploring the impact of artificial intelligence on modern healthcare systems.",
  },
  {
    title: "Quantum Computing 101",
    speaker: "Prof. Adeel Khan",
    datetime: "2024-05-18, 11:00 AM",
    desc: "A beginner's guide to the principles and applications of quantum computing.",
  },
  {
    title: "Renewable Energy Trends",
    speaker: "Dr. Fatima Zahra",
    datetime: "2024-06-01, 2:00 PM",
    desc: "Latest research and innovations in renewable energy technologies.",
  },
];

const past = [
  {
    title: "Blockchain for Social Good",
    speaker: "Omar Farooq",
    datetime: "2024-04-15, 4:00 PM",
    desc: "How blockchain technology is being used to drive positive social change.",
  },
  {
    title: "Women in STEM: Breaking Barriers",
    speaker: "Ayesha Siddiqui",
    datetime: "2024-03-28, 1:00 PM",
    desc: "Panel discussion on empowering women in science and technology fields.",
  },
  {
    title: "Data Science Bootcamp Recap",
    speaker: "Bilal Khan",
    datetime: "2024-03-10, 5:00 PM",
    desc: "Key takeaways and highlights from our intensive data science bootcamp.",
  },
];

export default function SeminarsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 dark:from-[#18181b] dark:to-[#23272f] py-12 px-4 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-12 text-center">
        Seminars & Research Talks
      </h1>

      {/* Upcoming Seminars */}
      <section className="w-full max-w-6xl mb-16">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-8">
          Upcoming Seminars
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {upcoming.map((s, i) => (
            <div
              key={i}
              className="bg-white dark:bg-[#23272f] rounded-xl shadow p-6 flex flex-col border border-blue-100 dark:border-blue-900 hover:shadow-xl transition group"
            >
              <h3 className="text-lg font-semibold text-blue-700 dark:text-blue-400 mb-1 group-hover:underline">
                {s.title}
              </h3>
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                Speaker: {s.speaker}
              </div>
              <div className="text-xs text-gray-400 mb-3">{s.datetime}</div>
              <p className="text-gray-700 dark:text-gray-300 mb-6 flex-1">
                {s.desc}
              </p>
              <Link
                href="#"
                className="px-4 py-2 rounded-full bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition self-start"
              >
                Register
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Past Seminars */}
      <section className="w-full max-w-6xl">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-8">
          Past Seminars
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {past.map((s, i) => (
            <div
              key={i}
              className="bg-white dark:bg-[#23272f] rounded-xl shadow p-6 flex flex-col border border-gray-100 dark:border-gray-800 hover:shadow-xl transition group"
            >
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-1 group-hover:underline">
                {s.title}
              </h3>
              <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                Speaker: {s.speaker}
              </div>
              <div className="text-xs text-gray-400 mb-3">{s.datetime}</div>
              <p className="text-gray-700 dark:text-gray-300 mb-6 flex-1">
                {s.desc}
              </p>
              <Link
                href="#"
                className="px-4 py-2 rounded-full bg-blue-500 text-white font-medium shadow hover:bg-blue-600 transition self-start"
              >
                Watch Recording
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
