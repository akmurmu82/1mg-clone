import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    user: null
    // {
    //     _id: "", // Add _id field to match MongoDB document structure
    //     name: "",
    //     email: "",
    //     password: "", // This will typically be omitted on the frontend for security reasons
    //     profilePic: "",
    //     products: [], // Array of product IDs
    // }
    ,
    isAuthenticated: false, // Authentication flag
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        clearUser: (state) => {
            state.user = null;
        }
    }
})

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;