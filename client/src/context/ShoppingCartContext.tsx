import { ReactNode, createContext, useContext, useState } from "react";
import useLocalStorage from "../utils/hooks/useLocalStorage";

type ProviderProps = {
  children: ReactNode;
};

type ContextProps = {
  getItemQuantity: (id: number) => number;
  increaseCartQuantity: (
    id: number,
    thumbnail: string,
    title: string,
    price: number
  ) => void;
  decreaseCartQuantity: (id: number) => void;
  removeFromCart: (id: number) => void;
  cartItems: CartProps[];
  cartTotal: string;
};

type CartProps = {
  id: number;
  thumbnail: string;
  title: string;
  price: number;
  quantity: number;
};

const ShoppingCartContext = createContext({} as ContextProps);

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

export function ShoppingCartProvider({ children }: ProviderProps): ReactNode {
  const { saveToLocalStorage, parseFromLocalStorage } = useLocalStorage();
  const [cartItems, setCartItems] = useState<CartProps[]>(
    parseFromLocalStorage("cart_items") || []
  );

  saveToLocalStorage("cart_items", cartItems);

  const cartTotal = new Intl.NumberFormat().format(
    cartItems.reduce((total, cartItem) => {
      const item = cartItems.find((i) => i.id === cartItem.id);
      return total + (item?.price || 0) * cartItem.quantity;
    }, 0)
  );

  function getItemQuantity(id: number) {
    return cartItems.find((item: CartProps) => item.id == id)?.quantity || 0;
  }

  function increaseCartQuantity(
    id: number,
    thumbnail: string,
    title: string,
    price: number
  ) {
    setCartItems((currItems: CartProps[]) => {
      if (currItems.find((item: CartProps) => item.id == id) == null) {
        saveToLocalStorage("cart_items", [
          ...currItems,
          { id, quantity: 1, thumbnail, title, price },
        ]);
        // console.log(currItems.find((item: CartProps) => item.id == id) == null)

        return [...currItems, { id, quantity: 1, thumbnail, title, price }];
      } else {
        return currItems.map((item: CartProps) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            saveToLocalStorage<CartProps>("cart_items", item);
            return item;
          }
        });
      }
    });
  }

  function decreaseCartQuantity(id: number) {
    setCartItems((currItems: CartProps[]) => {
      if (currItems.find((item: CartProps) => item.id == id)) {
        currItems.filter((item: CartProps) => item.id !== id);
        saveToLocalStorage<CartProps[]>("cart_items", currItems);
      }

      return currItems.map((item: CartProps) => {
        if (item.id === id && item.quantity > 1) {
          saveToLocalStorage<CartProps>("cart_items", {
            ...item,
            quantity: item.quantity - 1,
          });
          return { ...item, quantity: item.quantity - 1 };
        } else {
          saveToLocalStorage<CartProps>("cart_items", item);
          return item;
        }
      });
    });
  }

  function removeFromCart(id: number) {
    setCartItems((currItems: CartProps[]) => {
      const newCart = currItems.filter((item: CartProps) => item.id !== id);

      saveToLocalStorage<CartProps[]>("cart_items", newCart);

      return newCart;
    });
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        cartItems,
        cartTotal,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}
