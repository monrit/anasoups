import { FC } from "react";
import SoupCard from "../../components/SoupCard/SoupCard";
import { SOUPS } from "../../constants/soups";
import styles from "./MainPage.module.css";
import AlertDialog from "../../components/AlertDialog/AlertDialog";
import { useAppDispatch } from "../../hooks/redux";
import { cartSliceActions } from "../../store/reducers/cartSlice";
import OrderForm from "../../components/OrderForm/OrderForm";

const MainPage: FC = () => {
  const dispatch = useAppDispatch();
  const { openCart } = cartSliceActions;

  return (
    <>
      <div className={styles.container}>
        {SOUPS.map(soup => (
          <SoupCard
            key={soup.id}
            name={soup.name}
            grams={soup.grams}
            price={soup.price}
            image={soup.image}
            id={soup.id}
            description={soup.description}
          />
        ))}
      </div>
      <AlertDialog
        forCart
        title="Ви вже додали цю позицію до кошика, бажаєте перейти туди?"
        content="Там ви зможете змінити кількість кожної позиції та, безпосередньо, оформити замовлення."
        agreeText="До кошика!"
        disagreeText="Пізніше"
        handleAgree={() => dispatch(openCart())}
      />
      <OrderForm />
    </>
  );
};

export default MainPage;
