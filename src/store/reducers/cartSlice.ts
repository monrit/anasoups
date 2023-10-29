import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { SoupType } from "../../types/types";
import { SOUPS } from "../../constants/soups";
import { CARTWITHTIME } from "../../constants/localStorageItems";
import { getItemsWithTime, setItemWithTime } from "../../utils/localStorage";
import { AppStateType } from "../store";
import { dialogSliceActions } from "./dialogSlice";

type CartStateType = {
  items: Array<SoupType & { amount: number }>;
  open: boolean;
};

const cartObj = getItemsWithTime(CARTWITHTIME);

const initialState: CartStateType = {
  items: cartObj ? cartObj : [],
  open: false
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<number>) {
      const soup = SOUPS.find(soup => soup.id === action.payload);
      if (soup) {
        if (state.items.find(soup => soup.id === action.payload)) {
          state.items.forEach(soup => {
            if (soup.id === action.payload) {
              soup.amount += 1;
            }
          });
        } else {
          state.items.push({ ...soup, amount: 1 });
        }
      }

      setItemWithTime(CARTWITHTIME, state.items);
    },
    deleteFromCart(state, action: PayloadAction<number>) {
      state.items = state.items.filter(item => item.id !== action.payload);

      if (state.items.length === 0) {
        localStorage.removeItem(CARTWITHTIME);
      } else {
        setItemWithTime(CARTWITHTIME, state.items);
      }
    },
    deleteOne(state, action: PayloadAction<number>) {
      const entry = state.items.find(item => item.id === action.payload);
      if (entry && entry.amount > 1) {
        entry.amount -= 1;
        setItemWithTime(CARTWITHTIME, state.items);
      }
    },
    openCart(state) {
      state.open = true;
    },
    closeCart(state) {
      state.open = false;
    },
    clearCart(store) {
      store.items = [];
      localStorage.removeItem(CARTWITHTIME);
    }
  }
});

const { openCartDialog } = dialogSliceActions;

export const addIfNoneThunk = createAsyncThunk(
  "cart/addIfNone",
  async (soupId: number, { dispatch, getState }) => {
    const state: AppStateType = getState() as AppStateType;
    const soup = state.cartReducer.items.find(soup => soup.id === soupId);
    if (!soup) {
      dispatch(cartSlice.actions.addToCart(soupId));
    } else {
      dispatch(openCartDialog());
    }
  }
);

export const cartSliceActions = cartSlice.actions;

export default cartSlice.reducer;
