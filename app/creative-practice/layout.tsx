import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Creative Practice",
  description:
    "Discover Bolu Ajibola's creative practice — spoken word poetry, performance, and artistic collaborations exploring identity, migration, and social commentary.",
  alternates: {
    canonical: "/creative-practice",
  },
};

export default function CreativePracticeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
