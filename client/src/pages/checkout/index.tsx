import Container from "../../components/Container";
import Image from "../../components/Image";
import Input from "../../components/Input";
import Section from "../../components/Section";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import useForm from "../../utils/hooks/useForm";

const Checkout = () => {
  const initialState = {
    email: "",
  };
  const { bind } = useForm(initialState);
  const { cartItems, cartTotal } = useShoppingCart();
  return (
    <Section>
      <Container className="gap-12 flex-col-reverse lg:flex-row">
        <form
          action=""
          className="font-light flex flex-col w-full lg:w-3/5 gap-12 p-10 bg-[#181818] rounded shadow-2xl"
        >
          <div className="flex flex-col gap-4">
            <p className="text-3xl">Contact Information</p>
            <Input
              type="email"
              placeholder="Email"
              name="email"
              {...bind}
              required
            />
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-3xl">Shipping Address</p>
            <div className="flex w-full flex-col gap-2">
              <div className="flex flex-grow gap-2">
                <Input
                  type="text"
                  placeholder="First name"
                  name="fname"
                  {...bind}
                  required
                />
                <Input
                  type="text"
                  placeholder="Last name"
                  name="lname"
                  {...bind}
                  required
                />
              </div>
              <Input
                type="text"
                placeholder="Company (optional)"
                name="company"
                {...bind}
              />
              <Input
                type="text"
                placeholder="Address"
                name="address"
                {...bind}
                required
              />
              <Input
                type="text"
                placeholder="Apartment, suite, etc. (optional)"
                name="apartment"
                {...bind}
              />
              <div className="flex gap-2">
                <Input
                  type="number"
                  placeholder="Zip code"
                  name="zip_code"
                  {...bind}
                  required
                />
                <Input type="text" placeholder="City" name="city" {...bind} />
                <Input
                  type="text"
                  placeholder="State/Province"
                  name="state"
                  {...bind}
                  required
                />
              </div>
              <Input
                type="text"
                placeholder="Country"
                name="country"
                {...bind}
                required
              />
              <Input
                type="number"
                placeholder="Phone number"
                name="phone_number"
                {...bind}
                required
              />
              <input
                type="submit"
                className="flex-grow bg-brand py-2 rounded font-bold"
                {...bind}
                value="Continue to payment"
              />
            </div>
          </div>
        </form>
        <div className="flex flex-col p-10 flex-grow bg-[#181818] rounded gap-4 shadow-lg h-fit">
          <h1 className="font-logo">Products</h1>
          {cartItems.map((cartItem, key) => {
            return (
              <div className="flex gap-4" key={key}>
                <Image
                  imgSrc={cartItem.thumbnail}
                  className="w-fit h-[100px] aspect-square flex-grow-0 rounded"
                />
                <div className="flex flex-col gap-4 h-full justify-center">
                  <h1 className="text-xl">{cartItem.title}</h1>
                  <p className="font-semibold">R {cartItem.price}</p>
                </div>
              </div>
            );
          })}
          <div className="flex justify-between border-y border-gray-300 py-4 text-lg">
            <p className="font-semibold">Subtotal:</p>
            <p className="font-bold">R {cartTotal}</p>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Checkout;
