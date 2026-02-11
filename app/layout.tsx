import type { Metadata } from "next";
import { Orbitron, Rajdhani } from "next/font/google"; // Import fonts
import "./globals.css";
import { clsx } from "clsx"; // Type safety

// Configure Fonts
const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
  display: "swap",
});

const rajdhani = Rajdhani({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-rajdhani",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lamborghini Revuelto | From Now On",
  description: "Experience the first V12 High Performance Electrified Vehicle.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={clsx(orbitron.variable, rajdhani.variable)}>
      <body className="antialiased bg-revuelto-black text-muted-white selection:bg-soft-gold selection:text-revuelto-black">
        {children}
      </body>
    </html>
  );
}
