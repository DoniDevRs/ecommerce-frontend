import { BsCart3} from 'react-icons/bs'

import "./header.styles.scss";
import { HeaderContainer, HeaderItems, HeaderItem, HeaderTitle } from './header.styles';

const Header = () => {
  return (
    <HeaderContainer>
      <h2>
        <HeaderTitle>CLUB CLOTHING</HeaderTitle>
      </h2>
        <HeaderItems>
          <HeaderItem>Explorar</HeaderItem>
          <HeaderItem>Login</HeaderItem>
          <HeaderItem>Criar conta</HeaderItem>
          <HeaderItem>
            <BsCart3 size={25} />
            <p style={ { marginLeft: 5 } }> 5</p>
          </HeaderItem>
        </HeaderItems>
      </ HeaderContainer>
  );
};

export default Header;
