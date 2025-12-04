import { FunctionComponent, useContext } from "react";
import { BsCartCheck } from "react-icons/bs";

//Utilities
import { CartContext } from "../../contexts/cart.context";

//Components
import CustomButtom from "../custom-button/custom-button.component";

//styles
import { CartContainer, CartContent, CartEscapeArea, CartTitle, CartTotal } from "./cart.styles";
import CartItem from "../cart-item/cart-item.component";

const Cart: FunctionComponent = () => {
    const {isVisible, products, toogleCart} = useContext(CartContext);

    return (
        <CartContainer isVisible={isVisible}>
            <CartEscapeArea onClick={toogleCart}/>
            <CartContent>
                <CartTitle> Seu Carrinho </CartTitle>

                {products.map((product) => (
                    <CartItem key={product.id} product={product} />
                ))}

                <CartTotal> Total: R$ 999 </CartTotal>
                <CustomButtom startIcon={<BsCartCheck />}>Ir para o Checkout </CustomButtom>

            </CartContent>
        </CartContainer>
    )
}

export default Cart;