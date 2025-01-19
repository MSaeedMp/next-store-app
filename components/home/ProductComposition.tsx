import { Suspense } from "react";
import ProductCompositionGrid from "./ProductCompositionGrid";
import { cn } from "@/lib/utils";
import LoadingCompositionGrid from "../global/LoadingCompositionGrid";

type ProductCompositionProps = {
  className?: string;
};

const ProductComposition = ({ className }: ProductCompositionProps) => {
  const grids = [
    <ProductCompositionGrid key="grid-1" />,
    <ProductCompositionGrid key="grid-2" />,
    <ProductCompositionGrid key="grid-3" className="hidden lg:grid" />,
  ];
  return (
    <section
      className={cn(
        "grid grid-cols-2 lg:grid-cols-3 md:grid-cols-2 lg:gap-x-4 gap-x-2 -mx-2 relative z-30",
        className
      )}
    >
      {grids.map((grid) => (
        <Suspense fallback={<LoadingCompositionGrid />} key={grid.key}>
          {grid}
        </Suspense>
      ))}
    </section>
  );
};
export default ProductComposition;
