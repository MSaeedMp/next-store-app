import Image from "next/image";
import aboutUs from "@/public/about-us.webp";
import TextExpander from "@/components/global/TextExpander";
import Section from "@/components/global/Section";

const AboutPage = async () => {
  return (
    <Section>
      <div className="grid md:grid-cols-2 relative md:h-[800px] w-full">
        <h1 className="lg:text-5xl text-2xl md:text-4xl bg-accent-800 text-primary-100 xl:p-8 md:p-6 p-4 inline-block absolute -left-4 sm:-left-6 top-[440px] md:left-1/2 md:top-10 md:-translate-x-16 shadow-md z-10 bg-stone-900 text-stone-100 font-semibold tracking-wider whitespace-nowrap">
          About Next Store
        </h1>
        <div className="relative overflow-hidden mx-auto h-[400px] lg:h-[800px] w-full">
          <Image
            src={aboutUs}
            fill
            alt="about us"
            sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw, 33vw "
            priority
            placeholder="blur"
            className="object-cover object-center h-full"
          />
        </div>
        <div className="h-full overflow-auto">
          <TextExpander
            className="lg:mt-48 md:mt-44 md:px-8 mt-32 leading-loose"
            max={300}
          >
            Welcome to NextStore, your trusted destination for reimagining
            spaces and bringing your design dreams to life. Our mission is
            simple yet powerful: to help you create a home that truly feels like
            yours. We understand that every space tells a story, and we’re here
            to provide the perfect pieces to make your story unforgettable. At
            NextStore, we believe that great design should be accessible to
            everyone. That’s why we carefully curate a diverse range of
            high-quality products, from timeless classics to modern innovations,
            ensuring that every piece meets our standards of functionality,
            durability, and style. Whether you’re searching for sleek furniture,
            elegant decor, or practical storage solutions, our collection is
            designed to inspire and elevate your home. But we’re more than just
            a store—we’re your design partner. Our team is passionate about
            helping you find what you need to create spaces that are not only
            beautiful but also practical and welcoming. We know that the little
            details matter, and we’re here to guide you every step of the way as
            you turn your vision into reality. Sustainability is at the heart of
            what we do.
          </TextExpander>
        </div>
      </div>
    </Section>
  );
};

export default AboutPage;
