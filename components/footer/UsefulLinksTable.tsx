import Logo from "../header/Logo";

const UsefulLinksTable = () => {
  return (
    <div className="hidden lg:grid grid-cols-4 py-6 capitalize">
      <div className="self-start">
        <Logo type="dark" />
      </div>
      <div>
        <ul className="flex-col gap-2 flex px-4">
          <li className="font-semibold mb-6">Online store guide</li>
          <li>customer service after purchase</li>
          <li>Product support</li>
        </ul>
      </div>
      <div>
        <ul className="flex flex-col gap-2 px-4">
          <li className="font-semibold mb-6">Get in touch</li>
          <li>Store Locator</li>
          <li>Contact us</li>
        </ul>
      </div>
      <div>
        <ul className="flex flex-col gap-2 px-4">
          <li className="font-semibold mb-6">Corporate</li>
          <li>Corporrate</li>
          <li>Information</li>
          <li>Sustainablity</li>
        </ul>
      </div>
    </div>
  );
};
export default UsefulLinksTable;
