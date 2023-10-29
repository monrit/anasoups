import { FC } from "react";
import Logo from "./components/Logo/Logo";
import CartLogo from "./components/CartLogo/CartLogo";
import CartDrawer from "./components/CartDrawer/CartDrawer";
import styles from "./Header.module.css";

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <CartLogo />
      </div>
      <div className={styles.divider}></div>
      <CartDrawer />
    </header>
  );
};

export default Header;
