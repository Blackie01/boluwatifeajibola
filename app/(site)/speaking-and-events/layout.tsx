import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Speaking & Events",
  description:
    "Learn about Bolu Ajibola's speaking engagements, event hosting, panel moderation, and facilitation across academic, civic, and cultural spaces.",
  alternates: {
    canonical: "/speaking-and-events",
  },
};

export default function SpeakingEventsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
