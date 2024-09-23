import { ReactNode } from "react";
import styles from "./Header.module.css";
const Header = ({
  styleHeader,
  children,
}: {
  styleHeader: string;
  children: ReactNode;
}) => {
  return <header className={styles[styleHeader]}>{children}</header>;
};

export default Header;
