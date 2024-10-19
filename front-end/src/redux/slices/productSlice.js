import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    products: []
    // {
    //     "_id": "670e3569762456f6b76a8fc7",
    //     "name": "Swisse Beauty Vegan Collagen Builder",
    //     "imageUrl": "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/mp9qoget2jwnf7u6tjj9.jpg",
    //     "packageInfo": "bottle of 30.0 tablets",
    //     "delivery": "Delivery by 7pm, Today",
    //     "mrp": 1299,
    //     "discountPercentage": 20,
    //     "discountedPrice": 1039
    // }
    ,
    isAuthenticated: false, // Authentication flag
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addProduct: (state, action) => {
            state.products.push(action.payload);
        },
        updateProduct: (state, action) => {
            const index = state.products.findIndex(
                (product) => product.id === action.payload.id
            );
            if (index !== -1) {
                state.products[index] = action.payload;
            }
        },
        deleteProduct: (state, action) => {
            state.products = state.products.filter(
                (product) => product.id !== action.payload
            );
        },
    }
})

export const { addProduct, updateProduct, deleteProduct } = productSlice.actions;
export default productSlice.reducer;