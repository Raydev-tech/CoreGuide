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
} from "lucide-react";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
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
    icon: Trophy,
    title: "Security Competitions",
    description:
      "Join security contests, test your skills, and earn rewards.",
    link: "View Competitions",
    href: "#competitions",
  },
  {
    icon: Bug,
    title: "Vulnerability Research",
    description:
      "Learn about common exploits and how to prevent them.",
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
    description:
      "Example report covering access control and reentrancy risks.",
    link: "/reports/defi-protocol-v2",
  },
  {
    name: "NFT Marketplace",
    chain: "Polygon",
    date: "Oct 12, 2026",
    severity: "Medium",
    description:
      "Example report covering marketplace permissions and minting.",
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
    description:
      "Example report covering swap validation and routing logic.",
    link: "/reports/dex-router",
  },
];

const competitions = [
  {
    title: "DeFi Protocol Audit",
    chain: "Ethereum",
    status: "Upcoming",
    description: "Review lending, staking, and protocol logic.",
    link: "/competitions/defi-protocol-audit",
  },
  {
    title: "NFT Marketplace Challenge",
    chain: "Polygon",
    status: "Open",
    description: "Investigate minting, ownership, and access control.",
    link: "/competitions/nft-marketplace-challenge",
  },
  {
    title: "Lending Protocol Review",
    chain: "Arbitrum",
    status: "Completed",
    description: "Explore liquidation and interest calculation risks.",
    link: "/competitions/lending-protocol-review",
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
    description:
      "Protect privileged functions from unauthorized access.",
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
          <img src="guide.jpeg" alt="CoreGuide Logo" className="w-20 rounded-full" />
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
    <section
      id="home"
      className="relative overflow-hidden border-b border-white/5"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_45%,rgba(14,116,200,0.18),transparent_48%)]" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:50px_50px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:py-28 lg:grid-cols-2 lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-400/30 bg-amber-400/5 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-amber-400">
            <ShieldCheck size={15} />
            Smart Contract Security
          </span>

          <h1 className="mt-7 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Secure Your Code.
            <span className="block text-amber-400">
              Protect Your Protocol.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-400">
            CoreGuide Audit helps Web3 teams strengthen their smart
            contracts through security reviews, transparent reports,
            and competitive vulnerability research.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-amber-400 px-6 py-3.5 font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-amber-300"
            >
              Request an Audit <ArrowRight size={18} />
            </a>
            <a
              href="#reports"
              className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-6 py-3.5 font-semibold text-white transition hover:border-amber-400 hover:text-amber-400"
            >
              Browse Reports
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-xs text-slate-400">
            {[
              "Security-focused reviews",
              "Transparent findings",
              "Research community",
            ].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <CheckCircle size={14} className="text-amber-400" />
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-lg">
          <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="relative rounded-3xl border border-blue-400/20 bg-[#07152b]/80 p-7 shadow-2xl shadow-blue-950/40 sm:p-10">
            <div className="mb-8 flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-slate-400">
                Security workspace
              </span>
              <span className="flex items-center gap-2 text-xs text-emerald-400">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Ready to review
              </span>
            </div>

            <div className="mx-auto flex h-36 w-36 items-center justify-center rounded-[2rem] border-2 border-amber-400/70 bg-gradient-to-br from-amber-300/20 to-blue-900/60 shadow-xl shadow-amber-500/10 sm:h-44 sm:w-44">
              <ShieldCheck className="h-24 w-24 text-amber-400 sm:h-28 sm:w-28" />
            </div>

            <h2 className="mt-7 text-center text-2xl font-bold text-white">
              CoreGuide Audit
            </h2>
            <p className="mt-2 text-center text-sm text-slate-400">
              Security starts with understanding your code.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <FileText className="mb-3 text-amber-400" />
                <p className="font-semibold text-white">Audit Reports</p>
                <p className="mt-1 text-xs text-slate-400">
                  Findings & fixes
                </p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <Trophy className="mb-3 text-amber-400" />
                <p className="font-semibold text-white">Competitions</p>
                <p className="mt-1 text-xs text-slate-400">
                  Research challenges
                </p>
              </div>
            </div>
          </div>
        </div>
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
          Demonstration entries only. Replace with real, verified audit
          reports before publishing.
        </p>
      </div>
    </section>
  );
}

function Competitions() {
  return (
    <section id="competitions" className="border-b border-white/5 py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Security Research"
          title="Join Security Competitions"
          description="Discover challenge formats where researchers investigate vulnerabilities and help strengthen smart contracts."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {competitions.map((contest) => (
            <article
              key={contest.title}
              className="rounded-2xl border border-white/10 bg-[#081328] p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="rounded-xl bg-amber-400/10 p-3">
                  <Trophy className="text-amber-400" size={25} />
                </div>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
                  {contest.status}
                </span>
              </div>

              <h3 className="mt-5 text-lg font-bold text-white">
                {contest.title}
              </h3>
              <p className="mt-2 text-xs text-amber-400">{contest.chain}</p>
              <p className="mt-4 text-sm leading-6 text-slate-400">
                {contest.description}
              </p>

              <a
                href={contest.link}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-amber-400"
              >
                Explore challenge <ChevronRight size={16} />
              </a>
            </article>
          ))}
        </div>
        <p className="mt-5 text-xs text-slate-500">
          Sample competition listings; no live contest availability or
          rewards are claimed.
        </p>
      </div>
    </section>
  );
}

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
          <label className="mb-2 block text-sm text-slate-300">
            Your name
          </label>
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
              Demo form submitted locally. Connect a backend to receive
              and store real requests.
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
            <img src="/guide.jpeg" alt="CoreGuide Logo" className="w-20 rounded-full" />
          </a>
          <p className="mt-5 max-w-sm text-sm leading-7 text-slate-400">
            Building a safer Web3 ecosystem through smart contract
            security education, transparent research, and responsible
            vulnerability disclosure.
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
            Learn how to identify risks, document findings, and improve
            smart contract security.
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
          <p>© {new Date().getFullYear()} CoreGuide Audit. All rights reserved.</p>
          <p>Security research. Responsible disclosure. Safer contracts.</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <main className="min-h-screen bg-[#050c1b] font-sans text-white selection:bg-amber-400 selection:text-slate-950">
      <Navbar />
      <Hero />
      <Services />
      <Statistics />
      <WhyUs />
      <Reports />
      <Competitions />
      <Vulnerabilities />
      <Contact />
      <Footer />
    </main>
  );
}
