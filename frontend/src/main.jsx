import ReactDOM from "react-dom/client";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthProvider from "./context/AuthContext.jsx";
import { Provider } from "react-redux";
import store from './redux/store.jsx'

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <AuthProvider>
       <App />
    </AuthProvider>
  </Provider>,
);
