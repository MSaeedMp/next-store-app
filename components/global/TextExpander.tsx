"use client";

import { useState } from "react";

const TextExpander = ({
  children,
  max = 50,
  className = "",
}: {
  children: React.ReactNode;
  max: number;
  className: string;
}) => {
  const [collapseContent, setCollapseContent] = useState<boolean>(true);

  if (typeof children !== "string") return null;

  let displayedContent = children + " ";
  if (collapseContent)
    displayedContent =
      displayedContent.split(" ").slice(0, max).join(" ") + " ";

  return (
    <p className={`${className}`}>
      {displayedContent}
      <span
        className="underline font-semibold text-stone-900"
        role="button"
        onClick={() => setCollapseContent((prev) => !prev)}
      >
        {children.length > max &&
          (collapseContent ? "Read more..." : "Read less")}
      </span>
    </p>
  );
};
export default TextExpander;
