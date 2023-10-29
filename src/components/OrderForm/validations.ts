import { RegisterOptions } from "react-hook-form";
import { FormInputsType } from "../../types/types";

type FormValidationType = Record<keyof FormInputsType, RegisterOptions>;

export const formValidaton: FormValidationType = {
  name: {
    required: "Потрібно вказати ім'я",
    minLength: {
      value: 2,
      message: "Занадто коротке ім'я"
    },
    maxLength: {
      value: 34,
      message: "Занадто довге ім'я"
    }
  },
  number: {
    required: "Потрібно вказати номер",
    pattern: { value: /^(?:\+380|380)?\d{9}$/, message: "Ви ввели невірний номер" }
  }
};
