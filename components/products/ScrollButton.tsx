// components/global/ScrollButton.tsx

import { Button } from "../ui/button";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

interface ScrollButtonProps {
  direction: "left" | "right";
  onClick: () => void;
  isVisible: boolean;
}

const ScrollButton: React.FC<ScrollButtonProps> = ({ direction, onClick, isVisible }) => {
  if (!isVisible) return null;

  return (
    <Button
      size="default"
      onClick={onClick}
      variant="outline"
      className={`hidden sm:flex z-10 w-5 sm:w-10 h-full absolute top-0 bg-white hover:bg-stone-50 transition-all duration-300 rounded-none ${
        direction === "left" ? "left-0" : "right-0"
      }`}
    >
      {direction === "left" ? (
        <MdOutlineKeyboardArrowLeft className="!w-6 !h-6 text-stone-900" />
      ) : (
        <MdOutlineKeyboardArrowRight className="!w-6 !h-6 text-stone-900" />
      )}
    </Button>
  );
};

export default ScrollButton;
