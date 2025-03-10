import { Button } from "@/app/components/button";
import { ListSection } from "@/app/components/listsection";
import { ProjectCard } from "@/app/components/projectcard";
import { SectionHeader } from "@/app/components/sectionheader";
import Link from "next/link";

export default function Home() {
  const techStack = [
    "Frontend: React, Next.js, Tailwind CSS, Sass, DaisyUI",
    "Backend: Node.js, Express, REST APIs, MQTT, WebSocket",
    "Databases: PostgreSQL, MongoDB, MySQL",
    "Tools: Vercel, Neon, Vite, Figma",
  ];

  const education = [
    "B.E. Computer Engineering @ Universitas Multimedia Nusantara (2022–2026)",
  ];

  const languages = [
    "Bahasa Indonesia: Native",
    "English: Fluent (IB Diploma English A SL – Grade 6/7)",
    "Japanese: Proficient (JLPT N2 – Top 95.9% globally)",
  ];

  const projects = [
    "Ayam Tracker",
    "Pawfrend",
    "SketchMIDI",
    "Sumatra Sizzle House",
  ];

  return (
    <main className="h-screen overflow-y-scroll scroll-snap-y scroll-snap-proximity scroll-smooth">
      {/* Hero Section */}
      <section className="h-screen scroll-snap-start flex items-center justify-center">
        <div className="mx-auto grid max-w-[1065px] grid-cols-[repeat(12,75px)] gap-[15px]">
          <div className="col-span-8">
            <h1 className="text-[60px] font-[family-name:var(--font-poppins)] font-semibold text-[var(--text)]">
              I'm Kanza, <br />a full-stack developer <br />
              based in Indonesia.
            </h1>
          </div>

          <div className="col-span-3 col-start-1">
            <Link href="#about">
              <Button className="px-19">
                <p>Learn More</p>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section
        id="about"
        className="h-screen scroll-snap-start flex items-center justify-center"
      >
        <div className="mx-auto grid max-w-[1065px] grid-cols-[repeat(12,75px)] gap-[15px]">
          <SectionHeader
            title="About Me"
            subtitle="Full-Stack Developer / Computer Engineering Student / Language Enthusiast"
          />

          <ListSection title="Tech Stack" items={techStack} />
          <ListSection title="Education" items={education} />
          <ListSection title="Languages" items={languages} />

          <div className="col-span-3 col-start-1">
            <Link href="#projects">
              <Button className="px-15">
                <p>View Projects</p>
              </Button>
            </Link>
          </div>
          <div className="col-span-3 col-start-4">
            <Link
              href="https://docs.google.com/document/d/1lLr_0ihYTU_xXiV86JEqcMu9aZYmRkWECI2mivtpOH4/edit?usp=sharing"
              target="_blank"
            >
              <Button className="px-22">
                <p>View CV</p>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="h-screen scroll-snap-start flex items-center justify-center"
      >
        <div className="mx-auto grid max-w-[1065px] grid-cols-[repeat(12,75px)] gap-[15px]">
          <SectionHeader
            title="Projects"
            subtitle="These are my most recent projects."
          />

          {projects.map((project, index) => (
            <ProjectCard
              key={project}
              name={project}
              className={`col-span-3 col-start-${index * 3 + 1}`}
            />
          ))}

          <div className="col-span-4 col-start-5">
            <Link href="#contact">
              <Button className="px-15">
                <p>Let's Collaborate!</p>
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Me */}
      <section
        id="contact"
        className="h-screen scroll-snap-start flex items-center justify-center"
      >
        <div className="mx-auto grid max-w-[1065px] grid-cols-[repeat(12,75px)] gap-[15px]">
          <div className="col-span-12 col-start-1">
            <h2 className="text-5xl font-[family-name:var(--font-poppins)] font-semibold text-[var(--text)]">
              Contact Me
            </h2>
            <p className="text-base font-[family-name:var(--font-inter)] font-light text-[var(--text)] my-2">
              Email:{" "}
              <Link
                href="mailto:work.knz04@gmail.com"
                className="hover:underline"
              >
                work.knz04@gmail.com
              </Link>
              <br />
              LinkedIn:{" "}
              <Link
                href="https://www.linkedin.com/in/kanza-amanda/"
                target="_blank"
                className="hover:underline"
              >
                https://www.linkedin.com/in/kanza-amanda/
              </Link>
              <br />
              GitHub:{" "}
              <Link
                href="https://github.com/knz04"
                target="_blank"
                className="hover:underline"
              >
                https://github.com/knz04
              </Link>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
