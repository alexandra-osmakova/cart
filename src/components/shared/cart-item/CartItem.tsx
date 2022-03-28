import React, { useCallback } from "react";
import { DEFAULT, GREEN } from "../../../const";
import { ButtonType, ICartData } from "../../../interface";
import { cartProductDeleteItemAction, cartProductQuantityUpdateAction } from "../../../redux/actions/cartActions";
import { useAppDispatch } from "../../../redux/hooks";
import Button from "../button";
import EmptyImg from "../empty-img";
import BinIcon from "../icons/bin-icon";
import MinusIcon from "../icons/minus-icon";
import PlusIcon from "../icons/plus-icon";

import styles from "./index.module.css";

const CartItem: React.FC<ICartData> = (props) => {
    const { id, name, price, quantity } = props;
    const dispatch = useAppDispatch();

    const onProductIncrease = useCallback(() => dispatch(cartProductQuantityUpdateAction(true, {id, name, price, quantity})), [dispatch, id, name, price, quantity]);
    const onProductDecrease = useCallback(() => dispatch(cartProductQuantityUpdateAction(false, {id, name, price, quantity})), [dispatch, id, name, price, quantity]);
    const onProductDelete = useCallback(() => dispatch(cartProductDeleteItemAction(id)), [dispatch, id]);

    return (
        <div className={styles.card}>
            <div className={styles.cardContent}>
                <div className={styles.product}>
                    <EmptyImg />
                    <div>
                        <div className={styles.row}>
                            <span className={styles.label}>Product</span>
                            <span className={styles.title}>{name}</span>
                        </div>
                        <div className={styles.row}>
                            <span className={styles.label}>Price</span>
                            <span className={styles.title}>{`${price} $`}</span>
                        </div>
                        <div className={styles.row}>
                            <span className={styles.label}>Quantity</span>
                            <span className={styles.title}>{quantity}</span>
                        </div>
                    </div>
                </div>
                <div className={styles.controls}>
                    <Button
                        hasBorder={true}
                        onClick={onProductIncrease}
                        type={ButtonType.DEFAULT}
                        icon={<PlusIcon color={GREEN} width={1} height={1} />}
                    />
                    <Button
                        type={ButtonType.DEFAULT}
                        disabled={quantity === 0}
                        onClick={onProductDecrease}
                        hasBorder={true}
                        icon={<MinusIcon color={GREEN} width={1} height={1} />}
                    />
                </div>
            </div>
            <Button
                onClick={onProductDelete}
                type={ButtonType.DEFAULT}
                icon={<BinIcon color={DEFAULT} width={1.25} height={1.25} />}
            />
        </div>
    );
};

export default CartItem;
