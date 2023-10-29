import { FC } from "react";
import styles from "./ErrorPage.module.css";
import { Link } from "react-router-dom";

const ErrorPage: FC = () => {
  return (
    <h1 className={styles.text}>
      {"Упс! Такої сторіночки у нас немає 404:) Повернутись на "}
      <Link className={styles.link} to="/">головну</Link>
    </h1>
  );
};

export default ErrorPage;
