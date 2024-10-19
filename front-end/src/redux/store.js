
import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./slices/userSlice"
import productReducer from "./slices/productSlice"
import { combineReducers } from "redux"
import { persistReducer, persistStore } from "redux-persist"
import storage from "redux-persist/lib/storage"

const persistConfig = {
    key: "root",
    storage
}

const rootReducers = combineReducers({
    user: userReducer,
    product: productReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducers)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }) // This is needed to avoid issues with non-serializable data in redux-persist

})

const persistor = persistStore(store)

export { persistor, store }