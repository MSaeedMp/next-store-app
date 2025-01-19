import SectionTitle from "@/components/global/SectionTitle";
import FavoriteProducts from "@/components/favorite/FavoriteProducts";
import { Suspense } from "react";
import LoadingGrid from "@/components/global/LoadingGrid";
// import { getSession } from "next-auth/react";

const FavoritesPage = async () => {
  // const session = await getSession();
  // console.log(session);
  return (
    <section className="pt-36 sm:pt-28 min-h-[calc(100vh-34rem)]">
      <SectionTitle>Favorite products</SectionTitle>
      <Suspense fallback={<LoadingGrid className="pt-10" />}>
        <FavoriteProducts />
      </Suspense>
    </section>
  );
};

export default FavoritesPage;
