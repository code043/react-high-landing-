import styles from "./List.module.css";

const items = [
  {
    content: "",
  },
  {
    content: "",
  },
];
const AboutList = ({ styleList }: { styleList: string }) => {
  return (
    <ul style={{ margin: "20px" }} className={styles[styleList]}>
      {items.map((d, i) => {
        return <li key={i}>{d.content}</li>;
      })}
    </ul>
  );
};

export default AboutList;
