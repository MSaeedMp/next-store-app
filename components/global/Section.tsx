const Section = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="pt-36 sm:pt-32 min-h-[calc(100vh-30rem)]">
      {children}
    </section>
  );
};
export default Section;
