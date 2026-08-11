import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Impact & Engagement",
  description:
    "Explore Bolu Ajibola's work in research impact, public engagement, policy influence, and knowledge mobilisation across academic and civic domains.",
  alternates: {
    canonical: "/impact-and-engagement",
  },
};

export default function ImpactEngagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
