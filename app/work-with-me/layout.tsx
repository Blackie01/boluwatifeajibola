import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work With Me",
  description:
    "Discover how Bolu Ajibola supports researchers, organisations, and civic actors through research development, impact strategy, creative communication, speaking, and facilitation.",
  alternates: {
    canonical: "/work-with-me",
  },
};

export default function WorkWithMeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
