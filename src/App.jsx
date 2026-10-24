import {
  ShieldCheck,
  FileText,
  Trophy,
  Bug,
  ArrowRight,
  Menu,
  X,
  CheckCircle,
  Code2,
  Search,
  LockKeyhole,
  ExternalLink,
  ChevronRight,
  CheckCircle2,
  Toolbox,
} from "lucide-react";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import {
  Link,
  BrowserRouter,
  useParams,
  Route,
  Routes,
} from "react-router-dom";
// import { Link } from "react-router-dom";

const services = [
  {
    icon: ShieldCheck,
    title: "Smart Contract Audits",
    description:
      "Get professional security reviews for your Solidity smart contracts.",
    link: "Explore Audits",
    href: "#audit",
  },
  {
    icon: FileText,
    title: "Audit Reports",
    description:
      "Explore published reports with detailed findings and remediation steps.",
    link: "View Reports",
    href: "#reports",
  },
  {
    icon: Toolbox,
    title: "Audit Tools",
    description:
      "Access open-source tools for static analysis, fuzzing, and testing smart contracts.",
    link: "View Tools",
    href: "#tools",
  },
  {
    icon: Bug,
    title: "Vulnerability Research",
    description: "Learn about common exploits and how to prevent them.",
    link: "Explore Vulnerabilities",
    href: "#vulnerabilities",
  },
];

const reports = [
  {
    name: "DeFi Protocol V2",
    chain: "Ethereum",
    date: "Oct 18, 2026",
    severity: "High",
    description: "Example report covering access control and reentrancy risks.",
    link: "/reports/defi-protocol-v2",
  },
  {
    name: "NFT Marketplace",
    chain: "Polygon",
    date: "Oct 12, 2026",
    severity: "Medium",
    description: "Example report covering marketplace permissions and minting.",
    link: "/reports/nft-marketplace",
  },
  {
    name: "Lending Platform",
    chain: "Arbitrum",
    date: "Oct 08, 2026",
    severity: "Low",
    description:
      "Example report covering interest calculations and liquidation.",
    link: "/reports/lending-platform",
  },
  {
    name: "DEX Router",
    chain: "Base",
    date: "Oct 05, 2026",
    severity: "High",
    description: "Example report covering swap validation and routing logic.",
    link: "/reports/dex-router",
  },
];

const competitions = [
  {
    id: "defi-audit-contest",
    title: "DeFi Protocol Audit Contest",
    category: "DeFi Security",
    status: "Upcoming",
    prize: "Prize TBA",
    date: "Date TBA",
    summary:
      "Explore a sample DeFi contract and practice finding security issues.",
    tasks: [
      "Review the supplied contracts",
      "Document reproducible issues",
      "Submit a responsible disclosure",
    ],
  },
  {
    id: "nft-marketplace-challenge",
    title: "NFT Marketplace Challenge",
    category: "NFT Security",
    status: "Open",
    prize: "Prize TBA",
    date: "Date TBA",
    summary:
      "Practice reviewing NFT listings, ownership checks, and payment logic.",
    tasks: [
      "Review marketplace logic",
      "Identify potential weaknesses",
      "Write a clear technical explanation",
    ],
  },
  {
    id: "lending-protocol-review",
    title: "Lending Protocol Review",
    category: "DeFi Research",
    status: "Ongoing",
    prize: "Rewards TBA",
    date: "Date TBA",
    summary:
      "Study lending, collateral, and liquidation logic in a practice environment.",
    tasks: [
      "Inspect lending calculations",
      "Review collateral assumptions",
      "Explain possible mitigations",
    ],
  },
  {
    id: "smart-contract-ctf",
    title: "Smart Contract CTF",
    category: "Capture the Flag",
    status: "Open",
    prize: "Prize TBA",
    date: "Date TBA",
    summary:
      "A practice challenge for learning smart contract security concepts.",
    tasks: [
      "Analyze challenge code",
      "Solve the intended challenge",
      "Explain the solution",
    ],
  },
];

