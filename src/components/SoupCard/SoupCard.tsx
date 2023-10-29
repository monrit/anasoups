import { FC } from "react";
import { SoupType } from "../../types/types";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { addIfNoneThunk } from "../../store/reducers/cartSlice";
import styles from "./SoupCard.module.css";

type SoupCardPropsType = SoupType;

const SoupCard: FC<SoupCardPropsType> = ({ image, name, price, grams, id, description }) => {
  const cart = useAppSelector(store => store.cartReducer.items);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.container}>
      <div>
        <div>
          <div className={styles.recipe}>
            {description}
          </div>
          <img className={styles.image} src={image} alt={name} />
        </div>
        <h1 className={styles.name}>{name}</h1>
      </div>
      <div>
        <div className={styles["prev-price"]}>
          {Math.floor(price * 1.33)}$
        </div>
        <div className={styles["price-container"]}>
          <span className={styles["price-line"]}></span>
          <div className={styles.price}>
            {price}$<span className={styles.grams}>{grams}г</span>
          </div>
          <span className={styles["price-line"]}></span>
        </div>
      </div>

      <button
        className={styles.button}
        onClick={() => dispatch(addIfNoneThunk(id))}
      >
        До кошика {cart.find(soup => soup.id === id) ? "✓" : ""}
      </button>
    </div>
  );
};

export default SoupCard;
