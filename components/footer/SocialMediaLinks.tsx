import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaReddit } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";

const SocialMediaLinks = () => {
  return (

      <div className=" pt-4 md:pr-8 md:pt-0 flex gap-6 items-center md:self-start justify-center">
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="w-8 h-8 text-stone-300" />
        </a>
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook className="w-8 h-8 text-stone-300" />
        </a>
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
          <FaTiktok className="w-8 h-8 text-stone-300" />
        </a>
        <a href="https://reddit.com" target="_blank" rel="noopener noreferrer">
          {" "}
          <FaReddit className="w-8 h-8 text-stone-300" />
        </a>
        <a href="https://x.com" target="_blank" rel="noopener noreferrer">
          {" "}
          <FaXTwitter className="w-8 h-8 text-stone-300" />
        </a>
      </div>
  );
};

export default SocialMediaLinks;
