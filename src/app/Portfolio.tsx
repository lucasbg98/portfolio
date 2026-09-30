"use client";

import { useEffect, useSyncExternalStore } from "react";
import { content, links, type Lang } from "@/content";

const STORAGE_KEY = "portfolio-lang";
const CHANGE_EVENT = "portfolio-lang-change";

// In-memory choice, used when localStorage is unavailable (e.g. private mode).
let sessionChoice: Lang | null = null;

function readLang(): Lang {
  if (sessionChoice) return sessionChoice;
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "pt") return saved;
  } catch {
    // storage unavailable: fall through to the browser language
  }
  return navigator.language?.toLowerCase().startsWith("pt") ? "pt" : "en";
}

function subscribe(onChange: () => void): () => void {
  window.addEventListener(CHANGE_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CHANGE_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}

function getServerLang(): Lang {
  return "en";
}

function saveLang(next: Lang): void {
  sessionChoice = next;
  try {
    localStorage.setItem(STORAGE_KEY, next);
  } catch {
    // ignore: the choice lasts for this visit only
  }
  window.dispatchEvent(new Event(CHANGE_EVENT));
}

export default function Portfolio() {
  const lang = useSyncExternalStore(subscribe, readLang, getServerLang);

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : "en";
  }, [lang]);

  const handleToggleLang = (): void => {
    saveLang(lang === "en" ? "pt" : "en");
  };

  const t = content[lang];

  return (
    <>
      <header className="sticky top-0 z-20 border-b border-line bg-bg/80 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
          <a href="#top" className="font-mono text-sm font-semibold tracking-tight text-fg">
            lucas<span className="text-accent">.dev</span>
          </a>
          <div className="flex items-center gap-1 sm:gap-2">
            <ul className="hidden items-center gap-1 text-sm text-muted md:flex">
              {(["about", "projects", "experience", "skills", "contact"] as const).map((id) => (
                <li key={id}>
                  <a href={`#${id}`} className="rounded-md px-3 py-2 transition-colors hover:text-fg">
                    {t.nav[id]}
                  </a>
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={handleToggleLang}
              aria-label={lang === "en" ? "Mudar para português" : "Switch to English"}
              className="rounded-md border border-line px-3 py-1.5 font-mono text-xs text-fg transition-colors hover:border-accent hover:text-accent"
            >
              {lang === "en" ? "PT" : "EN"}
            </button>
          </div>
        </nav>
      </header>

      <main id="top" className="mx-auto max-w-5xl px-4 sm:px-6">
        {/* Hero */}
        <section className="py-20 sm:py-28">
          <p className="font-mono text-sm text-accent">{t.hero.greeting}</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-fg sm:text-6xl">
            Lucas Bragança Gonçalves
          </h1>
          <p className="mt-3 text-2xl font-semibold text-muted sm:text-3xl">{t.hero.title}</p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{t.hero.tagline}</p>
          <p className="mt-4 text-sm text-muted">{t.hero.location}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
            >
              {t.hero.cta}
            </a>
            <a
              href="#contact"
              className="rounded-lg border border-line px-5 py-2.5 text-sm font-semibold text-fg transition-colors hover:border-accent"
            >
              {t.hero.ctaSecondary}
            </a>
            <a href={links.github} target="_blank" rel="noreferrer" className="rounded-lg border border-line px-5 py-2.5 text-sm text-fg transition-colors hover:border-accent">
              GitHub
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer" className="rounded-lg border border-line px-5 py-2.5 text-sm text-fg transition-colors hover:border-accent">
              LinkedIn
            </a>
          </div>
        </section>

        {/* About */}
        <Section id="about" title={t.about.heading}>
          <div className="max-w-3xl space-y-4 text-base leading-relaxed text-muted">
            {t.about.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects" title={t.projects.heading} subtitle={t.projects.intro}>
          <div className="space-y-8">
            {t.projects.items.map((p) => (
              <article key={p.id} className="rounded-2xl border border-line bg-card p-6 sm:p-8">
                <p className="font-mono text-xs text-accent">{p.tag}</p>
                <h3 className="mt-2 text-2xl font-bold text-fg">{p.name}</h3>
                <p className="mt-2 text-muted">{p.summary}</p>

                <div className="mt-6 grid gap-6 md:grid-cols-3">
                  <div>
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-fg">{t.projects.problem}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{p.problem}</p>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="text-xs font-semibold uppercase tracking-wider text-fg">{t.projects.solution}</h4>
                    <ul className="mt-2 space-y-2 text-sm leading-relaxed text-muted">
                      {p.solution.map((s) => (
                        <li key={s} className="flex gap-2">
                          <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <p className="mt-6 text-sm text-muted">
                  <span className="font-semibold text-fg">{t.projects.role}: </span>
                  {p.role}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2" aria-label={t.projects.stack}>
                  {p.stack.map((s) => (
                    <li key={s} className="rounded-full border border-line px-3 py-1 font-mono text-xs text-muted">
                      {s}
                    </li>
                  ))}
                </ul>

                {p.links.length > 0 && (
                  <div className="mt-6 flex flex-wrap gap-4">
                    {p.links.map((l) => (
                      <a key={l.href} href={l.href} target="_blank" rel="noreferrer" className="text-sm font-semibold text-accent hover:underline">
                        {l.label} →
                      </a>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </Section>

        {/* Experience */}
        <Section id="experience" title={t.experience.heading}>
          <ol className="space-y-10 border-l border-line pl-6">
            {t.experience.items.map((job) => (
              <li key={job.company} className="relative">
                <span aria-hidden className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <h3 className="text-lg font-semibold text-fg">
                    {job.title} · <span className="text-accent">{job.company}</span>
                  </h3>
                  <p className="font-mono text-xs text-muted">{job.period}</p>
                </div>
                <p className="text-sm text-muted">{job.location}</p>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>

          <h3 className="mt-14 text-lg font-semibold text-fg">{t.education.heading}</h3>
          <ul className="mt-4 space-y-4">
            {t.education.items.map((e) => (
              <li key={e.title}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                  <p className="font-medium text-fg">{e.title}</p>
                  <p className="font-mono text-xs text-muted">{e.period}</p>
                </div>
                <p className="text-sm text-muted">{e.place}</p>
                <p className="text-sm text-muted">{e.note}</p>
              </li>
            ))}
          </ul>
        </Section>

        {/* Skills */}
        <Section id="skills" title={t.skills.heading}>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {t.skills.groups.map((g) => (
              <div key={g.name} className="rounded-2xl border border-line bg-card p-5">
                <h3 className="text-sm font-semibold text-fg">{g.name}</h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <li key={s} className="rounded-full bg-bg px-3 py-1 font-mono text-xs text-muted">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" title={t.contact.heading}>
          <p className="max-w-2xl text-muted">{t.contact.text}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`mailto:${links.email}`}
              className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-bg transition-opacity hover:opacity-90"
            >
              {t.contact.email}
            </a>
            <a href={links.linkedin} target="_blank" rel="noreferrer" className="rounded-lg border border-line px-5 py-2.5 text-sm text-fg transition-colors hover:border-accent">
              LinkedIn
            </a>
            <a href={links.github} target="_blank" rel="noreferrer" className="rounded-lg border border-line px-5 py-2.5 text-sm text-fg transition-colors hover:border-accent">
              GitHub
            </a>
          </div>
          <p className="mt-4 font-mono text-sm text-muted">{links.email}</p>
        </Section>
      </main>

      <footer className="border-t border-line py-8 text-center text-xs text-muted">
        © {new Date().getFullYear()} Lucas Bragança Gonçalves · {t.footer}
      </footer>
    </>
  );
}

function Section({ id, title, subtitle, children }: { id: string; title: string; subtitle?: string; children: React.ReactNode }) {
  return (
    <section id={id} className="scroll-mt-20 border-t border-line py-16 sm:py-20">
      <h2 className="text-3xl font-bold tracking-tight text-fg">{title}</h2>
      {subtitle && <p className="mt-2 text-muted">{subtitle}</p>}
      <div className="mt-8">{children}</div>
    </section>
  );
}
