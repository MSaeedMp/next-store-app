import UsefulLinksTable from "./UsefulLinksTable";
import UsefulLinksAccordion from "./UsefulLinksAccordion";
import CopyRight from "./CopyRight";
import SocialMediaLinks from "./SocialMediaLinks";

const Footer = () => {
  return (
    <footer className="p-10 bg-stone-950 mt-14 text-stone-50 flex flex-col justify-between">
      <UsefulLinksTable />
      <UsefulLinksAccordion />
      <div className="flex-col md:border-t md:border-stone-500 pt-4 md:flex-row flex md:justify-between items-center gap-4 mt-10 md:mt-14">
        <SocialMediaLinks />
        <CopyRight />
      </div>
    </footer>
  );
};
export default Footer;
