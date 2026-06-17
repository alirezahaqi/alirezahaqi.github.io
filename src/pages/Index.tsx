import {
  Award,
  BookOpen,
  Briefcase,
  ExternalLink,
  FileText,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Trophy,
  Users,
  type LucideIcon,
} from "lucide-react";
import headshot from "@/assets/headshot.jpg";

type Publication = {
  title: string;
  authors: string;
  venue: string;
  link: string;
  award?: string;
};

const publications: Publication[] = [
  {
    title: "On Thin Perfect Matchings up to Polylogarithmic Factors",
    authors: "Alireza Haqi, Shayan Oveis Gharan",
    venue: "arXiv preprint, 2026",
    link: "https://arxiv.org/abs/2606.01330",
  },
  {
    title: "Constant-Stretch Rounding on the Hypersimplex",
    authors: "Nima Anari, Alireza Haqi, Eric Ma",
    venue: "arXiv preprint, 2026",
    link: "https://arxiv.org/abs/2606.00996",
  },
  {
    title: "Fast Spanning Tree Sampling in Broadcast Congested Clique",
    authors: "Nima Anari, Alireza Haqi",
    venue: "arXiv preprint, 2026",
    link: "https://arxiv.org/abs/2603.25018",
  },
  {
    title: "Parallel Sampling via Autospeculation",
    authors:
      "Nima Anari, Carlo Baronio, CJ Chen, Alireza Haqi, Frederic Koehler, Anqi Li, Thuy-Duong Vuong",
    venue: "arXiv preprint, 2025",
    link: "https://arxiv.org/abs/2511.07869",
  },
  {
    title:
      "Almost Optimal Massively Parallel Algorithms for k-Center Clustering and Diversity Maximization",
    authors: "Alireza Haqi, Hamid Zarrabi-Zadeh",
    venue: "SPAA 2023",
    award: "Outstanding Paper Award",
    link: "https://doi.org/10.1145/3558481.3591077",
  },
  {
    title: "Improving Order with Queues",
    authors:
      "Andreas Karrenbauer, Kurt Mehlhorn, Pranabendu Misra, Paolo Luigi Rinaldi, Anna Twelsiek, Alireza Haqi, Siavash Rahimi Shateranloo",
    venue: "arXiv preprint, 2022",
    link: "https://arxiv.org/abs/2207.02476",
  },
];

const education = [
  {
    period: "Autumn 2024 - Present",
    title: "PhD in Computer Science",
    org: "Stanford University",
    detail: "Supervised by Moses Charikar and Nima Anari.",
  },
  {
    period: "Fall 2020 - Spring 2024",
    title: "Bachelor of Computer Engineering",
    org: "Sharif University of Technology",
    detail: "GPA: 19.1/20.",
  },
];

const experience = [
  {
    period: "Oct 2022 - Sep 2024",
    title: "Research Assistant",
    org: "University of Washington",
    detail:
      "Worked on theoretical computer science problems in approximation, combinatorics, and randomized algorithms.",
  },
  {
    period: "Jul 2023 - Nov 2023",
    title: "Research Assistant",
    org: "Max Planck Institute",
    detail: "Continued research on ordering and queueing problems in combinatorial optimization.",
  },
  {
    period: "Jul 2022 - Sep 2022",
    title: "Research Assistant",
    org: "Max Planck Institute",
    detail:
      "Collaborated on combinatorial optimization research that led to work on improving order with queues.",
  },
  {
    period: "Feb 2022 - Jul 2022",
    title: "Research Assistant",
    org: "Sharif University of Technology",
    detail: "Worked on massively parallel algorithms for clustering and diversity maximization.",
  },
];

const honors = [
  "Gold Medal, International Mathematical Olympiad, 2020",
  "Silver Medal, Romanian Masters of Mathematics, 2020",
  "Gold Medal, National Mathematics Olympiad, 2019",
  "Silver Medal, National Mathematics Olympiad, 2018",
];

const service = [
  {
    period: "Fall 2021 - Dec 2024",
    title: "Young Scholar Club",
    detail: "Tutored combinatorics for national gold medalists in the Mathematical Olympiad.",
  },
  {
    period: "Spring 2023",
    title: "Teaching Assistant, Sharif University of Technology",
    detail: "Convex Optimization.",
  },
  {
    period: "Winter 2022/2023",
    title: "Academic Staff, WSS Event",
    detail: "Sharif University of Technology.",
  },
  {
    period: "Winter 2022 - Ongoing",
    title: "Member, National Committee of Olympiad in Informatics",
    detail: "Community and olympiad involvement.",
  },
];

const cvHref = `${import.meta.env.BASE_URL}Alireza_Haqi_CV.pdf`;

const profileLinks = [
  {
    label: "Email",
    href: "mailto:ahaqi@stanford.edu",
    icon: Mail,
  },
  {
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=N_DeI4IAAAAJ&hl=en",
    icon: BookOpen,
  },
  {
    label: "GitHub",
    href: "https://github.com/alirezahaqi",
    icon: Github,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/alireza-h-92b765140/",
    icon: Linkedin,
  },
  {
    label: "CV",
    href: cvHref,
    icon: FileText,
  },
];

