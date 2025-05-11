import Link from "next/link";

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 dark:from-[#18181b] dark:to-[#23272f] py-12 px-4 flex flex-col items-center">
      {/* Page Title */}
      <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-10 text-center">
        Our Courses
      </h1>

      {/* Active Course Section */}
      <section className="w-full max-w-3xl mb-16">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
          Active Course
        </h2>
        <div className="bg-white dark:bg-[#23272f] rounded-xl shadow-lg p-8 flex flex-col sm:flex-row items-center justify-between gap-8 border border-blue-100 dark:border-blue-900">
          <div>
            <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-2">
              Intro to Python & Machine Learning
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-1">
              Total Classes: 8
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Current Week: 3
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="px-5 py-2 rounded-full bg-blue-600 text-white font-medium shadow hover:bg-blue-700 transition"
              >
                View Details
              </Link>
              <Link
                href="#"
                className="px-5 py-2 rounded-full bg-green-600 text-white font-medium shadow hover:bg-green-700 transition"
              >
                Join Course
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Past Courses Section */}
      <section className="w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-6">
          Past Courses
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title: "Data Science Bootcamp", duration: "10 weeks" },
            { title: "Web Development Essentials", duration: "6 weeks" },
            { title: "AI for Everyone", duration: "4 weeks" },
            { title: "Robotics Fundamentals", duration: "8 weeks" },
          ].map((course, i) => (
            <div
              key={i}
              className="bg-white dark:bg-[#23272f] rounded-xl shadow p-6 flex flex-col justify-between border border-gray-100 dark:border-gray-800 hover:shadow-xl transition"
            >
              <div>
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-4">
                  Duration: {course.duration}
                </p>
              </div>
              <Link
                href="#"
                className="px-4 py-2 rounded-full bg-blue-500 text-white font-medium shadow hover:bg-blue-600 transition self-start"
              >
                View Recap
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
