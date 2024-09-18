import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart.context';

import Button from '../button/button.copmonent';

import CartItem from '../cart-item/cart-item.component';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
    const navigate = useNavigate();
    const {cartItems} = useContext(CartContext);
    
    const goToCHeckoutHandler = () => {
        navigate('/checkout')
    }

    return(
        <div className='cart-dropdown-container'>
            <div className='cart-items'>
                {cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item} />
                    ))}
            </div>
            <Button onClick={goToCHeckoutHandler}>CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown;