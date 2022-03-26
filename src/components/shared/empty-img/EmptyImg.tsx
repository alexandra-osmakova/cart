import React from "react";
import { GRAY } from "../../../const";
import CartIcon from "../icons/cart-icon";

import styles from "./index.module.css";

const EmptyImg: React.FC = () => {
    return (
        <div className={styles.icon}>
            <CartIcon color={GRAY} width={1.5} height={1.5} />
        </div>
    );
};

export default EmptyImg;
