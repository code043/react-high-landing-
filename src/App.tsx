import Button from "./components/Button/Button";
import Form from "./components/Form/Form";
import Heading from "./components/Heading/Heading";
import Image from "./components/Image/Image";
import AboutList from "./components/List/AboutList";
import MainHeader from "./components/MainHeader/MainHeader";
import "./global.css";

function App() {
  return (
    <div className="container">
      <MainHeader />
      <section className="hero">
        <div className="hero-content">
          <div>
            <Heading styleTitle="main-title" titleColor="#151515">
              Always Track & Analyze Your Business Statistics To Succeed.
            </Heading>
            <Heading tag="h6" styleTitle="main-subtitle" titleColor="#151515">
              A better way to manage your sales, team, clients & marketing — on
              a single platform. Powerful, affordable & easy.
            </Heading>
          </div>

          <Form />
          <Image styleImg="cards" src="./images/cards.png" alt="cards" />
        </div>
        <div>
          <Image styleImg="hero-image" src="./images/Group.png" alt={""} />
        </div>
      </section>
      <section className="about-section">
        <Image styleImg="" src="./images/Illustration.png" alt="image" />
        <div>
          <Button styleBtn="about-btn" text="About us" />
          <Heading styleTitle={""} titleColor={""}>
            Faster, friendlier feedback loops make life easier.{" "}
          </Heading>
          <p>
            Add a Viewer to your team so they can see everything you share, or
            invite people to individual documents. It’s up to you. Stakeholders
            can check out designs in their web browser, test prototypes and
            leave feedback for free.
          </p>
          <AboutList styleList="" />
        </div>
      </section>
      <section className="how-works-section"></section>
    </div>
  );
}

export default App;
