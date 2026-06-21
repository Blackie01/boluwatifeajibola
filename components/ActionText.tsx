"use client";
import Link from "next/link";

interface ActionTextProps {
    text: string;
    href?: string;
}

export default function ActionText({ text, href }: ActionTextProps) {
  const content = (
    <>
      {text}
      <span className="absolute left-0 bottom-0 w-full h-[1px] bg-[#a0a0a0]"></span>
      <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className="group relative text-[#a0a0a0] hover:text-white transition-colors duration-300 ease-out cursor-pointer pb-1 inline-block">
        {content}
      </Link>
    );
  }

  return (
    <span className="group relative text-[#a0a0a0] hover:text-white transition-colors duration-300 ease-out cursor-pointer pb-1 inline-block">
      {content}
    </span>
  );
}