import React from "react";

import styles from "./index.module.css";

interface IProps {
    children: JSX.Element;
}

const Overlay: React.FC<IProps> = (props) => {
    const { children } = props;

    return <div className={styles.overlay}>{children}</div>;
};

export default Overlay;
