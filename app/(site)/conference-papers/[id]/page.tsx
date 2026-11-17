import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { researchPapersData } from "@/utils/researchPapers";
import ConferencePaperContent from "./ConferencePaperContent";

function findPaper(id: string) {
  for (const group of researchPapersData) {
    const found = group.papers.find((p) => p.id.toString() === id);
    if (found) {
      return { paper: found, paperYear: group.year };
    }
  }
  return null;
}

export function generateStaticParams() {
  return researchPapersData.flatMap((group) =>
    group.papers.map((paper) => ({
      id: paper.id.toString(),
    }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const result = findPaper(id);

  if (!result) {
    return { title: "Paper Not Found" };
  }

  return {
    title: result.paper.title,
    description: `Conference paper presented at ${result.paper.conferenceName}, ${result.paper.location} (${result.paperYear}). By Bolu Ajibola.`,
    alternates: {
      canonical: `/conference-papers/${id}`,
    },
  };
}

export default async function ConferencePaperPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const result = findPaper(id);

  if (!result) {
    return (
      <main className="min-h-screen bg-[#0C0C0C] text-white pt-48 flex items-center justify-center">
        <div className="text-center">
          <h1
            className="text-3xl mb-4 font-medium"
            style={{ fontFamily: "var(--font-outfit), sans-serif" }}
          >
            Paper not found
          </h1>
          <Link
            href="/conference-papers"
            className="text-[#d4af37] underline hover:text-white transition-colors duration-300"
          >
            Back to papers
          </Link>
        </div>
      </main>
    );
  }

  return (
    <ConferencePaperContent paper={result.paper} paperYear={result.paperYear} />
  );
}
