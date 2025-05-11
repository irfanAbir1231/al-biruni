import {
  AcademicCapIcon,
  PresentationChartBarIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  TrophyIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    title: "Courses",
    desc: "Hands-on, expert-led courses in emerging fields of science and technology.",
    icon: AcademicCapIcon,
  },
  {
    title: "Seminars",
    desc: "Regular research talks and seminars by leading academics and industry professionals.",
    icon: PresentationChartBarIcon,
  },
  {
    title: "Research Articles",
    desc: "Curated, peer-reviewed articles on cutting-edge research topics.",
    icon: DocumentTextIcon,
  },
  {
    title: "Community Blog",
    desc: "A platform for sharing ideas, stories, and insights from our vibrant community.",
    icon: ChatBubbleLeftRightIcon,
  },
  {
    title: "Leaderboard & Assignments",
    desc: "Track your progress, complete assignments, and climb the leaderboard.",
    icon: TrophyIcon,
  },
];

const team = [
  { name: "Dr. Sara Malik", role: "President" },
  { name: "Adeel Khan", role: "Vice President" },
  { name: "Fatima Zahra", role: "Research Lead" },
  { name: "Omar Farooq", role: "Seminars Coordinator" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 dark:from-[#18181b] dark:to-[#23272f] py-12 px-4 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-10 text-center">
        About Us
      </h1>

      {/* Mission and Vision */}
      <section className="w-full max-w-3xl mb-16">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          Our Mission
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg">
          To ignite curiosity, foster innovation, and empower the next
          generation of researchers and leaders through collaborative learning
          and impactful projects.
        </p>
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-4">
          Our Vision
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg">
          To be a leading hub for research and innovation, bridging academia and
          industry, and inspiring positive change in society.
        </p>
      </section>

      {/* What We Do */}
      <section className="w-full max-w-5xl mb-20">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">
          What We Do
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-white dark:bg-[#23272f] rounded-xl shadow p-6 flex flex-col items-center text-center border border-gray-100 dark:border-gray-800 hover:shadow-lg transition"
            >
              <f.icon className="h-10 w-10 text-blue-600 dark:text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {f.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Team (optional) */}
      <section className="w-full max-w-4xl">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-100 mb-8 text-center">
          Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white dark:bg-[#23272f] rounded-xl shadow p-6 flex flex-col items-center border border-gray-100 dark:border-gray-800"
            >
              <UserCircleIcon className="h-12 w-12 text-gray-400 dark:text-gray-600 mb-3" />
              <div className="text-base font-semibold text-gray-900 dark:text-white mb-1">
                {member.name}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {member.role}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
