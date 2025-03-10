interface ProjectCardProps {
  name: string;
  className?: string;
}

export const ProjectCard = ({ name, className }: ProjectCardProps) => (
  <div className={className}>
    <div className="h-48 w-[100%] bg-[var(--foreground)]" />
    <p className="text-base font-[family-name:var(--font-space-mono)] text-[var(--text)] my-2">
      {name}
    </p>
  </div>
);
