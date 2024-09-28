import styles from "./List.module.css";

const data = ["About Us", "How it Works", "Pricing", "FAQs"];

const Menulist = ({ styleList }: { styleList: string }) => {
  return (
    <ul style={{ margin: "20px" }} className={styles[styleList]}>
      {data.map((d, i) => {
        return <li key={i}>{d}</li>;
      })}
    </ul>
  );
};

export default Menulist;
