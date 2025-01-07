import Hero from "@/components/home/Hero";
import ProductCarouselContainer from "@/components/home/ProductCarouselContainer";
import TeaserCarousel from "@/components/home/TeaserCarousel";
import SectionTitle from "@/components/global/SectionTitle";

const HomePage = () => {
  return (
    <>
      <Hero />
      <SectionTitle className="mt-14">Featured Products</SectionTitle>
      <ProductCarouselContainer
        category="featured"
        categoryKey="FeaturedProducts"
      />

      <SectionTitle className="mt-14">Best Sellers</SectionTitle>
      <ProductCarouselContainer
        category="all"
        categoryKey="BestSellerProducts"
      />

      <TeaserCarousel />

      <SectionTitle className="mt-14">Recommended Products</SectionTitle>
      <ProductCarouselContainer
        category="all"
        categoryKey="RecommendedProducts"
      />
    </>
  );
};

export default HomePage;
