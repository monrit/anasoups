import { FC } from "react";
import styles from "./CartItem.module.css";
import { Avatar } from "@mui/material";
import { SoupType } from "../../../../types/types";
import { useAppDispatch } from "../../../../hooks/redux";
import { cartSliceActions } from "../../../../store/reducers/cartSlice";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { dialogSliceActions } from "../../../../store/reducers/dialogSlice";

type CartItemPropsType = Pick<SoupType, "name" | "image" | "id" | "price"> & { amount: number };

const CartItem: FC<CartItemPropsType> = ({ name, image, amount, id, price }) => {
  const dispatch = useAppDispatch();
  const { addToCart, deleteOne } = cartSliceActions;
  const { openDialog } = dialogSliceActions;

  return (
    <>
      <div className={styles.container}>
        <Avatar variant="rounded" alt={name} src={image} sx={{ width: 64, height: 64 }}>
          {name.slice(0, 1)}
        </Avatar>
        <span className={styles.name}>
          {name} <span className={styles.amount}>{"x" + amount}</span>
        </span>
        <div>
          <div
            className={styles["delete-button"]}
            title="Прибрати з кошика"
            onClick={() => dispatch(openDialog(id))}
          >
            X
          </div>
          <div className={styles.total}>{amount * price}$</div>
        </div>
      </div>
      <div className={styles["button-container"]}>
        <button
          className={styles.button}
          onClick={() => dispatch(deleteOne(id))}
          disabled={amount === 1}
        >
          <RemoveIcon />
        </button>
        <span className={styles.amount}>{amount}</span>
        <button className={styles.button} onClick={() => dispatch(addToCart(id))}>
          <AddIcon />
        </button>
      </div>
    </>
  );
};

export default CartItem;
