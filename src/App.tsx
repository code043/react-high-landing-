import Form from "./components/Form/Form";
import Heading from "./components/Heading/Heading";
import Image from "./components/Image/Image";
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
    </div>
  );
}

export default App;
