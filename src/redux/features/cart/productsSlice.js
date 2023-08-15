import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
const initialState = {
    isLoading: false,
    quantity:0,
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
    message: '',
    cartItems: []
};
export const productsFetch = createAsyncThunk(
    "products/productsFetch",
    async () => {
        const response = await axios.get("https://fakestoreapi.com/products/category/electronics")
        return response?.data
    }
)

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addToCart(state, action) {
            const find = state.cartItems.findIndex(item=>item.id ===action.payload.id)
            if(find>=0){
               state.cartItems[find].quantity +=1
            }else{
                const tempvar = {...action.payload,quantity : 1 }
                state.cartItems.push(tempvar)
            }
        },
        removeItem(state, action) { 
          const findProduct = state.cartItems.find(item => item.id === action.payload.id);
            if(findProduct.quantity === 1){
                state.cartItems=state.cartItems.filter((item)=>item.id!==action.payload.id)
            }else{
                state.cartItems = state.cartItems.map((item)=>item.id === action.payload.id ? { ...action.payload,quantity:item.quantity-1 } : item)
            }
        },
        countTotal(state,action){
            state.cartTotalAmount = state.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
        },

    },

    extraReducers: (builder) => {
        builder.addCase(productsFetch.pending, (state) => {
            state.isLoading = true;

        }).addCase(productsFetch.fulfilled, (state, action) => {
            state.isLoading = false;
            state.items = action.payload
        }).addCase(productsFetch.rejected, (state, action) => {
            state.isLoading = false;
            state.items = [];
            state.message = action.payload;
        })

    }




})
export const { addToCart, removeItem, countTotal,countTotalPiece } = productsSlice.actions;
export default productsSlice.reducer