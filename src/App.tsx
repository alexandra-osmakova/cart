import React from "react";
import Header from "./components/shared/header";
import Cart from "./components/views/cart";

import "./App.css";

function App() {
    return (
        <div className="App">
            <Header />
            <div className="page-wrap">
                <Cart />
            </div>
        </div>
    );
}

export default App;
