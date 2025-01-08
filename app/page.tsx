import Hero from "@/components/home/Hero";
import ProductScrollArea from "@/components/home/ProductScrollArea";
import TeaserCarousel from "@/components/home/TeaserCarousel";
import SectionTitle from "@/components/global/SectionTitle";
import ProductCompositionContainer from "@/components/home/ProductCompositionContainer";

const HomePage = () => {
  return (
    <>
      <Hero />
      <ProductCompositionContainer
        category="all"
        categoryKey="FeaturedProducts"
        className="relative z-30"
      />

      <SectionTitle className="mt-10 mb-4">Featured Products</SectionTitle>
      <ProductScrollArea category="featured" categoryKey="FeaturedProducts" />

      <SectionTitle className="mt-10 mb-4">Trending Products</SectionTitle>
      <ProductCompositionContainer
        category="all"
        categoryKey="FeaturedProducts"
        className="mt-10"
      />

      <SectionTitle className="mt-10 mb-4">Best Sellers</SectionTitle>
      <ProductScrollArea category="all" categoryKey="BestSellerProducts" />

      <TeaserCarousel className="mt-14" />

      <SectionTitle className="mt-10 mb-4">Recommended Products</SectionTitle>
      <ProductScrollArea category="all" categoryKey="RecommendedProducts" />
    </>
  );
};

export default HomePage;
