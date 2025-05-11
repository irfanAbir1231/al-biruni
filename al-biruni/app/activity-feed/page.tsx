import Link from "next/link";
import {
  AcademicCapIcon,
  PresentationChartBarIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
} from "@heroicons/react/24/outline";

const activities = [
  {
    date: "2024-04-18",
    title: "Week 4 Assignment Released",
    type: "Course",
    link: "#",
  },
  {
    date: "2024-04-15",
    title: "Seminar: Blockchain for Social Good",
    type: "Seminar",
    link: "#",
  },
  {
    date: "2024-04-12",
    title: "New Blog Post: AI for Social Good",
    type: "Blog",
    link: "#",
  },
  {
    date: "2024-04-10",
    title: "Article Published: AI Ethics in Healthcare",
    type: "Article",
    link: "#",
  },
  {
    date: "2024-04-05",
    title: "Leaderboard Updated",
    type: "Course",
  },
  {
    date: "2024-03-30",
    title: "Seminar: Women in STEM",
    type: "Seminar",
    link: "#",
  },
  {
    date: "2024-03-28",
    title: "Blog Post: Nanotechnology Breakthroughs",
    type: "Blog",
    link: "#",
  },
];

const typeMeta = {
  Course: {
    icon: AcademicCapIcon,
    color: "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300",
  },
  Seminar: {
    icon: PresentationChartBarIcon,
    color: "bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300",
  },
  Blog: {
    icon: ChatBubbleLeftRightIcon,
    color:
      "bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-300",
  },
  Article: {
    icon: DocumentTextIcon,
    color:
      "bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300",
  },
};

export default function ActivityFeedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-200 dark:from-[#18181b] dark:to-[#23272f] py-12 px-4 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-10 text-center">
        Activity Feed
      </h1>
      <div className="w-full max-w-2xl flex flex-col gap-6 overflow-y-auto">
        {activities.map((a, i) => {
          const meta = typeMeta[a.type];
          return (
            <div
              key={i}
              className="flex items-start gap-4 bg-white dark:bg-[#23272f] rounded-xl shadow p-5 border border-gray-100 dark:border-gray-800 hover:shadow-lg transition"
            >
              <span className={`flex-shrink-0 rounded-full p-2 ${meta.color}`}>
                <meta.icon className="h-6 w-6" />
              </span>
              <div className="flex-1">
                <div className="flex flex-wrap gap-2 items-center mb-1">
                  <span className="text-sm font-semibold text-gray-900 dark:text-white">
                    {a.title}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-medium ${meta.color}`}
                  >
                    {a.type}
                  </span>
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                  {a.date}
                </div>
                {a.link && (
                  <Link
                    href={a.link}
                    className="inline-block mt-1 text-xs text-blue-600 dark:text-blue-400 font-medium hover:underline"
                  >
                    View
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
