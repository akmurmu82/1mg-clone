import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
// import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Provider } from 'react-redux';


import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import { ModalProvider } from "./utils/ModalContext.jsx";
import { persistor, store } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <Provider store={store}>
          <PersistGate loading={false} persistor={persistor}>
            <ModalProvider>
              <App />
            </ModalProvider>
          </PersistGate>
        </Provider>
      </BrowserRouter>
    </ChakraProvider>
  </StrictMode>
);
