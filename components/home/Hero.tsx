const Hero = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="pt-[630px] sm:pt-[900px] md:pt-[870px] lg:pt-[1050px] min-h-[calc(100vh-34rem)]">
      {children}
    </section>
  );
};
export default Hero;
