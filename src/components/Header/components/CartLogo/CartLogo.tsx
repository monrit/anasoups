import { Badge, IconButton, ThemeProvider, createTheme } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hooks/redux";
import styles from "./CartLogo.module.css";
import { cartSliceActions } from "../../../../store/reducers/cartSlice";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#EC4899"
    }
  }
});

const CartLogo: FC = () => {
  const cart = useAppSelector(store => store.cartReducer.items);
  const dispatch = useAppDispatch();
  const { openCart } = cartSliceActions;
  
  return (
    <div className={styles.container}>
      <ThemeProvider theme={theme}>
        <IconButton className={styles.button} onClick={() => dispatch(openCart())}>
          <Badge
            badgeContent={cart.reduce((accum, item) => accum + item.amount, 0)}
            color="secondary"
          >
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </ThemeProvider>
    </div>
  );
};

export default CartLogo;
