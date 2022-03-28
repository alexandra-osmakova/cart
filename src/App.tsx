import React from "react";
import Header from "./components/shared/header";
import Cart from "./components/views/cart";

import "./App.css";
import CommonDialog from "./components/shared/common-dialog";

function App() {
    return (
        <div className="App">
            <Header />
            <div className="page-wrap">
                <Cart />
            </div>
            <CommonDialog />
        </div>
    );
}

export default App;
