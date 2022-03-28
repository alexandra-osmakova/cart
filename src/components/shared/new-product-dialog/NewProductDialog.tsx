import React, { useEffect } from "react";
import { ADD_CART_PRODUCT_DIALOG } from "../../../const";
import { cartProductFormSubmitAction } from "../../../redux/actions/cartActions";
import { commonDialogValidationToggleAction } from "../../../redux/actions/commonDialogAction";
import { useAppDispatch } from "../../../redux/hooks";
import Input from "../input";

import styles from "./index.module.css";
import { useProductDialog } from "./useProductDialog";

const NewProductDialog: React.FC = () => {
    const dispatch = useAppDispatch();
    const {
        productName,
        productPrice,
        productQuantity,
        isFormValid,
        onProductNameChange,
        onProductPriceChange,
        onProductQuantityChange,
    } = useProductDialog();

    const onFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(
            cartProductFormSubmitAction({
                name: productName,
                price: productPrice,
                quantity: productQuantity,
            })
        );
    };

    useEffect(() => {
        dispatch(commonDialogValidationToggleAction(isFormValid));
    }, [isFormValid, dispatch]);

    return (
        <form
            id={ADD_CART_PRODUCT_DIALOG}
            onSubmit={onFormSubmit}
            className={styles.content}>
            <Input
                value={productName}
                placeholder={"Enter product name"}
                onChange={onProductNameChange}
                label={"Product name"}
                required={true}
                type={"text"}
            />
            <Input
                value={productPrice}
                onChange={onProductPriceChange}
                label={"Product price"}
                required={true}
                type={"number"}
            />
            <Input
                value={productQuantity}
                placeholder={"Enter product quantity"}
                onChange={onProductQuantityChange}
                label={"Product quantity"}
                required={true}
                type={"number"}
            />
        </form>
    );
};

export default NewProductDialog;

