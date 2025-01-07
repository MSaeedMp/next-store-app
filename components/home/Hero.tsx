import HeroHeading from "./HeroHeading";
import HeroSlider from "./HeroSlider";
import HeroBotFader from "./HeroBotFader";

const Hero = () => {
  return (
    <>
      <HeroSlider />
      <HeroHeading />
      <HeroBotFader />
      <div className="pt-[580px] sm:pt-[900px] lg:pt-[1100px]"></div>
    </>
  );
};
export default Hero;
