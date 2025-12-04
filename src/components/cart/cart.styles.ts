import styled from "styled-components";
import Colors from "../../theme/theme.colors";

interface CartContainerProps {
    isVisible: boolean;
}

export const CartContainer = styled.div<CartContainerProps>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: flex-end;
    align-items: stretch;
    background-color: rgba(0, 0, 0, 0.7);
    visibility: ${(props) => (props.isVisible ? "visible" : "hidden")};
    opacity: ${(props) => (props.isVisible ? 1 : 0)};
    transition: all 0.3s ease;
`;

export const CartEscapeArea = styled.div`
    flex: 1;
    cursor: pointer;
`;

export const CartContent = styled.div`
    height: 100vh;
    min-width: 500px;
    max-width: 500px;
    z-index: 200;
    background-color: white;
    padding: 20px;
    overflow-y: auto;
    box-shadow: -2px 0 8px rgba(0,0,0,0.15);
`;

export const CartTitle = styled.p`
    font-size: 1.325rem;
    font-weight: 600;
    margin-bottom: 15px;    
`;

export const CartTotal = styled.p`
    font-weight: 600;
    font-size: 1.125rem;
    margin-bottom: 15px;
`;