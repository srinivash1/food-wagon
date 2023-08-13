import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: []
    },
    reducers: {
        addToCart: (state,action) => {
            //get the items from the cart
            const newItem = action.payload;
            const existingItem = state.cart.findIndex(item => item.id === newItem.id);
            //check if the item is already in the cart
            if (existingItem !== -1) {
                state.cart[existingItem].quantity+= 1
            }
            else {
                state.cart.push({...newItem, quantity: 1})
            }
        },
        removeFromCart: (state,action) => {
            const newItem = action.payload;
            const existingItem = state.cart.findIndex(item => item.id === newItem.id);
            if (existingItem !== -1) {
                if (state.cart[existingItem].quantity > 1) {
                    state.cart[existingItem].quantity -= 1; // Decrease quantity if more than 1
                } else {
                    state.cart.splice(existingItem, 1); // Remove the item if only 1 left
                }
            }
        },
        deleteFromCart: (state) => {
            state.cart = []
        }
        
    }
})

export const { addToCart, deleteFromCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;