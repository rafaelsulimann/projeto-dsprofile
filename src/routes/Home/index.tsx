import DevInfos from "../../components/DevInfos";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Portfolio from "../../components/Portfolio";
import './styles.scss';

export default function Home() {
  return (
    <>
      <header>
        <div className="container header-container">
          <Header />
        </div>
      </header>
      <main>
        <section id="dev-infos">
          <div className="container dev-infos-container">
            <DevInfos />
          </div>
        </section>
        <section id="portfolio">
            <div className="container portfolio-container">
                <Portfolio />
            </div>
        </section>
      </main>
      <footer>
        <div className="container footer-container">
            <Footer />
        </div>
      </footer>
    </>
  );
}
