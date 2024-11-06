import {NavigationContainer, Navlinks , Navlink , LogoContainer}  from "./navigation.styles.jsx";
import { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown (1).svg";

import CartIcon from "../../components/cart-icon/cart-icon.component.jsx";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component.jsx";

import { UserContext } from "../../context/user.context.jsx";
import { signOutUser } from "../../utilis/firebase/firebase.utilis.js";
import { CartContext } from "../../context/cart.context.jsx";


const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const {isCartOpen} = useContext(CartContext)
  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer  to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <Navlinks>
          <Navlink to="/shop">
            SHOP
          </Navlink>
          {currentUser ? (
            <Navlink as='span' onClick={signOutUser}>
              SIGNOUT
            </Navlink>
          ) : (
            <Navlink to="/auth">
              SIGN IN
            </Navlink>
          )}
          <CartIcon />
        </Navlinks>
        { isCartOpen && <CartDropDown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
