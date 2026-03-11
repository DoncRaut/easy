const initialState = {
  cartItems: [],
  totalItems: 0,
  totalPrice: 0,
  loading: false,
  error: null
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.cartItems.find(item => item.id === action.payload.id);
      if (existingItem) {
        // If item already exists, increase quantity
        const updatedItems = state.cartItems.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return {
          ...state,
          cartItems: updatedItems,
          totalItems: state.totalItems + 1,
          totalPrice: state.totalPrice + action.payload.price
        };
      } else {
        // Add new item to cart
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
          totalItems: state.totalItems + 1,
          totalPrice: state.totalPrice + action.payload.price
        };
      }

    case 'REMOVE_FROM_CART':
      const itemToRemove = state.cartItems.find(item => item.id === action.payload);
      if (itemToRemove) {
        const updatedItems = state.cartItems.filter(item => item.id !== action.payload);
        return {
          ...state,
          cartItems: updatedItems,
          totalItems: state.totalItems - itemToRemove.quantity,
          totalPrice: state.totalPrice - (itemToRemove.price * itemToRemove.quantity)
        };
      }
      return state;

    case 'UPDATE_QUANTITY':
      const { id, quantity } = action.payload;
      const itemToUpdate = state.cartItems.find(item => item.id === id);
      if (itemToUpdate && quantity > 0) {
        const updatedItems = state.cartItems.map(item =>
          item.id === id ? { ...item, quantity } : item
        );
        const quantityDiff = quantity - itemToUpdate.quantity;
        return {
          ...state,
          cartItems: updatedItems,
          totalItems: state.totalItems + quantityDiff,
          totalPrice: state.totalPrice + (itemToUpdate.price * quantityDiff)
        };
      } else if (itemToUpdate && quantity === 0) {
        // Remove item if quantity is 0
        const updatedItems = state.cartItems.filter(item => item.id !== id);
        return {
          ...state,
          cartItems: updatedItems,
          totalItems: state.totalItems - itemToUpdate.quantity,
          totalPrice: state.totalPrice - (itemToUpdate.price * itemToUpdate.quantity)
        };
      }
      return state;

    case 'CLEAR_CART':
      return {
        ...state,
        cartItems: [],
        totalItems: 0,
        totalPrice: 0
      };

    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload
      };

    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
        loading: false
      };

    default:
      return state;
  }
};

export default cartReducer;
