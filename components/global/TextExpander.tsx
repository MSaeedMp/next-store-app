"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

const TextExpander = ({
  children,
  max = 50,
  className = "",
}: {
  children: React.ReactNode;
  max?: number;
  className?: string;
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  if (typeof children !== "string") return null;

  const content = children;
  const contentLength = content.split(" ").length;
  const isLongContent = contentLength > max;
  const displayedContent =
    isLongContent && !isExpanded
      ? content.split(" ").slice(0, max).join(" ") + "..."
      : content;

  return (
    <div className={cn("text-base", className)}>
      <p className="mb-2">{displayedContent}</p>
      {isLongContent && (
        <Button
          variant="link"
          className="text-muted-foreground p-0"
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          <ButtonContent isExpanded={isExpanded} />
        </Button>
      )}
    </div>
  );
};
export default TextExpander;

function ButtonContent({ isExpanded }: { isExpanded: boolean }) {
  return (
    <div className="flex items-center gap-1">
      <span>{isExpanded ? "Show Less" : "Show More"}</span>
      {isExpanded ? <IoIosArrowUp /> : <IoIosArrowDown />}
    </div>
  );
}
