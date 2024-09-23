import { useState } from "react";
import styles from "./Input.module.css";
type InputProp = {
  type: string;
  placeholder: string;
  styleInput: string;
};

const Input = ({ type, placeholder, styleInput }: InputProp) => {
  const [value, setValue] = useState("");
  return (
    <input
      className={styles[styleInput]}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default Input;
