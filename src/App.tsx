import React from "react";
import Header from "./components/shared/header";
import Cart from "./components/views/cart";

import "./App.css";
import CommonDialog from "./components/shared/common-dialog";
import NewProductDialog from "./components/shared/new-product-dialog";
import { ButtonType } from "./interface";

function App() {
    const addNewProduct = () => {};

    return (
        <div className="App">
            <Header />
            <div className="page-wrap">
                <Cart />
            </div>
            <CommonDialog
                title={"Add new product"}
                content={<NewProductDialog />}
                successBtnLabel={"Add new"}
                successBtnType={ButtonType.SUBMIT}
                successOnClick={addNewProduct}
                cancelBtnLabel={"Cancel"}
            />
        </div>
    );
}

export default App;
