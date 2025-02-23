import Logo from "../header/Logo";

const linksGroup = [
  {
    title: "Online store guide",
    subTitles: ["customer service after purchase", "Product support"],
  },
  {
    title: "Get in touch",
    subTitles: ["Store Locator", "Contact Us"],
  },
  {
    title: "Corporate",
    subTitles: ["Corporrate", "Information", "Sustainablity"],
  },
];

const UsefulLinksTable = () => {
  return (
    <div className="hidden lg:grid grid-cols-4 py-6 capitalize">
      <div className="self-start">
        <Logo type="dark" />
      </div>
      {linksGroup.map((gp) => {
        return (
          <div key={gp.title}>
            <ul className="flex-col gap-2 flex px-4">
              <li className="font-semibold mb-6">{gp.title}</li>
              {gp.subTitles.map((sb) => (
                <li
                  className="text-stone-300 hover:text-stone-100 cursor-pointer"
                  key={sb}
                >
                  {sb}
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
};
export default UsefulLinksTable;
