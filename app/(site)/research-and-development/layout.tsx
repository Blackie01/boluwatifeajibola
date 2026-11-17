import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research & Development",
  description:
    "Learn about Bolu Ajibola's professional experience in research and development, including grant development, research impact strategy, and partnership building.",
  alternates: {
    canonical: "/research-and-development",
  },
};

export default function ResearchDevLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