const SectionHeading = ({
  icon: Icon,
  title,
}: {
  icon: LucideIcon;
  title: string;
}) => (
  <h2 className="flex items-center gap-2 font-serif text-xl font-semibold text-foreground">
    <Icon className="h-5 w-5 text-primary" />
    {title}
  </h2>
);

const TimelineItem = ({
  period,
  title,
  org,
  detail,
}: {
  period: string;
  title: string;
  org?: string;
  detail?: string | string[];
}) => (
  <div className="grid gap-1 text-sm sm:grid-cols-[8.5rem_1fr] sm:gap-5">
    <span className="text-muted-foreground">{period}</span>
    <div>
      <p className="font-medium text-foreground">{title}</p>
      {org && <p className="text-primary">{org}</p>}
      {Array.isArray(detail) ? (
        <ul className="mt-1 space-y-1 text-muted-foreground">
          {detail.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : (
        detail && <p className="mt-0.5 text-muted-foreground">{detail}</p>
      )}
    </div>
  </div>
);

const Index = () => {
  return (
    <main className="min-h-screen bg-background font-sans">
      <div className="mx-auto max-w-3xl px-6 py-14 md:py-20">
        <header className="grid gap-8 sm:grid-cols-[9rem_1fr] sm:items-start">
          <img
            src={headshot}
            alt="Alireza Haqi"
            width={591}
            height={591}
            className="h-44 w-36 rounded object-cover shadow-sm"
          />
          <div>
            <p className="text-sm font-medium uppercase text-primary">Stanford CS</p>
            <h1 className="mt-1 font-serif text-4xl font-semibold text-foreground">
              Alireza Haqi
            </h1>
            <p className="mt-2 text-base font-medium text-primary">
              PhD Student in Computer Science
            </p>
            <p className="mt-5 leading-relaxed text-muted-foreground">
              I am a PhD student at{" "}
              <span className="text-foreground">Stanford University</span>, supervised by{" "}
              <a
                href="https://profiles.stanford.edu/moses-charikar"
                className="text-primary underline decoration-primary/30 hover:decoration-primary"
              >
                Prof. Moses Charikar
              </a>{" "}
              and{" "}
              <a
                href="https://nimaanari.com/"
                className="text-primary underline decoration-primary/30 hover:decoration-primary"
              >
                Prof. Nima Anari
              </a>
              . My research is in theoretical computer science, with a focus on
              parallel and distributed algorithms, randomized sampling, graph optimization,
              and rounding.
            </p>
            <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-1.5">
                <Mail className="h-3.5 w-3.5" />
                ahaqi@stanford.edu
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" />
                Stanford, CA
              </span>
            </div>
            <nav className="mt-4 flex flex-wrap gap-2" aria-label="Profile links">
              {profileLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  className="inline-flex min-h-9 items-center gap-1.5 rounded-md border border-border bg-card px-3 py-1.5 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon className="h-3.5 w-3.5" />
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </header>

        <section className="mt-14">
          <SectionHeading icon={FileText} title="Publications" />
          <ol className="mt-6 space-y-4">
            {publications.map((pub) => (
              <li key={pub.title}>
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block rounded-md border border-transparent px-3 py-3 -mx-3 transition-colors hover:border-border hover:bg-secondary"
                >
                  <p className="font-serif font-medium leading-snug text-foreground group-hover:text-primary">
                    {pub.title}
                    <ExternalLink className="ml-1.5 inline h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-60" />
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{pub.authors}</p>
                  <p className="text-sm italic text-muted-foreground/80">{pub.venue}</p>
                  {pub.award && (
                    <p className="mt-2 inline-flex items-center gap-1 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                      <Award className="h-3 w-3" />
                      {pub.award}
                    </p>
                  )}
                </a>
              </li>
            ))}
          </ol>
        </section>

        <section className="mt-16">
          <SectionHeading icon={GraduationCap} title="Education" />
          <div className="mt-6 space-y-5">
            {education.map((item) => (
              <TimelineItem key={`${item.period}-${item.title}`} {...item} />
            ))}
          </div>
        </section>

        <section className="mt-16">
          <SectionHeading icon={Briefcase} title="Undergraduate Research Experience" />
          <div className="mt-6 space-y-5">
            {experience.map((item) => (
              <TimelineItem key={`${item.period}-${item.org}`} {...item} />
            ))}
          </div>
        </section>

        <section className="mt-16">
          <SectionHeading icon={Trophy} title="Honors and Awards" />
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            {honors.map((honor) => (
              <li key={honor} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                <span>{honor}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-16">
          <SectionHeading icon={Users} title="Teaching and Service" />
          <div className="mt-6 space-y-5">
            {service.map((item) => (
              <TimelineItem key={`${item.period}-${item.title}`} {...item} />
            ))}
          </div>
        </section>

        <footer className="mt-20 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          <p>Content refreshed from the bundled CV and public arXiv records in June 2026.</p>
          <p className="mt-1">Copyright {new Date().getFullYear()} Alireza Haqi.</p>
        </footer>
      </div>
    </main>
  );
};

export default Index;
