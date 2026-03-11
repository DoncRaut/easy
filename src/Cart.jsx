import React, { useReducer } from 'react';
import cartReducer from './assets/cartreducer';

function Cart() {
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    cartItems: [],
    totalItems: 0,
    totalPrice: 0,
    loading: false,
    error: null
  });

  const updateQuantity = (id, quantity) => {
    cartDispatch({ type: 'UPDATE_QUANTITY', payload: { id, quantity } });
  };

  const removeFromCart = (id) => {
    cartDispatch({ type: 'REMOVE_FROM_CART', payload: id });
  };

  const clearCart = () => {
    cartDispatch({ type: 'CLEAR_CART' });
  };

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>

      {cartState.cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div className="cart-items">
            {cartState.cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <div className="item-info">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <p className="price">${item.price.toFixed(2)} each</p>
                </div>
                <div className="quantity-controls">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                </div>
                <div className="item-total">
                  <p>${(item.price * item.quantity).toFixed(2)}</p>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Total: ${cartState.totalPrice.toFixed(2)}</h2>
            <p>Total Items: {cartState.totalItems}</p>
            <button className="clear-cart" onClick={clearCart}>Clear Cart</button>
            <button className="checkout">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;