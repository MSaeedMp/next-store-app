import { MdEmail } from "react-icons/md";

const CopyRight = () => {
  return (
    <p className="md:max-w-[450px] text-center text-sm md:text-left text-stone-300">
      <span>&copy; 2025 M. Saeed Mafipour. All Rights Reserved.</span>
      <span className="block mt-2">
        Designed with passion by M. Saeed Mafipour.
      </span>
      <a
        href="mailto:saeed.mafipour@gmail.com"
        className="underline text-stone-400 w-full hover:text-stone-200 flex md:justify-normal justify-center items-center gap-2 mt-2"
      >
        <MdEmail className="w-4 h-4 text-stone-400" />
        saeed.mafipour@gmail.com
      </a>
    </p>
  );
};
export default CopyRight;
