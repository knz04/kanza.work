import { Button } from "@/app/components/button";
import { ListSection } from "@/app/components/listsection";
import { ProjectCard } from "@/app/components/projectcard";
import { SectionHeader } from "@/app/components/sectionheader";
import Link from "next/link";
import Image from "next/image";

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
      <section className="relative h-screen scroll-snap-start flex items-center justify-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div className="mx-auto grid max-w-[1065px] grid-cols-12 gap-[15px] h-full">
            <div className="col-start-6 col-span-7 relative">
              <Image
                src="/Pikku.svg"
                alt="Pikku Background"
                layout="fill"
                objectFit="contain"
                className="opacity-50" // Adjust opacity as needed
              />
            </div>
          </div>
        </div>
        {/* Foreground Content */}
        <div className="relative z-10 w-full">
          <div className="mx-auto grid max-w-[1065px] grid-cols-12 gap-[15px]">
            <div className="col-span-12 md:col-span-10 lg:col-span-8">
              <h1 className="text-4xl md:text-5xl lg:text-[60px] font-[family-name:var(--font-poppins)] font-semibold text-[var(--text)]">
                I&apos;m Kanza, <br />a full-stack developer <br />
                based in Indonesia.
              </h1>
            </div>
            <div className="col-span-12 md:col-span-6 3xl:col-span-3 col-start-1">
              <Link href="#about">
                <Button>
                  <p>Learn More</p>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section
        id="about"
        className="min-h-screen scroll-snap-start flex items-center justify-center px-4"
      >
        <div className="mx-auto max-w-[1065px] grid grid-cols-1 md:grid-cols-2 gap-6">
          <SectionHeader
            title="About Me"
            subtitle="Full-Stack Developer / Computer Engineering Student / Language Enthusiast"
          />
          <ListSection title="Tech Stack" items={techStack} />
          <ListSection title="Education" items={education} />
          <ListSection title="Languages" items={languages} />
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="#projects">
              <Button>View Projects</Button>
            </Link>
            <Link
              href="https://docs.google.com/document/d/1lLr_0ihYTU_xXiV86JEqcMu9aZYmRkWECI2mivtpOH4/edit?usp=sharing"
              target="_blank"
            >
              <Button>View CV</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="min-h-screen scroll-snap-start flex items-center justify-center px-4"
      >
        <div className="mx-auto max-w-[1065px]">
          <SectionHeader
            title="Projects"
            subtitle="These are my most recent projects."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
            {projects.map((project) => (
              <ProjectCard
                key={project}
                name={project}
                className="aspect-[16/9] "
              />
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <Link href="#contact">
              <Button>Let&apos;s Collaborate!</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Me */}
      <section
        id="contact"
        className="min-h-screen scroll-snap-start flex items-center justify-center px-4"
      >
        <div className="mx-auto max-w-[1065px] text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-[var(--text)]">
            Contact Me
          </h2>
          <p className="text-sm md:text-base text-[var(--text)] mt-4">
            Email:{" "}
            <Link
              href="mailto:work.knz04@gmail.com"
              className="underline md:no-underline hover:underline"
            >
              work.knz04@gmail.com
            </Link>
            <br />
            LinkedIn:{" "}
            <Link
              href="https://www.linkedin.com/in/kanza-amanda/"
              target="_blank"
              className="underline md:no-underline hover:underline"
            >
              kanza-amanda
            </Link>
            <br />
            GitHub:{" "}
            <Link
              href="https://github.com/knz04"
              target="_blank"
              className="underline md:no-underline hover:underline"
            >
              knz04
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
