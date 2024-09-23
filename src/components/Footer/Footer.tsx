import { ReactNode } from "react";
import styles from "./Footer.module.css";
const Footer = ({
  styleFooter,
  children,
}: {
  styleFooter: string;
  children: ReactNode;
}) => {
  return <footer className={styles[styleFooter]}>{children}</footer>;
};

export default Footer;
