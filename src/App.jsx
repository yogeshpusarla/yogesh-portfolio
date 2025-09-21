import React, { useEffect, useState } from "react";

export default function Portfolio() {
  const SITE = {
    name: "Yogesh Pusarla",
    tagline: "Product • AI • Telemetry • Automation",
    location: "Bentonville, AR, USA",
    email: "Yogeshpusarla@outlook.com",
    accent: "#14b8a6",
    linkedin: "https://www.linkedin.com/in/yogeshpusarla/",
    github: "https://github.com/your-handle",
    resumeUrl: "#",
  };

  const FEATURED = [
    {
      title: "Jevons Paradox at Work: Why Efficiency Doesn’t Always Mean Less",
      url: "https://www.linkedin.com/pulse/jevons-paradox-work-why-efficiency-doesnt-always-mean-yogesh-pusarla-deegc/?trackingId=ZzVbDGhxRG2G6FBR5mleOg%3D%3D",
      desc: "A practical take on how efficiency gains can increase demand—and how to manage the rebound with better goals, guardrails, and communication.",
    },
    {
      title: "Tackling Shrink: Signal Chaos & Data Fragmentation in Retail",
      url: "https://www.linkedin.com/pulse/tackling-shrink-signal-chaos-data-fragmentation-retail-yogesh-pusarla-fgygc/?trackingId=439wc0oPRfiBe625pNUxMA%3D%3D",
      desc: "Why fragmented RFID, POS, and CV signals hide the true shrink problem—and a blueprint to unify telemetry for real reduction.",
    },
    {
      title: "Unlocking Efficient Compute: Frontier Capacity—Math vs. Cost",
      url: "https://www.linkedin.com/pulse/unlocking-efficient-compute-frontier-mathematical-vs-cost-pusarla-z7scc/?trackingId=439wc0oPRfiBe625pNUxMA%3D%3D",
      desc: "Balancing theoretical throughput with cloud cost realities to scale AI/analytics responsibly.",
    },
  ];
  FEATURED.push({
    title: "Journey Through Simon Sinek’s Start With Why — Framework",
    url: "https://www.linkedin.com/pulse/journey-through-simon-sineks-start-why-framework-yogesh-pusarla-zgv8c/?trackingId=nHcQQL6sSnqULVgRkBi8oA%3D%3D",
    desc: "A quick walkthrough of Start With Why with practical takeaways for product and leadership.",
  });

  const SKILLS = [
    { group: "Product & Leadership", items: ["Product Strategy", "Roadmapping", "Stakeholder Management", "Cross-Functional Leadership"] },
    { group: "AI & Data", items: ["Generative AI (Google Gemini)", "Telemetry & Observability", "RFID Analytics", "SQL", "Python"] },
    { group: "Cloud & Tools", items: ["GCP", "Azure", "AWS", "Power BI", "Tableau", "Symbotic WMS", "o9 S&OP"] },
  ];

  const HIGHLIGHTS = [
    { value: "$1.1B+", label: "Projected network savings", sub: "Traceability & freshness optimization" },
    { value: "$20M+", label: "Checkout savings", sub: "Cart-level item recognition" },
    { value: "30%", label: "Faster transactions", sub: "Reduced scan/validation time" },
    { value: "$2B+", label: "Incremental eComm revenue", sub: "Scaled last-mile routing UX" },
  ];

  const EXPERIENCE = [
    {
      role: "Sr Manager II, Store Innovation & Automation",
      company: "Walmart Inc.",
      period: "Nov 2023 — Present",
      highlights: [
        "Drove telemetry platform strategy, scaling RFID & computer vision; aligned cross‑org stakeholders on roadmap projected $1.1B in network savings.",
        "Led AI cataloging platform from pilot to enterprise adoption, delivering shrink detection, execution monitoring, and observability at scale.",
        "Developed cart‑level item recognition analytics to validate items at checkout; reduced transaction time ~30% and unlocked ~$20M in savings.",
        "Operationalized Generative AI (Google Gemini) for adaptive insights; cut reporting effort ~80% and accelerated execution cycles from 2 weeks to 3 days."
      ],
    },
    {
      role: "Principal Product Manager, Walmart WMS",
      company: "Walmart Inc.",
      period: "Jun 2022 — Nov 2023",
      highlights: [
        "Directed warehouse modernization strategy; launched a Symbotic‑powered MVP re‑platforming $900M+ annual freight and set long‑term roadmap.",
        "Migrated 42 legacy systems to 4 Azure‑hosted nodes, improving resiliency/throughput and generating ~$14M annual savings.",
        "Consolidated workflows into a unified WMS product, cutting onboarding time 78% and delivering ~$6.7M ROI."
      ],
    },
    {
      role: "Senior Product Manager, Last Mile Delivery",
      company: "Walmart Inc.",
      period: "Apr 2020 — Jun 2022",
      highlights: [
        "Owned last‑mile product suite strategy; scaled routing + telemetry UX to generate ~$2B incremental eCommerce revenue.",
        "Designed & deployed driver onboarding system; scaled 3PL adoption from 25% → 75% across 2,500+ sites in under a year.",
        "Translated competitive insights and CX research into roadmap priorities that improved NPS & delivery satisfaction."
      ],
    },
    {
      role: "Senior Product Manager, Sales & Operations Planning",
      company: "Walmart Inc.",
      period: "Sep 2018 — Apr 2020",
      highlights: [
        "Developed enterprise S&OP platform with o9 Solutions as a global planning foundation; delivered ~$220M cost savings through cross‑regional adoption.",
        "Consolidated fragmented dashboards into a unified intelligence platform for global inventory flow and value, reducing redundant tooling ~30% in 90 days.",
        "Championed cross‑regional governance & data integrity, aligning visibility across Walmart’s global supply chain ecosystem for consistent decisions at scale."
      ],
    },
    {
      role: "Business Analyst",
      company: "Swaraj Associates & Engineers",
      period: "May 2012 — May 2016",
      highlights: [
        "Built pricing & churn models that improved bid targeting and client retention forecasting.",
        "Standardized reporting pipelines, reducing support incidents ~15% and improving analyst productivity."
      ],
    },
  ];

  const MODE_KEY = 'portfolio.theme';
  const prefersDark = usePrefersDarkMode();
  const [forceDark, setForceDark] = useState(null);
  const isDark = forceDark === null ? prefersDark : forceDark;

  const bannerBg = isDark ? 'rgba(2,6,23,0.80)' : 'rgba(255,255,255,0.92)';
  const bannerFg = getReadableText(bannerBg);
  const accentFg = getReadableText(SITE.accent);

  const [copied, setCopied] = useState(false);

  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
      setProgress(Math.max(0, Math.min(1, scrolled)));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: True })
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty("--accent", SITE.accent);
    document.documentElement.style.setProperty("--accent-fore", getReadableText(SITE.accent));
  }, [SITE.accent]);

  useEffect(() => {
    try {
      if (forceDark === null) localStorage.removeItem(MODE_KEY);
      else localStorage.setItem(MODE_KEY, forceDark ? 'dark' : 'light');
    } catch {}
  }, [forceDark]);

  useEffect(() => {
    const el = document.documentElement;
    el.classList.toggle('dark', isDark);
  }, [isDark]);

  useEffect(() => {
    const els = document.querySelectorAll('.card.reveal');
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('inview');
        else e.target.classList.remove('inview');
      });
    }, { threshold: 0.15 });
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div className={isDark ? "dark" : ""}>
      <div className="fixed left-0 top-0 h-1 w-full z-[60] bg-transparent">
        <div className="h-full bg-[var(--accent)]" style={{ width: `${Math.round(progress*100)}%` }} />
      </div>
      <div className={`min-h-screen ${isDark ? 'bg-slate-950 text-slate-100' : 'bg-white text-slate-800'}`}>
        <header className="sticky top-0 z-40 backdrop-blur border-b border-slate-200/60 dark:border-slate-800/60" style={{ backgroundColor: bannerBg, color: bannerFg }}>
          <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <a href="#home" className="font-semibold tracking-tight text-lg">{SITE.name}</a>
            <nav className="hidden md:flex gap-6 text-sm">
              <a href="#experience" className="hover:text-[var(--accent)]">Experience</a>
              <a href="#articles" className="hover:text-[var(--accent)]">Articles</a>
              <a href="#contact" className="hover:text-[var(--accent)]">Contact</a>
            </nav>
            <div className="flex items-center gap-2">
              <ThemeSwitch mode={forceDark} onMode={(m) => setForceDark(m)} />
              {SITE.resumeUrl !== "#" && (
                <a
                  href={SITE.resumeUrl}
                  className="rounded-2xl px-3 py-1.5 text-sm border border-[var(--accent)] text-[var(--accent)] hover:bg-[var(--accent)] hover:text-[var(--accent-fore)] transition-colors"
                >
                  Resume
                </a>
              )}
            </div>
          </div>
        </header>
        <style>{`/* Theme helpers (independent of Tailwind dark mode config) */
:root{--accent:${SITE.accent};--accent-fore:${getReadableText(SITE.accent)}}
.card{background-color:rgba(255,255,255,.6);border-color:rgb(226,232,240)}
.dark .card{background-color:rgba(15,23,42,.6);border-color:rgb(30,41,59)}
/* Scroll reveal */
.card.reveal{opacity:0; transform: translateY(14px); transition: opacity .5s ease, transform .5s ease;}
.card.reveal.inview{opacity:1; transform: none;}
`}</style>

        <section id="home" className="mx-auto max-w-6xl px-4 py-16 md:py-24">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">{SITE.name}</h1>
          <p className="mt-3 text-lg text-[var(--accent)]">{SITE.tagline}</p>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{SITE.location}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="rounded-full px-4 py-2 text-sm border hover:border-[var(--accent)]">LinkedIn</a>
          </div>
        </section>

        <section id="highlights" className="mx-auto max-w-6xl px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {HIGHLIGHTS.map((h) => (
              <Card key={h.label}>
                <div className="p-5 text-center">
                  <div className="text-2xl md:text-3xl font-bold">{h.value}</div>
                  <div className="text-sm mt-1 text-[var(--accent)]">{h.label}</div>
                  <div className="text-xs mt-1 text-slate-500 dark:text-slate-400">{h.sub}</div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="skills" className="mx-auto max-w-6xl px-4 py-6">
          <h2 className="text-xl md:text-2xl font-semibold">Skills</h2>
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            {SKILLS.map((block) => (
              <Card key={block.group}>
                <div className="p-5">
                  <div className="text-sm font-medium">{block.group}</div>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {block.items.map((tag) => (
                      <span key={tag} className="text-xs rounded-full border px-2 py-1 text-current border-slate-300 dark:border-slate-700">{tag}</span>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="experience" className="mx-auto max-w-6xl px-4 py-10 md:py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">Experience</h2>
          {EXPERIENCE.map((job, idx) => (
            <Card key={idx}>
              <div className="p-6">
                <div className="flex items-baseline justify-between gap-2 flex-wrap">
                <div>
                  <h3 className="text-lg font-semibold">{job.role}</h3>
                  <p className="text-sm text-[var(--accent)]">{job.company}</p>
                </div>
                <span className="text-xs rounded-full border px-2 py-1 text-current opacity-80 border-slate-300 dark:border-slate-700">{job.period}</span>
              </div>
                <ul className="mt-4 text-sm list-disc pl-5 space-y-1">
                  {job.highlights.map((h, i) => <li key={i}>{h}</li>)}
                </ul>
              </div>
            </Card>
          ))}
        </section>

        <section id="articles" className="mx-auto max-w-6xl px-4 py-10 md:py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">LinkedIn Articles</h2>

          {FEATURED.length > 0 ? (
            <div className="mt-6 grid md:grid-cols-2 gap-4">
              {FEATURED.map((a) => (
              <Card key={a.url}>
                <div className="p-6">
                  <a href={a.url} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold hover:text-[var(--accent)]">{a.title}</a>
                  {a.desc && <p className="text-sm mt-2 text-inherit opacity-90">{a.desc}</p>}
                  {a.date && <div className="text-xs mt-3 text-inherit opacity-70">{a.date}</div>}
                </div>
              </Card>
            ))}
            </div>
          ) : (
            <Card className="mt-6">
              <div className="p-6 text-sm text-slate-600 dark:text-slate-300">No featured articles yet. Share links and I'll preload them here.</div>
            </Card>
          )}

          <Card className="mt-6">
            <div className="p-6">
              <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold hover:text-[var(--accent)]">See all on LinkedIn</a>
              <p className="text-sm text-slate-700 dark:text-slate-300 mt-2">Full stream of posts, articles, and comments.</p>
            </div>
          </Card>
        </section>

        <section id="education" className="mx-auto max-w-6xl px-4 py-10 md:py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">Education</h2>
          <div className="mt-6 grid gap-4">
            <Card>
              <div className="p-6">
                <div className="flex items-baseline justify-between gap-2 flex-wrap">
                  <div>
                    <h3 className="text-lg font-semibold">PG Diploma in Program Management</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">IMT Business School, India</p>
                  </div>
                  <span className="text-xs rounded-full border px-2 py-1 text-current opacity-80 border-slate-300 dark:border-slate-700">May 2020</span>
                </div>
              </div>
            </Card>
            <Card>
              <div className="p-6">
                <div className="flex items-baseline justify-between gap-2 flex-wrap">
                  <div>
                    <h3 className="text-lg font-semibold">M.S. Information Technology & Management</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">The University of Texas at Dallas, USA</p>
                  </div>
                  <span className="text-xs rounded-full border px-2 py-1 text-current opacity-80 border-slate-300 dark:border-slate-700">May 2018</span>
                </div>
              </div>
            </Card>
            <Card>
              <div className="p-6">
                <div className="flex items-baseline justify-between gap-2 flex-wrap">
                  <div>
                    <h3 className="text-lg font-semibold">B.E. Electronics & Telecommunication</h3>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Mumbai University, India</p>
                  </div>
                  <span className="text-xs rounded-full border px-2 py-1 text-current opacity-80 border-slate-300 dark:border-slate-700">May 2015</span>
                </div>
              </div>
            </Card>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-6xl px-4 py-10 md:py-16">
          <h2 className="text-2xl md:text-3xl font-semibold">Contact</h2>
          <Card className="mt-6">
            <div className="p-6">
              <p className="text-lg font-medium">{SITE.email}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <a
                  href={`mailto:${SITE.email}?subject=${encodeURIComponent('Hello Yogesh')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full px-4 py-2 text-sm bg-[var(--accent)] text-[var(--accent-fore)] inline-block"
                >
                  Email me
                </a>
                <button
                  onClick={async () => { try { await navigator.clipboard.writeText(SITE.email); setCopied(True); setTimeout(() => setCopied(False), 1500);} catch {} }}
                  className="rounded-full px-4 py-2 text-sm border border-slate-300 dark:border-slate-700 hover:border-[var(--accent)]"
                  type="button"
                >
                  Copy email
                </button>
              </div>
              {copied && <div className="text-xs mt-2 text-slate-500 dark:text-slate-400">Copied to clipboard ✓</div>}
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
}

function Card({ className = "", children }) {
  return <div className={`card reveal rounded-2xl border shadow-sm ${className}`}>{children}</div>;
}

function ThemeSwitch({ mode, onMode }) {
  return (
    <div className="flex items-center gap-1">
      <button
        title="System theme"
        onClick={() => onMode(null)}
        className={`text-xs rounded-full border px-2 py-1 ${mode === null ? "border-[var(--accent)] text-[var(--accent)]" : "border-slate-300 dark:border-slate-700"}`}
      >
        Auto
      </button>
      <button
        title="Light"
        onClick={() => onMode(false)}
        className={`text-xs rounded-full border px-2 py-1 ${mode === false ? "border-[var(--accent)] text-[var(--accent)]" : "border-slate-300 dark:border-slate-700"}`}
      >
        Light
      </button>
      <button
        title="Dark"
        onClick={() => onMode(true)}
        className={`text-xs rounded-full border px-2 py-1 ${mode === true ? "border-[var(--accent)] text-[var(--accent)]" : "border-slate-300 dark:border-slate-700"}`}
      >
        Dark
      </button>
    </div>
  );
}

function usePrefersDarkMode() {
  const get = () => window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [prefers, setPrefers] = useState(false);
  useEffect(() => {
    setPrefers(get());
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => setPrefers(mq.matches);
    if (mq.addEventListener) {
      mq.addEventListener("change", handler);
      return () => mq.removeEventListener("change", handler);
    } else if (mq.addListener) {
      mq.addListener(handler);
      return () => mq.removeListener(handler);
    } else {
      return () => {};
    }
  }, []);
  return prefers;
}

function getReadableText(color) {
  let r, g, b;
  if (!color) return '#111827';
  if (color.startswith('#')) {
    let hex = color.slice(1);
    if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
    const int = parseInt(hex, 16);
    r = (int >> 16) & 255; g = (int >> 8) & 255; b = int & 255;
  } else if (color.startswith('rgb')) {
    const nums = color.replace(/rgba?\(|\)/g, '').split(',').map(v => parseFloat(v));
    [r, g, b] = nums;
  } else {
    return '#111827';
  }
  const toLin = (v) => {
    v /= 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  };
  const [R, G, B] = [toLin(r), toLin(g), toLin(b)];
  const L = 0.2126 * R + 0.7152 * G + 0.0722 * B;
  return L > 0.5 ? '#111827' : '#F8FAFC';
}
