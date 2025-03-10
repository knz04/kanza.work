interface ListSectionProps {
  title: string;
  items: string[];
}

export const ListSection = ({ title, items }: ListSectionProps) => (
  <div className="col-span-12 col-start-1">
    <p className="text-xs md:text-base font-[family-name:var(--font-inter)] font-semibold text-[var(--text)]">
      {title}
    </p>

    <div className="col-span-12 col-start-1">
      {items.map((item, index) => (
        <p
          key={index}
          className="text-xs md:text-base font-[family-name:var(--font-inter)] font-light text-[var(--text)]"
        >
          {item}
        </p>
      ))}
    </div>
  </div>
);
