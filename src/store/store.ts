import { combineReducers, configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reducers/cartSlice";
import dialogReducer from "./reducers/dialogSlice";

const rootReducer = combineReducers({
  cartReducer,
  dialogReducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  });
};

export type AppStateType = ReturnType<typeof rootReducer>;
export type AppStoreType = ReturnType<typeof setupStore>;
export type AppDispatchType = AppStoreType["dispatch"];
