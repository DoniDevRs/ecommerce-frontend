import { FunctionComponent } from "react";
import { AiOutlinePlus, AiOutlineMinus, AiOutlineClose } from "react-icons/ai";

import { CartItemContainer, CartItemImage, CartItemInfo, CartItemQuantity, RemoveButton } from "./cart-item.styles";
import CartProduct from "../../types/cart.type";

interface CartItemProps {
    product: CartProduct
}

const CartItem: FunctionComponent<CartItemProps> = ({ product }) => {
    return (
        <CartItemContainer> 
            <CartItemImage imageUrl={product.imageUrl} />
            <CartItemInfo>
                <p>{product.name}</p>
                <p>R${product.price}</p>
            </CartItemInfo>
            <CartItemQuantity>
                <><AiOutlineMinus size={20} /><p>{product.quantity}</p><AiOutlinePlus size={20} /></>
            </CartItemQuantity>
            <RemoveButton>
                <AiOutlineClose size={25} /> Remover
            </RemoveButton>    

        </CartItemContainer>
    )
}

export default CartItem;    
