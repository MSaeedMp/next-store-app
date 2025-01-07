import Image from "next/image";
import Link from "next/link";

const Logo = ({ type, onClick }: { type: string; onClick?: () => void }) => {
  return (
    <div className="self-stretch h-full flex items-center focus:outline-stone-900">
      <Link href="/" onClick={onClick}>
        <div className=" relative lg:h-[50px] lg:w-[200px] sm:h-[45px] sm:w-[180px] h-[40px] w-[150px]">
          <Image
            src={`/logo-${type}.png`}
            alt="next store logo"
            fill
            sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw, 33vw"
          />
        </div>
      </Link>
    </div>
  );
};
export default Logo;
