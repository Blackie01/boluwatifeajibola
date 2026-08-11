import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Protests and Polls",
  description:
    "Explore Bolu Ajibola's research on elections, social movements, youth activism, and governance in Africa — from street protests to electoral participation.",
  alternates: {
    canonical: "/protests-and-polls",
  },
};

export default function ProtestsPollsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
