import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research",
  description:
    "Explore Bolu Ajibola's research on governance, democracy, youth activism, development, and social change across Africa and the Global South.",
  alternates: {
    canonical: "/research",
  },
};

export default function ResearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
