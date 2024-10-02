import Button from "./components/Button/Button";
import Footer from "./components/Footer/Footer";
import Form from "./components/Form/Form";
import Heading from "./components/Heading/Heading";
import Image from "./components/Image/Image";
import AboutList from "./components/List/AboutList";
import { FooterList } from "./components/List/FooterList";
import MenuList from "./components/List/MenuList";
import MainHeader from "./components/MainHeader/MainHeader";
import "./global.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="page">
          <MainHeader />
          <section className="hero">
            <div className="hero-content">
              <div>
                <Heading styleTitle="main-title" titleColor="#151515">
                  Always Track & Analyze Your Business Statistics To Succeed.
                </Heading>
                <Heading
                  tag="h6"
                  styleTitle="main-subtitle"
                  titleColor="#151515"
                >
                  A better way to manage your sales, team, clients & marketing —
                  on a single platform. Powerful, affordable & easy.
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
              <Button styleBtn="btn-02" text="About us" />
              <Heading styleTitle={""} titleColor={""}>
                Faster, friendlier feedback loops make life easier.
              </Heading>
              <p>
                Add a Viewer to your team so they can see everything you share,
                or invite people to individual documents. It’s up to you.
                Stakeholders can check out designs in their web browser, test
                prototypes and leave feedback for free.
              </p>
              <AboutList styleList="about-list" />
            </div>
          </section>
          <section className="how-works-section">
            <div>
              <Button styleBtn="btn-02" text="HOW IT WORKS"></Button>
              <Heading styleTitle={""} titleColor={""}>
                Building the best space for collaboration.
              </Heading>
              <div style={{ display: "flex" }}>
                <Image styleImg={""} src="./images/icon.png" alt="" />
                <div>
                  <Heading styleTitle={""} titleColor={""}>
                    Shared Cloud Libraries
                  </Heading>
                  <p>
                    Navigate to the Your work panel in the left sidebar. Select
                    the library you want to share. Select the Share icon in the
                    upper right to share the library.
                  </p>
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <Image styleImg={""} src="./images/icon_2.png" alt="" />
                <div>
                  <Heading styleTitle={""} titleColor={""}>
                    Free developer handoff, right inside
                  </Heading>
                  <p>
                    Cloud Inspector makes it easy for developers to get the
                    information they need to turn pixels into code — all in the
                    browser and, most importantly, for free.
                  </p>
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <Image styleImg={""} src="./images/icon_3.png" alt="" />
                <div>
                  <Heading styleTitle={""} titleColor={""}>
                    Real-time collaborative editing
                  </Heading>
                  <p>
                    Room Service helps you build real-time collaborative
                    features. Add real-time data sync! Let users edit the same
                    data at the same time.
                  </p>
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <Image styleImg={""} src="./images/icon_4.png" alt="" />
                <div>
                  <Heading styleTitle={""} titleColor={""}>
                    Integrations with the Cloud API
                  </Heading>
                  <p>
                    Unlocking that value requires an iPaaS that delivers the
                    transformative power of APIs and integration.
                  </p>
                </div>
              </div>
            </div>
            <Image styleImg={""} src="./images/Illustration_3.png" alt={""} />
          </section>
          <section className="price-section">
            <div style={{ display: "flex" }}>
              <Image styleImg={""} src="./images/Illustration_4.png" alt={""} />
              <div className="title-price">
                <Button styleBtn="btn-02" text="pricing" />
                <Heading styleTitle={""} titleColor={""}>
                  Select a membership level the right price for you.
                </Heading>
                <p>
                  Prices listed in USD. Taxes may apply. By using program you
                  agree to our terms and policies.
                </p>
              </div>
            </div>
            <div className="price-table">prices section</div>
          </section>
          <section className="question-section">
            <div className="questions">
              <Button styleBtn="btn-02" text="FAQS" />
              <Heading styleTitle={""} titleColor={""}>
                Common Questions
              </Heading>
              <p>
                The online form also provides links to a set of frequently asked
                questions, other information materials related to the financial
                disclosure programme.
              </p>
              <Heading styleTitle={""} titleColor={""}>
                How much does a Teams subscription cost?
              </Heading>
              <p>
                Contributors are members of your team who need access to use the
                Mac app to create and edit Sketch documents. These prices don’t
                include sales tax, which may still apply. Head over to our
                pricing page to get full details.
              </p>
              Accordion List Component
            </div>
            <Image styleImg={""} src="./images/Illustration_5.png" alt={""} />
          </section>
        </div>
      </div>
      <Footer styleFooter="footer">
        <div className="footer-content">
          <div>
            <Image styleImg={""} src="./images/LogoBlack.png" alt={""} />
            <Heading styleTitle={""} titleColor={""}>
              Want to recieve our awesome stories?
            </Heading>
            <Form />
          </div>
          <div style={{ display: "flex" }}>
            <div>
              <h2>Email</h2>
              <p>email.infor@email.com</p>
            </div>
            <div>
              <MenuList styleList="footer-menu" />
            </div>
            <div>
              <FooterList />
            </div>
          </div>
        </div>
      </Footer>
    </>
  );
}

export default App;
