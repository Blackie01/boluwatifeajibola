import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Browse Bolu Ajibola's published academic papers and research output on governance, democracy, youth activism, and development.",
  alternates: {
    canonical: "/publications",
  },
};

export default function PublicationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
