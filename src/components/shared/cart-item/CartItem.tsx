import React from "react";
import { DEFAULT, GREEN } from "../../../const";
import { ButtonType } from "../../../interface";
import Button from "../button";
import EmptyImg from "../empty-img";
import BinIcon from "../icons/bin-icon";
import MinusIcon from "../icons/minus-icon";
import PlusIcon from "../icons/plus-icon";

import styles from "./index.module.css";

interface IProps {}

const CartItem: React.FC<IProps> = (props) => {

    const productIncrease = () => {

    };

    const productDecrease = () => {

    };

    const productRemove = () => {

    };

    return (
        <div className={styles.card}>
            <div className={styles.cardContent}>
                <div className={styles.product}>
                    <EmptyImg />
                    <div>
                        <div className={styles.row}>
                            <span className={styles.label}>Product</span>
                            <span className={styles.title}>Apple</span>
                        </div>
                        <div className={styles.row}>
                            <span className={styles.label}>Price</span>
                            <span className={styles.title}>3.00 $</span>
                        </div>
                        <div className={styles.row}>
                            <span className={styles.label}>Quantity</span>
                            <span className={styles.title}>1</span>
                        </div>
                    </div>
                </div>
                <div className={styles.controls}>
                    <Button
                        hasBorder={true}
                        onClick={productIncrease}
                        type={ButtonType.DEFAULT}
                        icon={<PlusIcon color={GREEN} width={1} height={1} />}
                    />
                    <Button
                        type={ButtonType.DEFAULT}
                        onClick={productDecrease}
                        hasBorder={true}
                        icon={<MinusIcon color={GREEN} width={1} height={1} />}
                    />
                </div>
            </div>
            <Button
                onClick={productRemove}
                type={ButtonType.DEFAULT}
                icon={<BinIcon color={DEFAULT} width={1.25} height={1.25} />}
            />
        </div>
    );
};

export default CartItem;
