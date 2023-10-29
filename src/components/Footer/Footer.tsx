import { FC } from "react";
import styles from "./Footer.module.css";

const Footer: FC = () => {
  return (
    <footer className={styles.footer}>
      <h1 className={styles.rights}>AnaSoups™ all rights reserved</h1>
      <h2 className={styles.copyright}>2023 Copyright ©</h2>
    </footer>
  );
};

export default Footer;
