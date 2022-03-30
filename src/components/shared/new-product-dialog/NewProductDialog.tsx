import React, { useEffect } from "react";
import { ADD_CART_PRODUCT_DIALOG } from "../../../const";
import { cartProductFormSubmitAction } from "../../../redux/actions";
import { useAppDispatch } from "../../../redux/hooks";
import { commonDialogValidationToggleAction } from "../../../redux/reducers";
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
        dispatch(commonDialogValidationToggleAction({ valid: isFormValid }));
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
                minLength={3}
            />
            <Input
                value={productPrice}
                onChange={onProductPriceChange}
                label={"Product price"}
                required={true}
                type={"number"}
                min={0}
            />
            <Input
                value={productQuantity}
                placeholder={"Enter product quantity"}
                onChange={onProductQuantityChange}
                label={"Product quantity"}
                required={true}
                type={"number"}
                min={0}
            />
        </form>
    );
};

export default NewProductDialog;
