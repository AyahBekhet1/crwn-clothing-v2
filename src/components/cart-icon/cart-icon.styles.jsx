import styled from "styled-components";
import { ReactComponent as ShopingSvg } from "../../assets/shopping-bag.svg";

export const ShoppingIcon = styled(ShopingSvg)`
  width: 32px;
  height: 32px;
`;

export const CartIconContainer = styled.div`
  width: 35px;
  height: 35px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
export const ItemCount = styled.span`
  position: absolute;
  font-size: 10px;
  font-weight: bold;
  top: 60%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
