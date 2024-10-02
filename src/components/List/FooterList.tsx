import List from "./List";

const data = [
  "Lead generation",
  "Customer engagement",
  "Customer support",
  "Help Center Articles",
  "Outbound Messages",
];

export const FooterList = () => {
  return (
    <List
      styleList=""
      items={data}
      renderItem={(item: string) => <a href={`/#`}>{item}</a>}
    ></List>
  );
};
