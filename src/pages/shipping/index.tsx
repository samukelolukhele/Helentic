import Accordion from "../../components/Accordion";
import InfoPage from "../../components/InfoPage";

const Shipping = () => {
  const accordionItems = [
    {
      title: "Fast & Reliable Shipping",
      content:
        "We partner with trusted shipping carriers to ensure your jewellery arrives in a timely manner. Our team works diligently to process your order quickly, and once it's ready, we hand it over to our shipping partners for swift and reliable delivery to your doorstep.",
    },
    {
      title: "Tracking Information",
      content:
        "We believe in transparency and want you to stay informed throughout the shipping process. As soon as your order is on its way, we'll provide you with a tracking number. You can use this number to track your package's progress, giving you peace of mind and the ability to plan for its arrival.",
    },
    {
      title: "International Shipping",
      content:
        "We understand that our jewellery lovers span the globe, which is why we offer international shipping to bring our pieces to you, wherever you may be. Please note that international shipping times may vary depending on the destination country's customs procedures and regulations.",
    },
    {
      title: "Dedicated Customer Support",
      content:
        "We're here for you every step of the way. If you have any questions or concerns about your order or shipping, our friendly customer support team is ready to assist you. Simply reach out to us, and we'll be delighted to help.",
    },
    {
      title: "Return Policy",
      content:
        "If you're looking to return or exchange your order for whatever reason, we're here to help! We offer free returns within 30 days of purchase. You can return your product for store credit, a different product, or a refund to the original payment method.",
    },
  ];
  return (
    <InfoPage
      pageDescription="At Helentic, we strive to provide you with a seamless and delightful
    shopping experience, including our shipping process. We understand
    the excitement of receiving your sustainable jewelry pieces, and we
    want to ensure that they reach you safely and efficiently. Here's
    everything you need to know about our shipping"
      pageTitle="Shipping"
    >
      {accordionItems.map((item, key) => {
        return (
          <Accordion title={item.title} content={item.content} key={key} />
        );
      })}
    </InfoPage>
  );
};

export default Shipping;
