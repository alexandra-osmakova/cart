import React from "react";
import Input from "../input";

import styles from "./index.module.css";

const NewProductDialog: React.FC = () => {
    return (
        <div className={styles.content}>
            <Input label={"Product name"} required={true} type={"text"} />
            <Input label={"Product price"} required={true} type={"number"} />
            <Input label={"Product quantity"} required={true} type={"number"} />
        </div>
    );
};

export default NewProductDialog;
