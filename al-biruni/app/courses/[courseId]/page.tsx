import Link from "next/link";

const course = {
  title: "Intro to Python & Machine Learning",
  description:
    "A hands-on introduction to Python programming and foundational machine learning concepts. Each week covers a new topic, with quizzes and assignments to reinforce learning.",
  weeks: [
    { topic: "Python Basics", quiz: "Available", assignment: "Pending" },
    { topic: "Data Structures", quiz: "Completed", assignment: "Submitted" },
    { topic: "Numpy & Pandas", quiz: "Available", assignment: "Pending" },
    { topic: "Data Visualization", quiz: "Available", assignment: "Pending" },
    { topic: "Intro to ML", quiz: "Available", assignment: "Pending" },
    { topic: "Regression", quiz: "Available", assignment: "Pending" },
    { topic: "Classification", quiz: "Available", assignment: "Pending" },
    { topic: "Project Week", quiz: "Available", assignment: "Pending" },
  ],
};

const leaderboard = [
  { rank: 1, name: "Ayesha Siddiqui", score: 98 },
  { rank: 2, name: "Bilal Khan", score: 92 },
  { rank: 3, name: "Fatima Zahra", score: 89 },
  { rank: 4, name: "Omar Farooq", score: 85 },
  { rank: 5, name: "Sara Malik", score: 80 },
];

export default function CourseDetailsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 dark:from-[#18181b] dark:to-[#23272f] py-10 px-4 flex flex-col items-center">
      <div className="w-full max-w-5xl">
        {/* Top Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-end mb-6">
          <Link
            href="#"
            className="px-5 py-2 rounded-full bg-green-600 text-white font-medium shadow hover:bg-green-700 transition text-center"
          >
            Submit Assignment
          </Link>
          <Link
            href="#"
            className="px-5 py-2 rounded-full bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition text-center"
          >
            Take Quiz
          </Link>
        </div>

        {/* Title & Description */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-2">
          {course.title}
        </h1>
        <p className="text-gray-700 dark:text-gray-300 mb-8 max-w-2xl">
          {course.description}
        </p>

        {/* Weekly Classes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {course.weeks.map((week, i) => (
            <div
              key={i}
              className={`rounded-xl border-2 p-5 flex flex-col items-start shadow transition bg-white dark:bg-[#23272f] ${
                week.quiz === "Completed"
                  ? "border-green-400"
                  : "border-blue-200 dark:border-blue-700"
              }`}
            >
              <div className="text-xs text-gray-400 mb-1">Week {i + 1}</div>
              <div className="font-semibold text-lg text-gray-800 dark:text-gray-100 mb-2">
                {week.topic}
              </div>
              <div className="flex flex-col gap-1 w-full">
                <span
                  className={`text-sm font-medium ${
                    week.quiz === "Completed"
                      ? "text-green-600 dark:text-green-400"
                      : "text-blue-600 dark:text-blue-400"
                  }`}
                >
                  Quiz: {week.quiz}
                </span>
                <span
                  className={`text-sm font-medium ${
                    week.assignment === "Submitted"
                      ? "text-green-600 dark:text-green-400"
                      : "text-yellow-600 dark:text-yellow-400"
                  }`}
                >
                  Assignment: {week.assignment}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Leaderboard */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
            Leaderboard
          </h2>
          <div className="overflow-x-auto rounded-lg shadow">
            <table className="min-w-full bg-white dark:bg-[#23272f]">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-left text-xs font-semibold text-gray-500 dark:text-gray-300 uppercase">
                    Rank
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-semibold text-gray-500 dark:text-gray-300 uppercase">
                    Name
                  </th>
                  <th className="px-4 py-2 text-left text-xs font-semibold text-gray-500 dark:text-gray-300 uppercase">
                    Total Score
                  </th>
                </tr>
              </thead>
              <tbody>
                {leaderboard.map((entry) => (
                  <tr
                    key={entry.rank}
                    className="border-t border-gray-100 dark:border-gray-800"
                  >
                    <td className="px-4 py-2 font-bold text-blue-700 dark:text-blue-400">
                      {entry.rank}
                    </td>
                    <td className="px-4 py-2 text-gray-800 dark:text-gray-100">
                      {entry.name}
                    </td>
                    <td className="px-4 py-2 text-gray-700 dark:text-gray-300">
                      {entry.score}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
