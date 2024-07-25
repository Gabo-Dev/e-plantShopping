import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
    // this reducer function handles action of adding an item to the cart
    addItem: (state, action) => {
        const existingItem = state.items.find(item => item.name === action.payload.name);
        if (existingItem) {
            existingItem.quantity+=1;
        }
        else{
            state.items.push({ ...action.payload,quantity:1});
        }
    },
    removeItem: (state, action) => {
    },
    updateQuantity: (state, action) => {

    
    },
  },
);

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
