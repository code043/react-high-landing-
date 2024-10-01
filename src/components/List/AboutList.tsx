import List from "./List";

const items = [
  {
    content: "Shared Cloud Libraries, for a single source of truth",
  },
  {
    content: "Prototype previews for user testing and research",
  },
  {
    content: "Easy organization with projects",
  },
  {
    content: "Free developer handoff, right inside the browser",
  },
  {
    content: "Two-factor authentication and SSO",
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
