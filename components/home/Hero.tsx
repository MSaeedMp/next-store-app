import HeroHeading from "./HeroHeading";
import HeroSlider from "./HeroSlider";

const Hero = () => {
  return (
    <>
      <HeroSlider />
      <HeroHeading />
      <div className="pt-[610] sm:pt-[900px] md:pt-[870px] lg:pt-[1050px]"></div>
    </>
  );
};
export default Hero;
