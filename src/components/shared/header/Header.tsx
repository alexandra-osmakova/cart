import React from "react";
import { WHITE } from "../../../const";
import CartIcon from "../icons/cart-icon";
import styles from "./index.module.css";

interface IProps {    }

const Header: React.FC<IProps> = (props) => {

    return (
        <header className={styles.header}>
            <span className={styles.logo}>Cool Company</span>
            <nav className={styles.navigation}>
                <ul>
                    <li className={styles.cart}>
                        <span>My Cart</span>
                        <CartIcon color={WHITE}  width={1} height={1}/>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;