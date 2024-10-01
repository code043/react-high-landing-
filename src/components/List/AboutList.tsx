import List from "./List";

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
    <List
      styleList={styleList}
      items={items}
      renderItem={(item) => <div>{item.content}</div>}
    />
  );
};

export default AboutList;
