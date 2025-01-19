import { useRef, useState, useEffect } from "react";
import { useDebouncedCallback } from "use-debounce";

export const useScrollState = () => {
  const viewportRef = useRef<HTMLDivElement>(null); // Remove `| null`
  const [scrollPosition, setScrollPosition] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  const updateScrollState = useDebouncedCallback(() => {
    if (viewportRef.current) {
      const scrollLeft = viewportRef.current.scrollLeft;
      const maxScrollLeft =
        viewportRef.current.scrollWidth - viewportRef.current.clientWidth;

      if (scrollPosition !== scrollLeft) setScrollPosition(scrollLeft);
      if (maxScroll !== maxScrollLeft) setMaxScroll(maxScrollLeft);
    }
  }, 100);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (viewport) {
      updateScrollState();
      viewport.addEventListener("scroll", updateScrollState, { passive: true });
      return () => {
        viewport.removeEventListener("scroll", updateScrollState);
      };
    }
  }, [updateScrollState]);

  return { viewportRef, scrollPosition, maxScroll, updateScrollState };
};
