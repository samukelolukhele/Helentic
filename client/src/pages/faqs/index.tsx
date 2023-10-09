import InfoPage from "../../components/InfoPage";
import Accordion from "../../components/Accordion";

const FAQ = () => {
  const accordions = [
    {
      title: "Jewellery Care",
      content:
        "Our jewelry is made with proper maintenance, it will continue to shine. We offer a two-year warranty, providing confidence in protecting against any potential defects in materials or workmanship.",
    },
    {
      title: "Shipping Times",
      content:
        "The delivery time depends on your location. Typically, orders are processed and shipped within 5 business days. You can find estimated delivery times for each shipping option at the checkout.",
    },
    {
      title: "Can I track my order?",
      content:
        "Yes, we provide tracking information for all shipped orders. Once your order is dispatched, you will receive an email with a tracking number and instructions on how to track your package.",
    },
    {
      title: "What materials are used?",
      content:
        "We only use highest quality materials for all of our pieces. We take pride in providing you with jewellery that will last a lifetime",
    },
  ];
  return (
    <InfoPage
      pageTitle="FAQ"
      pageDescription="We value transparency. From jewelry care and maintenance to international shipping, you can find answers to all your questions here."
    >
      {accordions.map((item, key) => {
        return (
          <Accordion key={key} title={item.title} content={item.content} />
        );
      })}
    </InfoPage>
  );
};

export default FAQ;
