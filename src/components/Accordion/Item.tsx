type ItemProp = {
  id: number;
  question: string;
  awnser: string;
};
export type PropId = {
  event: any;
};
const Item = ({ item }: { item: ItemProp }) => {
  return (
    <>
      <div id={String(item.id)}>{item.question}</div>
      <p>{item.awnser}</p>
    </>
  );
};

export default Item;
