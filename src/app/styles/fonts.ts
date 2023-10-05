import { Inter } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";

export const INTER = Inter({
  variable: "--inter",
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  fallback: ["sans-serif"],
});

export const JB_MONO = JetBrains_Mono({
  variable: "--jb-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
  fallback: ["mono"],
});

export const fontClasses = [INTER.variable, JB_MONO.variable].join(" ");
