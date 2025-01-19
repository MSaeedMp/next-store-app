import Hero from "@/components/home/Hero";
import SectionTitle from "@/components/global/SectionTitle";
import ProductComposition from "@/components/home/ProductComposition";
import HeroSlider from "@/components/home/HeroSlider";
import HeroHeading from "@/components/home/HeroHeading";
import ProductScrollArea from "@/components/products/ProductScrollArea";
import ProductScrollBox from "@/components/home/ProductScrollBox";
import TeaserCarousel from "@/components/home/TeaserCarousel";

const HomePage = async () => {
  return (
    <main>
      <Hero>
        <HeroSlider />
        <HeroHeading />
      </Hero>
      <ProductComposition />
      <SectionTitle className="mt-10 mb-4">Featured Products</SectionTitle>
      <ProductScrollBox
        ProductScrollArea={<ProductScrollArea category="featured" />}
      />
      <SectionTitle className="mt-10 mb-4">New Products</SectionTitle>
      <ProductScrollBox
        ProductScrollArea={<ProductScrollArea category="new" />}
      />
      <ProductComposition className="my-16" />
      <SectionTitle className="mt-10 mb-4">Best Sellers</SectionTitle>
      <ProductScrollBox
        ProductScrollArea={<ProductScrollArea category="bestSeller" />}
      />
      <TeaserCarousel className="mt-14" />
      <SectionTitle className="mt-10 mb-4">Recommended Products</SectionTitle>
      <ProductScrollBox
        ProductScrollArea={<ProductScrollArea category="recommended" />}
      />{" "}
    </main>
  );
};

export default HomePage;
