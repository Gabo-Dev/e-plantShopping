import React, {useContext} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';
import './CartItem.css';
import { cartContext } from './CartContext';

const CartItem = ({ onContinueShopping }) => {
    const cart = useSelector(state => state.cart.items);
    const dispatch = useDispatch();
    const { items, remove } = useContext(cartContext);
    // Calculate total amount for all products in the cart
    const calculateTotalAmount = () => {
        return cart.reduce((total,item) => total + item.cost.replace('$', '') * item.quantity,0);
    };

    const handleContinueShopping = (e) => {
        onContinueShopping(e);
    };

    const handleCheckoutShopping = (e) => {
        alert('Functionality to be added for future reference');
    };

    const handleIncrement = (item) => {
        const obj = {
            ...item,
            quantity: item.quantity + 1
        }
        
        dispatch(updateQuantity(obj));
    };

    const handleDecrement = (item) => {
        const obj = {
            ...item,
            quantity: item.quantity - 1
        }
        if (obj.quantity === 0) {
            dispatch(removeItem(obj));
            handleRemove(item);
        }
        else {
            dispatch(updateQuantity(obj));
        }
    };

    const handleRemove = (item) => {
        dispatch(removeItem(item))
        remove(item);
    };

    // Calculate total cost based on quantity for an item
    const calculateTotalCost = (item) => {
        const cost = parseFloat(item.cost.replace('$', ''));
        return  item.quantity*cost;
    };

    return (
        <div className="cart-container">
            <h2 style={{ color: 'black' }}>Total Cart Amount: ${calculateTotalAmount()}</h2>
            <div>
                {cart.map(item => (
                    <div className="cart-item" key={item.name}>
                        <img className="cart-item-image" src={item.image} alt={item.name} />
                        <div className="cart-item-details">
                            <div className="cart-item-name">{item.name}</div>
                            <div className="cart-item-cost">{item.cost}</div>
                            <div className="cart-item-quantity">
                                <button className="cart-item-button cart-item-button-dec" onClick={() => handleDecrement(item)}>-</button>
                                <span className="cart-item-quantity-value">{item.quantity}</span>
                                <button className="cart-item-button cart-item-button-inc" onClick={() => handleIncrement(item)}>+</button>
                            </div>
                            <div className="cart-item-total">Total: ${calculateTotalCost(item)}</div>
                            <button className="cart-item-delete" onClick={() => handleRemove(item)}>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
            <div style={{ marginTop: '20px', color: 'black' }} className='total_cart_amount'></div>
            <div className="continue_shopping_btn">
                <button className="get-started-button" onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
                <br />
                <button className="get-started-button1" onClick={() => handleCheckoutShopping()}>Checkout</button>
            </div>
        </div>
    );
};

export default CartItem;


