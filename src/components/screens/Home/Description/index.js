import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";
import styles from "./Description.module.sass";
import Image from "../../../components/Image";

const Description = () => {
  return (
    <div className={styles.section}>
      <div className={cn("container", styles.container)}>
        <div className={styles.wrap}>
          <h1 className={cn("h1", styles.title)}>
          Completely On-chain and public
          </h1>
          <div className={styles.text}>
            Everything is completely on-chain end-to-end.Trading and settlement happen automatically via smart contracts.
          </div>
        </div>
        <div className={styles.gallery}>
         
         
        </div>
      </div>
    </div>
  );
};

export default Description;
