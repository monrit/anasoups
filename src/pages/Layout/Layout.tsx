import { FC } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import styles from "./Layout.module.css";
import { Outlet } from "react-router-dom";

const Layout: FC = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
