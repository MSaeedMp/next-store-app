import SectionTitle from "@/components/global/SectionTitle";
import FavoriteProducts from "@/components/favorite/FavoriteProducts";
import LoadingGrid from "@/components/global/LoadingGrid";
import Section from "@/components/global/Section";
import { Suspense } from "react";

const FavoritesPage = async () => {
  return (
    <Section>
      <SectionTitle>Favorite products</SectionTitle>
      <Suspense fallback={<LoadingGrid className="pt-10" />}>
        <FavoriteProducts />
      </Suspense>
    </Section>
  );
};

export default FavoritesPage;
