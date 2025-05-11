import Link from "next/link";
import type { SVGProps } from "react";

const socialLinks = [
  {
    name: "Twitter",
    href: "#",
    icon: (props: SVGProps<SVGSVGElement>) => (
      <svg {...props} fill="currentColor" viewBox="0 0 24 24">
        <path d="M19.633 7.997c.013.176.013.353.013.53 0 5.386-4.099 11.6-11.6 11.6-2.304 0-4.447-.676-6.25-1.84.32.038.637.05.97.05 1.91 0 3.67-.65 5.077-1.747-1.786-.037-3.293-1.21-3.816-2.825.25.037.5.062.764.062.367 0 .735-.05 1.078-.144-1.87-.375-3.28-2.03-3.28-4.017v-.05c.55.306 1.18.5 1.85.525a4.07 4.07 0 0 1-1.81-3.39c0-.75.2-1.45.55-2.05a11.6 11.6 0 0 0 8.41 4.27c-.062-.3-.1-.6-.1-.92 0-2.22 1.8-4.02 4.02-4.02 1.16 0 2.22.487 2.96 1.27a7.94 7.94 0 0 0 2.56-.98 4.01 4.01 0 0 1-1.77 2.22 8.04 8.04 0 0 0 2.31-.62 8.6 8.6 0 0 1-2.01 2.09z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (props: SVGProps<SVGSVGElement>) => (
      <svg {...props} fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.28h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.88v1.36h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v5.59z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (props: SVGProps<SVGSVGElement>) => (
      <svg {...props} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.242 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.242 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.242-1.308-3.608-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608.974-.974 2.242-1.246 3.608-1.308 1.266-.058 1.646-.07 4.85-.07zm0-2.163c-3.259 0-3.667.012-4.947.07-1.276.058-2.687.334-3.678 1.325-.991.991-1.267 2.402-1.325 3.678-.058 1.28-.07 1.688-.07 4.947s.012 3.667.07 4.947c.058 1.276.334 2.687 1.325 3.678.991.991 2.402 1.267 3.678 1.325 1.28.058 1.688.07 4.947.07s3.667-.012 4.947-.07c1.276-.058 2.687-.334 3.678-1.325.991-.991 1.267-2.402 1.325-3.678.058-1.28.07-1.688.07-4.947s-.012-3.667-.07-4.947c-.058-1.276-.334-2.687-1.325-3.678-.991-.991-2.402-1.267-3.678-1.325-1.28-.058-1.688-.07-4.947-.07zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-100 pt-10 pb-4 px-4 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <div className="font-bold text-lg mb-2">Al Biruni</div>
          <div className="text-sm text-gray-400 mb-2">
            albiruni@university.edu
          </div>
          <div className="flex gap-3 mt-2">
            {socialLinks.map((s) => (
              <a
                key={s.name}
                href={s.href}
                className="hover:text-blue-400 transition"
                aria-label={s.name}
                target="_blank"
                rel="noopener noreferrer"
              >
                {s.icon({ className: "h-6 w-6" })}
              </a>
            ))}
          </div>
        </div>
        <div>
          <div className="font-bold mb-2">Quick Links</div>
          <ul className="text-sm space-y-1">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="#">Contact</Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-bold mb-2">Legal</div>
          <ul className="text-sm space-y-1">
            <li>
              <Link href="#">Privacy Policy</Link>
            </li>
            <li>
              <Link href="#">Terms of Service</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 mt-8">
        © {new Date().getFullYear()} Al Biruni Research & Innovation Society
      </div>
    </footer>
  );
}
