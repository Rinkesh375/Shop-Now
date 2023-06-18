import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import {BrowserRouter} from "react-router-dom"
import { Provider } from "react-redux";
import { store } from "./Redux/store";
import AuthProvider from "./context/Authcontext";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ChakraProvider>
   
      <BrowserRouter>
      <Provider store={store}>
      <AuthProvider>
        <App />
        </AuthProvider>
      </Provider>
      </BrowserRouter>
      
    
  </ChakraProvider>
);

reportWebVitals();
