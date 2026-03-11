import React, { useReducer, useEffect } from 'react';
import itemReducer from './assets/itemreducer';
import cartReducer from './assets/cartreducer';

const initialItems = [
  { id: 1, name: 'Laptop', price: 999.99, description: 'High-performance laptop' },
  { id: 2, name: 'Smartphone', price: 699.99, description: 'Latest smartphone model' },
  { id: 3, name: 'Headphones', price: 199.99, description: 'Wireless noise-cancelling headphones' },
  { id: 4, name: 'Tablet', price: 499.99, description: '10-inch tablet with stylus' },
  { id: 5, name: 'Smart Watch', price: 299.99, description: 'Fitness tracking smartwatch' },
  { id: 6, name: 'Gaming Console', price: 399.99, description: 'Next-gen gaming console' }
];

function Items() {
  const [itemsState, itemsDispatch] = useReducer(itemReducer, { items: [], loading: false, error: null });
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    cartItems: [],
    totalItems: 0,
    totalPrice: 0,
    loading: false,
    error: null
  });

  useEffect(() => {
    // Simulate fetching items
    itemsDispatch({ type: 'FETCH_ITEMS_REQUEST' });
    setTimeout(() => {
      itemsDispatch({ type: 'FETCH_ITEMS_SUCCESS', payload: initialItems });
    }, 1000);
  }, []);

  const addToCart = (item) => {
    cartDispatch({ type: 'ADD_TO_CART', payload: item });
  };

  return (
    <div className="items-page">
      <h1>Our Products</h1>

      <div className="cart-summary">
        <h2>Cart: {cartState.totalItems} items - ${cartState.totalPrice.toFixed(2)}</h2>
      </div>

      {itemsState.loading && <p>Loading items...</p>}
      {itemsState.error && <p>Error: {itemsState.error}</p>}

      <div className="items-grid">
        {itemsState.items.map(item => (
          <div key={item.id} className="item-card">
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p className="price">${item.price.toFixed(2)}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>

      {cartState.cartItems.length > 0 && (
        <div className="cart-preview">
          <h2>Cart Items:</h2>
          <ul>
            {cartState.cartItems.map(item => (
              <li key={item.id}>
                {item.name} - Quantity: {item.quantity} - ${(item.price * item.quantity).toFixed(2)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Items;