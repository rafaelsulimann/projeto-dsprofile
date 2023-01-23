import PortfolioCard from "../PortfolioCard";
import './styles.scss';

export default function Portfolio() {
  return (
    <>
      <div className="portfolio-title">
        <h2>PORTFOLIO</h2>
      </div>
      <div className="portfolio-cards">
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
        <PortfolioCard />
      </div>
    </>
  );
}
