interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  subtitleSpan?: number;
}

export const SectionHeader = ({
  title,
  subtitle,
  subtitleSpan = 12,
}: SectionHeaderProps) => (
  <>
    <div className="col-span-3 col-start-1">
      <h2 className="text-5xl font-[family-name:var(--font-poppins)] font-semibold text-[var(--text)]">
        {title}
      </h2>
    </div>
    {subtitle && (
      <h3
        className={`text-2xl font-[family-name:var(--font-inter)] font-normal text-[var(--text)] col-span-${subtitleSpan} col-start-1`}
      >
        {subtitle}
      </h3>
    )}
  </>
);
