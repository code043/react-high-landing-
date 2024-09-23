import styles from "./Image.module.css";

const Image = ({
  styleImg,
  src,
  alt,
}: {
  styleImg: string;
  src: string;
  alt: string;
}) => {
  return <img className={styles[styleImg]} src={src} alt={alt} />;
};

export default Image;
