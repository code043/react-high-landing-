import List from "./List";

const data = ["About Us", "How it Works", "Pricing", "FAQs"];

const MenuList = ({ styleList }: { styleList: string }) => {
  return (
    <List
      styleList={styleList}
      items={data}
      renderItem={(item: string) => (
        <a href={`/${item.toLowerCase()}`}>{item}</a>
      )}
    />
  );
};

export default MenuList;
