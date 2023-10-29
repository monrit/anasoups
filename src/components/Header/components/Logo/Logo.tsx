import { FC } from "react";
import styles from "./Logo.module.css";
import { Link } from "react-router-dom";

const Logo: FC = () => {
  return (
    <Link to="/">
      <h1 className={styles.text}>
        Ana<span className={styles["text-second"]}>Soups</span>
      </h1>
      <h6 className={styles.subtext}>The best soups in Kharkiv</h6>
    </Link>
  );
};

export default Logo;
