import { useState } from "react";
import Button from "../Button/Button";
import Header from "../Header/Header";
import Image from "../Image/Image";
import List from "../List/List";

const MainHeader = () => {
  const data = ["About Us", "How it Works", "Pricing", "FAQs"];
  const [links] = useState(data);
  return (
    <>
      <Header styleHeader="main-header">
        <div className="menu">
          <Image styleImg="logo" src="./images/LogoBlack.png" alt="logo" />
          <nav className="nav">
            <List styleList="" list={links} />
          </nav>
        </div>
        <div className="header-buttons">
          <Button styleBtn="login" text="Login" />
          <Button styleBtn="signup" text="Sign Up" />
        </div>
      </Header>
    </>
  );
};

export default MainHeader;
