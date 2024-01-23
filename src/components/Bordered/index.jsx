import React from "react";
import styles from "./bordered.module.css";

const Bordered = ({ children }) => {
	return <div className={styles.container}>{children}</div>;
};

export default Bordered;
