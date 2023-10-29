import { Drawer } from "@mui/material";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import CartItem from "../CartItem/CartItem";
import styles from "./CartDrawer.module.css";
import { formatWeight } from "../../../../utils/formatWeigth";
import AlertDialog from "../../../AlertDialog/AlertDialog";
import { cartSliceActions } from "../../../../store/reducers/cartSlice";
import { dialogSliceActions } from "../../../../store/reducers/dialogSlice";

const CartDrawer: FC = () => {
  const open = useAppSelector(store => store.cartReducer.open);
  const cart = useAppSelector(store => store.cartReducer.items);
  const deletionId = useAppSelector(store => store.dialogReducer.id);
  const dispatch = useAppDispatch();
  const { deleteFromCart, closeCart, clearCart } = cartSliceActions;
  const { openCartAllDialog, openForm } = dialogSliceActions;

  const weight: number = cart.reduce((accum, item) => accum + item.amount * item.grams, 0);
  return (
    <Drawer anchor={"right"} open={open} onClose={() => dispatch(closeCart())}>
      <div className={styles.container}>
        {cart.map((item, index) => (
          <CartItem
            key={index}
            id={item.id}
            amount={item.amount}
            name={item.name}
            image={item.image}
            price={item.price}
          />
        ))}
        {cart.length === 0 ? (
          <h1 className={styles.text}>Ваш кошик порожній</h1>
        ) : (
          <>
            <h2 className={styles.weight}>
              Загальна вага: {weight >= 1000 ? formatWeight(weight) : weight + " грам"}
            </h2>
            <h1 className={styles.price}>
              Загальна вартість: {cart.reduce((accum, item) => accum + item.amount * item.price, 0)}
              $
            </h1>
            <h2 className={styles.clear}>
              Також можете{" "}
              <span className={styles["clear-btn"]} onClick={() => dispatch(openCartAllDialog())}>
                очистити
              </span>{" "}
              кошик
            </h2>
          </>
        )}
        <button
          className={styles.button}
          disabled={cart.length === 0}
          onClick={() => dispatch(openForm())}
        >
          Замовити
        </button>
      </div>
      <AlertDialog
        title="Ви впевнені що хочете прибрати цей товар з кошика?"
        content="Його знову можна буде додати на головній сторінці."
        agreeText="Прибрати"
        disagreeText="Відмінити"
        handleAgree={() => dispatch(deleteFromCart(deletionId))}
      />
      <AlertDialog
        forCartAll
        title="Ви впевнені що хочете очистити кошик?"
        content="Ваш вибір позицій буде втрачено і щоб його повернути, Вам потрібно буде збирати його з нуля."
        agreeText="Очистити"
        disagreeText="Відмінити"
        handleAgree={() => dispatch(dispatch(clearCart()))}
      />
    </Drawer>
  );
};

export default CartDrawer;
