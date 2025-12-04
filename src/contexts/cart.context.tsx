import { createContext, FunctionComponent, ReactNode, useState } from "react";
import CartProduct from "../types/cart.type";
import { create } from "domain";

interface ICartContext {
    isVisible: boolean;
    products: CartProduct[];
    toogleCart: () => void;
}

const CartContext = createContext<ICartContext>({
    isVisible: false,
    products: [],
    toogleCart: () => {},
})

const CartContextProvider: FunctionComponent<{ children: ReactNode }> = ({ children }) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const [products, setProducts] = useState<CartProduct[]>([]);

    const toogleCart = () => {
        setIsVisible((prevState) => !prevState);
    }

    return (
        <CartContext.Provider value={{ isVisible, products, toogleCart }}> 
           { children } 
        </CartContext.Provider>
    )

}

export default CartContextProvider;