import React, { useCallback, useEffect } from "react";
import { ADD_CART_PRODUCT_DIALOG, GREEN } from "../../../const";
import { ButtonType, ICartData } from "../../../interface";
import { cartProductLoadDataAction } from "../../../redux/actions";

import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { commonDialogToggleAction } from "../../../redux/reducers";
import Button from "../../shared/button";
import CartItem from "../../shared/cart-item";
import CheckoutDialog from "../../shared/checkout-dialog";
import EmptyState from "../../shared/empty-state";
import CartIcon from "../../shared/icons/cart-icon";
import PlusIcon from "../../shared/icons/plus-icon";
import LoadingState from "../../shared/loading-state";
import NewProductDialog from "../../shared/new-product-dialog";

import styles from "./index.module.css";

const Cart: React.FC = () => {
    const dispatch = useAppDispatch();
    const isLoaded: boolean = useAppSelector((state) => state.cart.loaded);
    const total: number = useAppSelector((state) => state.cart.cartTotal);
    const cartData: Map<number, ICartData> = useAppSelector(
        (state) => state.cart.cartData
    );

    const onCheckoutRedirect = useCallback(
        () => dispatch(commonDialogToggleAction({ dialogSettings: null })),
        [dispatch]
    );

    const onDialogToggle = useCallback(
        () =>
            dispatch(
                commonDialogToggleAction({
                    dialogSettings: {
                        title: "Add new product",
                        successBtnLabel: "Add new",
                        successBtnType: ButtonType.SUBMIT,
                        cancelBtnLabel: "Cancel",
                        formId: ADD_CART_PRODUCT_DIALOG,
                        content: <NewProductDialog />,
                    },
                })
            ),
        [dispatch]
    );

    const onCheckout = useCallback(
        () =>
            dispatch(
                commonDialogToggleAction({
                    dialogSettings: {
                        title: "Checkout",
                        successBtnLabel: "Ok",
                        successBtnType: ButtonType.DEFAULT,
                        cancelBtnLabel: "Cancel",
                        content: <CheckoutDialog />,
                        successOnClick: onCheckoutRedirect,
                        isValid: true,
                    },
                })
            ),
        [dispatch, onCheckoutRedirect]
    );

    useEffect(() => {
        if (!isLoaded) {
            dispatch(cartProductLoadDataAction());
        }

        return () => {};
    }, [isLoaded, dispatch]);

    return (
        <main className="page-content">
            <div className={styles.card}>
                <header className="page-header">
                    <h2>Shopping Cart</h2>
                    <div className={styles.controls}>
                        <Button
                            type={ButtonType.DEFAULT}
                            hasBorder={true}
                            label={"Add new"}
                            onClick={onDialogToggle}
                            icon={
                                <PlusIcon color={GREEN} width={1} height={1} />
                            }
                        />
                        <Button
                            type={ButtonType.DEFAULT}
                            hasBorder={true}
                            label={"Checkout"}
                            onClick={onCheckout}
                            icon={
                                <CartIcon color={GREEN} width={1} height={1} />
                            }
                        />
                        <span>Total: {total} $</span>
                    </div>
                </header>
                {isLoaded ? (
                    cartData && cartData.size !== 0 ? (
                        Array.from(cartData.values()).map((item) => (
                            <CartItem
                                key={item.id}
                                id={item.id}
                                name={item.name}
                                price={item.price}
                                quantity={item.quantity}
                            />
                        ))
                    ) : (
                        <EmptyState />
                    )
                ) : (
                    <LoadingState />
                )}
            </div>
        </main>
    );
};

export default Cart;
