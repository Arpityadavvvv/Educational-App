import React from "react";
import ReactDOM from "react-dom/client";
import { ToastContainer } from "react-toastify"; // yha se hume toastcontainer ko import krna pdta hai 
import 'react-toastify/dist/ReactToastify.css';
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

 <div>
    <App />
    <ToastContainer />     {/* we have to place this toastcontainer here with app.js */}
 </div>
 
);
