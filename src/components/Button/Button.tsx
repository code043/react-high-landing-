import styles from "./Button.module.css";

const Button = ({ styleBtn, text }: { styleBtn: string; text: string }) => {
  return <button className={styles[styleBtn]}>{text}</button>;
};

export default Button;