const vulnerabilities = [
  {
    icon: LockKeyhole,
    title: "Reentrancy",
    description:
      "Prevent repeated external calls from manipulating contract state.",
  },
  {
    icon: ShieldCheck,
    title: "Access Control",
    description: "Protect privileged functions from unauthorized access.",
  },
  {
    icon: Code2,
    title: "Integer & Logic Errors",
    description:
      "Review arithmetic, business rules, and unexpected edge cases.",
  },
  {
    icon: Bug,
    title: "Front-Running",
    description:
      "Understand transaction ordering risks and possible mitigations.",
  },
];

function SectionHeading({ eyebrow, title, description }) {
  return (
    <div className="mb-10">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-amber-400">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-white md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
          {description}
        </p>
      )}
    </div>
  );
}

function SectionTitle({ eyebrow, title, description, action }) {
  return (
    <div className="mb-9 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
      <div className="max-w-2xl">
        <p className="mb-3 text-xs font-extrabold uppercase tracking-[0.24em] text-amber-400">
          {eyebrow}
        </p>
        <h2 className="text-2xl font-black text-white md:text-3xl">{title}</h2>
        {description && (
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-400">
            {description}
          </p>
        )}
      </div>
      {action}
    </div>
  );
}

function OutlineLink({ to, children }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center justify-center gap-2 rounded-lg border border-amber-500/50 px-4 py-2 text-xs font-bold text-amber-300 transition hover:bg-amber-400 hover:text-slate-950"
    >
      {children} <ArrowRight size={15} />
    </Link>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Home", "#home"],
    ["Audits", "#audit"],
    ["Reports", "#reports"],
    ["Competitions", "#competitions"],
    ["Vulnerabilities", "#vulnerabilities"],
    ["About", "#about"],
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050c1b]/95 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="#home" className="flex items-center gap-3">
          <img
            src="CoreGuard.jpeg"
            alt="CoreGuard Logo"
            className="w-20 rounded-full"
          />
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-sm text-slate-300 transition hover:text-amber-400"
            >
              {label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#reports"
            className="rounded-lg border border-white/15 px-4 py-2 text-sm text-white transition hover:border-amber-400"
          >
            Reports
          </a>
          <a
            href="#contact"
            className="rounded-lg bg-amber-400 px-4 py-2 text-sm font-bold text-slate-950 transition hover:bg-amber-300"
          >
            Get Started
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation"
          className="rounded-lg border border-white/10 p-2 text-white lg:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[#071124] p-5 lg:hidden">
          {links.map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setOpen(false)}
              className="block border-b border-white/5 py-3 text-sm text-slate-300 hover:text-amber-400"
            >
              {label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 block rounded-lg bg-amber-400 px-4 py-3 text-center font-bold text-slate-950"
          >
            Request an Audit
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="hero-bg relative isolate overflow-hidden border-b border-sky-900/40">
      {/* Background overlays */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#020b1a] via-[#020b1a]/60 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#020b1a]/70 via-transparent to-[#020b1a]/10" />

      <div className="mx-auto grid min-h-[680px] max-w-[1440px] items-center gap-6 px-6 py-20 md:grid-cols-[0.95fr_1.05fr] md:px-10 md:py-24 lg:min-h-[740px] lg:grid-cols-[0.9fr_1.1fr] lg:px-14 xl:px-20">
        <div className="max-w-xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/50 bg-amber-400/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-amber-300 backdrop-blur-sm">
            <span className="h-2 w-2 rounded-full bg-amber-400" />
            Smart Contract Security
          </div>

          <h1 className="text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
            Audit Your Code.
            <span className="mt-2 block text-amber-400">
              Protect Your Protocol.
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-sm leading-7 text-slate-300 md:text-base">
            CoreGuard Audit provides independent smart contract security
            reviews, transparent audit reports, and competitive security
            research for the decentralized world.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-amber-400 px-5 py-3 text-sm font-extrabold text-slate-950 shadow-lg shadow-amber-400/20 transition hover:-translate-y-0.5 hover:bg-amber-300"
            >
              Start an Audit <ArrowRight size={17} />
            </a>

            <a
              href="/#reports"
              className="rounded-lg border border-slate-400/70 bg-slate-950/30 px-5 py-3 text-sm font-bold text-white backdrop-blur-sm transition hover:border-amber-400 hover:text-amber-300"
            >
              Browse Reports
            </a>
          </div>

          <div className="mt-7 flex flex-wrap gap-x-5 gap-y-3 text-xs text-slate-200">
            {[
              "Professional Reviews",
              "Transparent Reports",
              "Community Driven",
            ].map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5">
                <CheckCircle2 size={14} className="shrink-0 text-amber-400" />
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Keeps the right side open for the background artwork */}
        <div className="hidden md:block min-h-[350px]" />
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="audit" className="border-b border-white/5 py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title="Comprehensive Security Solutions"
          description="Everything your team needs to build, review, and strengthen smart contracts."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <a
                href={service.href}
                key={service.title}
                className="group rounded-2xl border border-white/10 bg-[#081328] p-6 transition duration-300 hover:-translate-y-1 hover:border-amber-400/50 hover:bg-[#0b1930]"
              >
                <Icon className="h-9 w-9 text-amber-400 transition group-hover:scale-110" />
                <h3 className="mt-6 text-lg font-bold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 min-h-16 text-sm leading-6 text-slate-400">
                  {service.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-amber-400">
                  {service.link} <ArrowRight size={15} />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Statistics() {
  const stats = [
    ["Published Reports", "Explore", FileText],
    ["Security Contests", "Discover", Trophy],
    ["Vulnerability Guides", "Learn", Bug],
    ["Research Community", "Connect", ShieldCheck],
  ];

  return (
    <section className="border-b border-white/5 bg-[#081226] py-9">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-5 px-5 sm:grid-cols-4 lg:px-8">
        {stats.map(([title, subtitle, Icon]) => (
          <div key={title} className="flex items-center gap-4">
            <div className="rounded-xl border border-amber-400/20 bg-amber-400/5 p-3">
              <Icon className="text-amber-400" size={25} />
            </div>
            <div>
              <p className="font-bold text-white">{title}</p>
              <p className="mt-1 text-xs text-slate-400">{subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhyUs() {
  const benefits = [
    "Detailed and transparent findings",
    "Severity-based risk explanations",
    "Practical remediation guidance",
    "Continuous security education",
  ];

  return (
    <section id="about" className="border-b border-white/5 py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Why CoreGuide"
            title="Built for a Safer Web3 Ecosystem"
            description="Security is more than finding bugs. It is about understanding risk, improving code, and helping developers make better decisions."
          />

          <div className="space-y-4">
            {benefits.map((benefit) => (
              <div key={benefit} className="flex items-center gap-3">
                <CheckCircle className="shrink-0 text-amber-400" size={19} />
                <span className="text-sm text-slate-300">{benefit}</span>
              </div>
            ))}
          </div>

          <a
            href="#vulnerabilities"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-amber-400 px-5 py-3 font-bold text-slate-950 transition hover:bg-amber-300"
          >
            Explore Security Guides <ArrowRight size={17} />
          </a>
        </div>

        <div className="rounded-3xl border border-blue-400/20 bg-gradient-to-br from-blue-950/60 to-[#071020] p-7 sm:p-10">
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <div>
              <p className="text-sm font-semibold text-white">
                Smart Contract Review
              </p>
              <p className="mt-1 text-xs text-slate-400">
                Example analysis workflow
              </p>
            </div>
            <Code2 className="text-amber-400" size={28} />
          </div>

          {[
            ["01", "Analyze", "Review contract code and dependencies"],
            ["02", "Find Issues", "Identify and validate potential risks"],
            ["03", "Recommend Fixes", "Explain mitigation strategies"],
            ["04", "Publish Report", "Document verified findings"],
          ].map(([number, title, description]) => (
            <div key={number} className="mt-6 flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-amber-400/30 bg-amber-400/10 text-sm font-bold text-amber-400">
                {number}
              </div>
              <div>
                <h3 className="font-semibold text-white">{title}</h3>
                <p className="mt-1 text-sm leading-6 text-slate-400">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reports() {
  return (
    <section id="reports" className="border-b border-white/5 py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-5">
          <SectionHeading
            eyebrow="Research Library"
            title="Explore Audit Reports"
            description="Review example reports, security findings, and remediation recommendations."
          />
          <a
            href="#contact"
            className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300"
          >
            All Reports <ArrowRight size={16} />
          </a>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {reports.map((report) => (
            <article
              key={report.name}
              className="rounded-2xl border border-white/10 bg-[#081328] p-5 transition hover:border-amber-400/40"
            >
              <div className="flex items-center justify-between gap-2">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    report.severity === "High"
                      ? "bg-red-500/10 text-red-400"
                      : report.severity === "Medium"
                        ? "bg-amber-400/10 text-amber-400"
                        : "bg-emerald-400/10 text-emerald-400"
                  }`}
                >
                  {report.severity} severity
                </span>
                <FileText size={18} className="text-slate-500" />
              </div>

              <h3 className="mt-5 font-bold text-white">{report.name}</h3>
              <p className="mt-2 text-xs text-slate-500">
                {report.chain} · {report.date}
              </p>
              <p className="mt-4 text-sm leading-6 text-slate-400">
                {report.description}
              </p>

              <a
                href={report.link}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300"
              >
                Read Full Report <ExternalLink size={14} />
              </a>
            </article>
          ))}
        </div>
        <p className="mt-5 text-xs leading-6 text-slate-500">
          Demonstration entries only. Replace with real, verified audit reports
          before publishing.
        </p>
      </div>
    </section>
  );
}
function CompetitionCard({ competition }) {
  return (
    <article className="flex flex-col rounded-xl border border-sky-900/50 bg-slate-950/60 p-5 transition hover:-translate-y-1 hover:border-amber-400/50">
      <div className="mb-4 flex items-center justify-between gap-3">
        <Trophy size={25} className="text-amber-400" />
        <span className="rounded-full border border-sky-800 px-3 py-1 text-[10px] text-sky-200">
          {competition.status}
        </span>
      </div>
      <h3 className="font-bold text-white">{competition.title}</h3>
      <p className="mt-2 text-xs text-slate-400">{competition.category}</p>
      <p className="mt-4 flex-1 text-xs leading-6 text-slate-400">
        {competition.summary}
      </p>
      <div className="mt-4 flex justify-between gap-3 border-t border-slate-800 pt-4 text-xs">
        <span className="text-slate-500">{competition.date}</span>
        <span className="font-semibold text-amber-300">
          {competition.prize}
        </span>
      </div>
      <Link
        to={`/competitions/${competition.id}`}
        className="mt-4 flex items-center justify-between rounded-lg border border-amber-400/40 px-4 py-3 text-xs font-bold text-amber-300 hover:bg-amber-400 hover:text-slate-950"
      >
        View Competition <ArrowRight size={15} />
      </Link>
    </article>
  );
}

// function Competitions() {
//   return (
//     <section id="competitions" className="border-b border-sky-900/30 py-16">
//       <div className="mx-auto max-w-7xl px-5">
//         <SectionTitle
//           eyebrow="Active Competitions"
//           title="Join Security Competitions"
//           description="Test your skills, learn vulnerability research, and practice in authorized environments."
//           action={<OutlineLink to="/competitions">View All Competitions</OutlineLink>}
//         />
//         <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
//           {competitions.map((competition) => (
//             <CompetitionCard key={competition.id} competition={competition} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

function Vulnerabilities() {
  return (
    <section id="vulnerabilities" className="border-b border-white/5 py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Learn & Improve"
          title="Understand Common Vulnerabilities"
          description="Build your security knowledge with educational guides to smart contract risks and prevention."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {vulnerabilities.map((item) => {
            const Icon = item.icon;
            return (
              <article
                key={item.title}
                className="rounded-2xl border border-white/10 bg-[#081328] p-5 transition hover:border-amber-400/40"
              >
                <Icon className="text-amber-400" size={29} />
                <h3 className="mt-5 font-bold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {item.description}
                </p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-amber-400"
                >
                  Learn more <ArrowRight size={14} />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 lg:grid-cols-2 lg:px-8">
        <div>
          <SectionHeading
            eyebrow="Let's Work Together"
            title="Ready to Secure Your Smart Contract?"
            description="Tell us about your project, repository, and security review requirements."
          />
          <div className="space-y-4 text-sm text-slate-300">
            <p className="flex items-center gap-3">
              <ShieldCheck className="text-amber-400" />
              Smart contract security reviews
            </p>
            <p className="flex items-center gap-3">
              <FileText className="text-amber-400" />
              Structured findings and remediation guidance
            </p>
            <p className="flex items-center gap-3">
              <Search className="text-amber-400" />
              Clear scope and review requirements
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-white/10 bg-[#081328] p-6 sm:p-8"
        >
          <label className="mb-2 block text-sm text-slate-300">Your name</label>
          <input
            required
            placeholder="Enter your name"
            className="mb-5 w-full rounded-lg border border-white/10 bg-[#050c1b] px-4 py-3 text-white outline-none focus:border-amber-400"
          />

          <label className="mb-2 block text-sm text-slate-300">
            Email address
          </label>
          <input
            required
            type="email"
            placeholder="you@example.com"
            className="mb-5 w-full rounded-lg border border-white/10 bg-[#050c1b] px-4 py-3 text-white outline-none focus:border-amber-400"
          />

          <label className="mb-2 block text-sm text-slate-300">
            Project repository
          </label>
          <input
            placeholder="https://github.com/your-project"
            className="mb-5 w-full rounded-lg border border-white/10 bg-[#050c1b] px-4 py-3 text-white outline-none focus:border-amber-400"
          />

          <label className="mb-2 block text-sm text-slate-300">
            Tell us about your project
          </label>
          <textarea
            required
            rows={4}
            placeholder="Describe your contract and security requirements..."
            className="mb-5 w-full resize-y rounded-lg border border-white/10 bg-[#050c1b] px-4 py-3 text-white outline-none focus:border-amber-400"
          />

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-amber-400 px-5 py-3.5 font-bold text-slate-950 transition hover:bg-amber-300"
          >
            Submit Request <ArrowRight size={17} />
          </button>

          {submitted && (
            <p className="mt-4 text-sm text-amber-400">
              Demo form submitted locally. Connect a backend to receive and
              store real requests.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#040916]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-3 lg:px-8">
        <div>
          <a href="#home" className="flex items-center gap-3">
            <img
              src="/CoreGuide.jpeg"
              alt="CoreGuard Logo"
              className="w-20 rounded-full"
            />
          </a>
          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
            Building a safer Web3 ecosystem through smart contract security
            education, transparent research, and responsible vulnerability
            disclosure.
          </p>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="mt-5 inline-flex rounded-lg border border-white/10 p-3 text-slate-300 transition hover:border-amber-400 hover:text-amber-400"
          >
            <FaGithub size={20} />
          </a>
        </div>

        <div>
          <h3 className="font-bold text-white">Quick Links</h3>
          <div className="mt-5 grid grid-cols-2 gap-4 text-sm text-slate-400">
            {[
              ["Home", "#home"],
              ["Audits", "#audit"],
              ["Reports", "#reports"],
              ["Competitions", "#competitions"],
              ["Vulnerabilities", "#vulnerabilities"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <a key={label} href={href} className="hover:text-amber-400">
                {label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold text-white">Security First</h3>
          <p className="mt-5 text-sm leading-7 text-slate-400">
            Learn how to identify risks, document findings, and improve smart
            contract security.
          </p>
          <a
            href="#vulnerabilities"
            className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-amber-400"
          >
            Explore learning resources <ArrowRight size={15} />
          </a>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-3 px-5 py-5 text-xs text-slate-500 sm:flex-row lg:px-8">
          <p>
            © {new Date().getFullYear()} CoreGuard Audit. All rights reserved.
          </p>
          <p>Security research. Responsible disclosure. Safer contracts.</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <main className="min-h-screen bg-[#050c1b] font-sans text-white selection:bg-amber-400 selection:text-slate-950">
        <Navbar />
        <Hero />
        <Services />
        <Statistics />
        <WhyUs />
        <Reports />
        <competitions />
        <Vulnerabilities />
        <Contact />
        <Footer />
      </main>
    </BrowserRouter>
  );
}
