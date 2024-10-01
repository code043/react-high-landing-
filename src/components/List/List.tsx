import styles from "./List.module.css";

type Props<T> = {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  styleList: string;
};
const List = <T,>({ items, renderItem, styleList }: Props<T>) => {
  return (
    <ul className={styles[styleList]}>
      {items.map((item, index: number) => (
        <li key={index}>{renderItem(item)}</li>
      ))}
    </ul>
  );
};
export default List;
