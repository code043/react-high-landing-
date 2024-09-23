import { useState } from "react";
import styles from "./List.module.css";

const List = ({ styleList, list }: { styleList: string; list: string[] }) => {
  const [data] = useState(list);
  return (
    <ul style={{ margin: "20px" }} className={styles[styleList]}>
      {data.map((d, i) => {
        return <li key={i}>{d}</li>;
      })}
    </ul>
  );
};

export default List;
