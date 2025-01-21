import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const UsefulLinksAccordion = () => {
  return (
    <Accordion type="single" collapsible className="w-full lg:hidden">
      <AccordionItem value="item-1" className="border-stone-500">
        <AccordionTrigger className="text-lg">
          Online store guide
        </AccordionTrigger>
        <AccordionContent>
          <ul className="flex-col gap-2 flex px-4">
            <li>customer service after purchase</li>
            <li>Product support</li>
          </ul>{" "}
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="border-stone-500">
        <AccordionTrigger className="text-lg">Get in touch</AccordionTrigger>
        <AccordionContent>
          <ul className="flex flex-col gap-2 px-4">
            <li>Store Locator</li>
            <li>Contact us</li>
          </ul>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="border-stone-500">
        <AccordionTrigger className="text-lg">Corporrate</AccordionTrigger>
        <AccordionContent>
          <ul className="flex flex-col gap-2 px-4">
            <li>Corporrate</li>
            <li>Information</li>
            <li>Sustainablity</li>
          </ul>{" "}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
export default UsefulLinksAccordion;
