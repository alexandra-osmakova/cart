import React from "react";

import styles from "./index.module.css";

const LoadingState: React.FC = () => {
    return (
        <div className={styles.loadingState}>
            <span>Loading...</span>
        </div>
    );
};

export default LoadingState;