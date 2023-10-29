import { FC, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { dialogSliceActions } from "../../store/reducers/dialogSlice";
import { cartSliceActions } from "../../store/reducers/cartSlice";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormInputsType } from "../../types/types";
import styles from "./OrderForm.module.css";
import { formValidaton } from "./validations";

const OrderForm: FC = () => {
  const open = useAppSelector(store => store.dialogReducer.formOpen);
  const { closeCart, clearCart } = cartSliceActions;
  const { closeForm } = dialogSliceActions;
  const dispatch = useAppDispatch();

  const handleClose = () => {
    dispatch(closeForm());
  };

  const {
    handleSubmit,
    register,
    reset,
    formState: { isValid, errors },
    watch,
    setValue
  } = useForm<FormInputsType>({
    mode: "onBlur"
  });

  const number = watch("number", "+380");

  useEffect(() => {
    if (!number.startsWith("+380")) {
      setValue("number", `+380${number.slice(4)}`);
    }
  }, [number, setValue]);

  const onSubmit: SubmitHandler<FormInputsType> = data => {
    console.log(data);
    dispatch(clearCart());
    reset();
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Введіть ваші дані: </DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.fields}>
              <div className={styles.field}>
                <TextField
                  variant="standard"
                  label="Ваше ім'я"
                  {...register("name", formValidaton.name)}
                />
                {errors.name && <span className={styles.error}>{errors.name.message}</span>}
              </div>
              <div className={styles.field}>
                <TextField
                  variant="standard"
                  label="Номер телефону"
                  {...register("number", formValidaton.number)}
                  defaultValue="+380"
                />
                {errors.number && <span className={styles.error}>{errors.number.message}</span>}
              </div>
            </div>
            <DialogActions>
              <div className={styles.buttons}>
                <button className={styles.cancel} onClick={handleClose}>
                  Відмінити
                </button>
                <button
                  type="submit"
                  className={styles.submit}
                  onClick={() => {
                    handleClose();
                    dispatch(closeCart());
                  }}
                  disabled={!isValid}
                >
                  Замовити
                </button>
              </div>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default OrderForm;
