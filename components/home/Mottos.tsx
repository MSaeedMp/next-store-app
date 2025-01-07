import Image from "next/image";
import mottoImg from "@/public/mottos.webp";

const Mottos = () => {
  return (
    <div className="relative sm:-mx-6 -mx-4 lg:-mx-8">
      <div className="relative h-[900px] w-full">
        <Image
          src={mottoImg}
          alt="Mottos"
          sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw, 33vw "
          className="object-cover h-full w-full"
          quality={50}
          placeholder="blur"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>

      <div className=" ">
        <h1
          className="text-7xl font-[900] absolute h-full left-[370] top-[212px] leading-[2] text-stone-200 -rotate-90"
          style={{ textShadow: "0 0 8px rgba(0, 0, 0, 1)" }}
        >
          <span className="block">Explore</span>
          <span className="block">Potential</span>
          <span className="block">Spaces</span>
          <span className="block">Where</span>
          <span className="block">Innovation</span>
          <span className="block">Meets</span>
          <span className="block">Opportunity</span>
        </h1>
      </div>

      {/* <h1
        className="text-6xl font-bold  w-full  leading-[1.2] text-stone-200"
        style={{ textShadow: "0 0 8px rgba(0, 0, 0, 1)" }}
      >
        <span className="inline-block whitespace-nowrap absolute top-[150px] left-1/2 -translate-x-1/2">
          Explore Potential Spaces
        </span>
        <span className="inline-block whitespace-nowrap  absolute bottom-[150px] left-1/2 -translate-x-1/2">
          Where Innovation Meets Opportunity
        </span>{" "}
      </h1> */}
    </div>
  );
};
export default Mottos;
