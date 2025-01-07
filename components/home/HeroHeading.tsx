const HeroHeading = () => {
  return (
    <h1
      className="absolute xl:left-[100px] sm:left-[50px] left-[20px] md:left[70px] text-stone-200 xl:top-[510px] top-[300px] md:top-[380px] lg:top-[525px] text-5xl sm:text-7xl sm:top-[450px] md:text-8xl font-bold tracking-tight z-20 leading-[1.1]"
      style={{ textShadow: "0 0 8px rgba(0, 0, 0, 1)" }}
    >
      <span className="relative">Design</span>
      <br />
      <span className="relative">Your Space</span>
      <br />
      <span className="relative">with our</span>
      <br />
      <span
        className="relative text-7xl sm:text-[9rem] md:text-[10rem] xl:text-[12rem] text-stone-200"
        style={{ textShadow: "0 0 8px rgba(0, 0, 0, 1)" }}
      >
        Products
      </span>
    </h1>
  );
};
export default HeroHeading;
