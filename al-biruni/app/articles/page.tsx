import Link from "next/link";

const articles = [
  {
    id: 1,
    title: "A Survey of Quantum Algorithms",
    abstract:
      "This article reviews the most significant quantum algorithms developed over the past decade, highlighting their computational advantages and limitations.",
    author: "Al Biruni Admin",
  },
  {
    id: 2,
    title: "Renewable Energy Storage Solutions",
    abstract:
      "An analysis of current and emerging technologies for efficient storage of renewable energy, with a focus on scalability and sustainability.",
    author: "Al Biruni Admin",
  },
  {
    id: 3,
    title: "AI Ethics in Healthcare",
    abstract:
      "Exploring the ethical considerations and challenges of deploying artificial intelligence in clinical settings.",
    author: "Al Biruni Admin",
  },
  {
    id: 4,
    title: "Advances in Nanomaterials",
    abstract:
      "A concise overview of recent breakthroughs in nanomaterial synthesis and their applications in industry.",
    author: "Al Biruni Admin",
  },
  {
    id: 5,
    title: "STEM Education Reform",
    abstract:
      "Discusses innovative approaches to reforming STEM education for greater inclusivity and effectiveness.",
    author: "Al Biruni Admin",
  },
  {
    id: 6,
    title: "Blockchain for Secure Voting",
    abstract:
      "Evaluates the potential and challenges of using blockchain technology to secure electronic voting systems.",
    author: "Al Biruni Admin",
  },
];

export default function ArticlesPage() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 py-12 px-4 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-neutral-900 dark:text-neutral-100 mb-12 text-center tracking-tight">
        Research Articles
      </h1>
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg shadow-sm p-6 flex flex-col justify-between min-h-[260px] hover:shadow-md transition"
          >
            <div>
              <h2 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100 mb-2 leading-snug">
                {article.title}
              </h2>
              <p className="text-neutral-600 dark:text-neutral-300 text-sm mb-4 line-clamp-3">
                {article.abstract}
              </p>
            </div>
            <div className="flex items-center justify-between mt-auto pt-2">
              <span className="text-xs text-neutral-500 dark:text-neutral-400 font-medium">
                {article.author}
              </span>
              <Link
                href="#"
                className="px-4 py-1 rounded-full bg-neutral-200 dark:bg-neutral-700 text-neutral-800 dark:text-neutral-100 text-xs font-semibold shadow-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 transition"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
