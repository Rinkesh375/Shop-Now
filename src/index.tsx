import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from 'react-redux';
import { store } from "./Redux/store";
import {BrowserRouter} from "react-router-dom"
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ChakraProvider>
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
      
      <App />
      </BrowserRouter>
      </Provider>
     
    </React.StrictMode>
  </ChakraProvider>
);

reportWebVitals();
