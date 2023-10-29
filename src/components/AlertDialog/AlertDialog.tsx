import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { dialogSliceActions } from "../../store/reducers/dialogSlice";
import styles from "./AlertDialog.module.css";

type AlertDialogPropsType = {
  title: string;
  content: string;
  handleAgree: () => void;
  disagreeText: string;
  agreeText: string;
  forCart?: boolean;
  forCartAll?: boolean;
};

const AlertDialog: FC<AlertDialogPropsType> = ({
  title,
  content,
  handleAgree,
  disagreeText,
  agreeText,
  forCart = false,
  forCartAll = false
}) => {
  const dispatch = useAppDispatch();
  const { closeDialog, closeCartDialog, closeCartAllDialog } = dialogSliceActions;
  const open = useAppSelector(store => store.dialogReducer.open);
  const cartOpen = useAppSelector(store => store.dialogReducer.cartDialogOpen);
  const cartAllOpen = useAppSelector(store => store.dialogReducer.cartAllDialogOpen);

  const handleClose = () => {
    dispatch(closeCartDialog());
    dispatch(closeDialog());
    dispatch(closeCartAllDialog());
  };

  return (
    <div>
      <Dialog
        open={forCart ? cartOpen : forCartAll ? cartAllOpen : open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">{content}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <button className={styles.disagree} onClick={handleClose}>
            {disagreeText}
          </button>
          <button
            className={styles.agree}
            onClick={() => {
              handleAgree();
              handleClose();
            }}
            autoFocus
          >
            {agreeText}
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default AlertDialog;
