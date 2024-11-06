import {CartDropdownContainer,CartItems,EmptyMessage}  from'./cart-dropdown.styles.jsx'
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { CartContext } from '../../context/cart.context'
const CartDropDown = ()=>{

    const {cartItems , setIsCartOpen}  = useContext(CartContext)
    const navigate = useNavigate()

    const goToCheckOuthandler =()=>{
        navigate('/checkout')
        setIsCartOpen(false)
    }
    
    return(
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length ?
                        (cartItems.map(item=><CartItem key={item.id} cartItem={item}/>))
                     :( <EmptyMessage >your cart is empty</EmptyMessage>)
                }
                
            </CartItems>

            <Button onClick ={goToCheckOuthandler}>GO TO CHECKOUT</Button>
        </CartDropdownContainer>
    )
}

export default CartDropDown