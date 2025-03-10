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
    <div className="sm:col-span-12 md:col-span-10 lg:col-span-8">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-[family-name:var(--font-poppins)] font-semibold text-[var(--text)]">
        {title}
      </h2>
    </div>
    {subtitle && (
      <h3
        className={`text-base md:text-xl lg:text-2xl font-[family-name:var(--font-inter)] font-normal text-[var(--text)] col-span-${subtitleSpan} col-start-1`}
      >
        {subtitle}
      </h3>
    )}
  </>
);
