import { createContext, FunctionComponent, ReactNode, useState } from "react";
import CartProduct from "../types/cart.type";
import { create } from "domain";
import Product from "../types/product.types";

interface ICartContext {
    isVisible: boolean;
    products: CartProduct[];
    toogleCart: () => void;
    addProductToCart: (product: Product) => void;
}

export const CartContext = createContext<ICartContext>({
    isVisible: false,
    products: [],
    toogleCart: () => {},
    addProductToCart: (product: Product) => {}
})

const CartContextProvider: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [products, setProducts] = useState<CartProduct[]>([]);

    const toogleCart = () => {
        setIsVisible((prevState) => !prevState);
    }

    const addProductToCart = (product: Product) => {
      const productIsAlreadyInCart = products.some(
        (item) => item.id === product.id
      );

      if (productIsAlreadyInCart) {
        return setProducts((products) =>
          products.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        );
      }

      setProducts((prevState) => [...prevState, { ...product, quantity: 1 }]);
    };

    return (
        <CartContext.Provider value={{ isVisible, products, toogleCart, addProductToCart }}> 
           { children } 
        </CartContext.Provider>
    )

}

export default CartContextProvider;