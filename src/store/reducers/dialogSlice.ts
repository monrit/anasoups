import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type DialogStateType = {
  open: boolean;
  id: number;
  cartDialogOpen: boolean;
  cartAllDialogOpen: boolean;
  formOpen: boolean;
};

const initialState: DialogStateType = {
  open: false,
  id: -1,
  cartDialogOpen: false,
  cartAllDialogOpen: false,
  formOpen: false
};

const dialogSlice = createSlice({
  name: "dialog",
  initialState,
  reducers: {
    openDialog(state, action: PayloadAction<number>) {
      state.open = true;
      state.id = action.payload;
    },
    closeDialog(state) {
      state.open = false;
    },
    openCartDialog(state) {
      state.cartDialogOpen = true;
    },
    closeCartDialog(state) {
      state.cartDialogOpen = false;
    },
    openCartAllDialog(state) {
      state.cartAllDialogOpen = true;
    },
    closeCartAllDialog(state) {
      state.cartAllDialogOpen = false;
    },
    openForm(state) {
      state.formOpen = true;
    },
    closeForm(state) {
      state.formOpen = false;
    }
  }
});

export const dialogSliceActions = dialogSlice.actions;

export default dialogSlice.reducer;
