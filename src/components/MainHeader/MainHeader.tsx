import Button from "../Button/Button";
import Header from "../Header/Header";
import Image from "../Image/Image";
import MenuList from "../List/MenuList";

const MainHeader = () => {
  return (
    <>
      <Header styleHeader="main-header">
        <div className="menu">
          <Image styleImg="logo" src="./images/LogoBlack.png" alt="logo" />
          <nav className="nav">
            <MenuList styleList="menu-list" />
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
