import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const Marquee = ({
  messages,
  className,
}: {
  messages: string[];
  className?: string;
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <div
      className={cn(
        "relative w-full h-10 overflow-hidden flex justify-center items-center bg-stone-900 text-stone-100 text-sm",
        className
      )}
    >
      <AnimatePresence mode="wait">
        <motion.div
          className="absolute whitespace-nowrap w-full text-center"
          key={currentIndex}
          initial={{ x: "100%", opacity: 0 }}
          animate={{ x: "0", opacity: 1 }}
          exit={{ x: "-100%", opacity: 0 }}
          transition={{
            x: { type: "tween", duration: 0.4 },
            opacity: { duration: 0.5 },
          }}
        >
          {messages[currentIndex]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Marquee;
