import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  name: string;
  className?: string;
}

const projectImages: { [key: string]: string } = {
  "U-Journal": "/ujournal.webp",
  "Ironclad Solutions LLC": "/ironclad.webp",
  "Ayam Tracker": "/ayamtracker.webp",
  Pawfrend: "/pawfrend.webp",
  SketchMIDI: "/sketchmidi.webp",
  "Sumatra Sizzle House": "/ssh.webp",
};

const projectLinks: { [key: string]: string } = {
  "U-Journal": "https://github.com/knz04/U-Journal",
  "Ironclad Solutions LLC": "https://www.ironcladsolutionsfl.com",
  "Ayam Tracker": "https://ayamtracker.vercel.app",
  Pawfrend: "https://pawfrend.vercel.app",
  SketchMIDI: "https://sketchmidi.cc",
  "Sumatra Sizzle House": "https://uas-ssh.vercel.app",
};

export const ProjectCard = ({ name, className }: ProjectCardProps) => (
  <div className={className}>
    <Link href={projectLinks[name]} target="_blank">
      <div className="relative w-full aspect-[16/9] hover:cursor-pointer hover:border-2">
        <Image
          src={projectImages[name]}
          alt={name}
          layout="fill"
          objectFit="cover"
        />
      </div>
      <p className="text-base font-[family-name:var(--font-space-mono)] text-[var(--text)] my-2 underline md:no-underline hover:underline hover:cursor-pointer">
        {name}
      </p>
    </Link>
  </div>
);
