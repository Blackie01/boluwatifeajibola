"use client";
import Link from "next/link";

interface ActionTextProps {
    text: string;
    href?: string;
    theme?: 'dark' | 'light';
}

export default function ActionText({ text, href, theme = 'dark' }: ActionTextProps) {
  const isLight = theme === 'light';

  const baseTextColor = isLight ? "text-[#666666]" : "text-[#a0a0a0]";
  const hoverTextColor = isLight ? "hover:text-[#0a0a0a]" : "hover:text-white";
  const baseLineColor = isLight ? "bg-[#cccccc]" : "bg-[#a0a0a0]";
  const hoverLineColor = isLight ? "bg-[#0a0a0a]" : "bg-white";

  const content = (
    <>
      {text}
      <span className={`absolute left-0 bottom-0 w-full h-[1px] ${baseLineColor}`}></span>
      <span className={`absolute left-0 bottom-0 w-0 h-[1px] ${hoverLineColor} transition-all duration-300 ease-out group-hover:w-full`}></span>
    </>
  );

  const containerClasses = `group relative ${baseTextColor} ${hoverTextColor} transition-colors duration-300 ease-out cursor-pointer pb-1 inline-block`;

  if (href) {
    return (
      <Link href={href} className={containerClasses}>
        {content}
      </Link>
    );
  }

  return (
    <span className={containerClasses}>
      {content}
    </span>
  );
}