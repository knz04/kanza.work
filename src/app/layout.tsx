import type { Metadata } from "next";
import { Poppins, Inter, Space_Mono } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  weight: "600",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: "400",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  weight: ["300", "400", "600"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kanza.work | Portfolio",
  description: "Kanza Amanda's full-stack developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${spaceMono.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
