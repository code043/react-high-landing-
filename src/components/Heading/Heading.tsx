import styles from "./Heading.module.css";
type HeadingProps = {
  tag?: keyof JSX.IntrinsicElements;
  children: React.ReactNode;
  styleTitle: string;
  titleColor: string;
};

const Heading = ({
  tag: Tag = "h1",
  children,
  styleTitle,
  titleColor,
}: HeadingProps) => {
  return (
    <Tag style={{ color: titleColor }} className={styles[styleTitle]}>
      {children}
    </Tag>
  );
};

export default Heading;
