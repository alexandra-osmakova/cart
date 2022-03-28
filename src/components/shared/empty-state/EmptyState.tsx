import React from "react";

import styles from "./index.module.css";

const EmptyState: React.FC = () => {
    return (
        <div className={styles.emptyState}>
            <span>No data</span>
        </div>
    );
};

export default EmptyState;