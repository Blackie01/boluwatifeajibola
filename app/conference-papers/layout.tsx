import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Conference Papers",
  description:
    "Explore Bolu Ajibola's conference papers and academic presentations on governance, democracy, youth movements, and social change.",
  alternates: {
    canonical: "/conference-papers",
  },
};

export default function ConferencePapersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
