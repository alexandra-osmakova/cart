import React from "react";
import { GREEN } from "../../../const";
import { ButtonType } from "../../../interface";
import Button from "../../shared/button";
import CartItem from "../../shared/cart-item";
import CartIcon from "../../shared/icons/cart-icon";
import PlusIcon from "../../shared/icons/plus-icon";

import styles from "./index.module.css";

interface IProps {}

const Cart: React.FC<IProps> = (props) => {
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
                            icon={
                                <PlusIcon color={GREEN} width={1} height={1} />
                            }
                        />
                        <Button
                            type={ButtonType.DEFAULT}
                            hasBorder={true}
                            label={"Checkout"}
                            icon={
                                <CartIcon color={GREEN} width={1} height={1} />
                            }
                        />
                        <span>Total: 123 $</span>
                    </div>
                </header>
                <div>
                    <CartItem />
                    <CartItem />
                </div>
            </div>
        </main>
    );
};

export default Cart;
