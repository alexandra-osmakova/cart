import React from "react";

import styles from "./index.module.css";

interface IProps {    }

const Cart: React.FC<IProps> = (props) => {

    return (
        <main className="page-content">
            <div className={styles.card}>
                <h2 className="page-title">Shopping Cart</h2>
            </div>
        </main>
    );
};

export default Cart;