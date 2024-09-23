import { useState } from "react";
import Item from "./Item";

const Accordion = () => {
  const dados = [
    {
      id: 1,
      question: "question",
      awnser: "awnser",
    },
    {
      id: 2,
      question: "question2",
      awnser: "awnser2",
    },
  ];
  const [items] = useState(dados);
  return (
    <div>
      {items.map((item) => {
        return <Item key={item.id} item={item} />;
      })}
    </div>
  );
};

export default Accordion;
