import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
}

export const Button = ({ children, href, className }: ButtonProps) => (
  <button
    className={`bg-[var(--primary-accent)] hover:bg-[var(--hover)] hover:cursor-pointer text-base text-[var(--text)] font-[family-name:var(--font-space-mono)] py-4 ${className}`}
  >
    {href ? <Link href={href}>{children}</Link> : children}
  </button>
);
