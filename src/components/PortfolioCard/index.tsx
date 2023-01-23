import portfolioImg from '../../assets/portfolio1.png';
import './styles.scss';

export default function PortfolioCard() {
    return (
        <div className="portfolio-card">
            <img src={portfolioImg} alt="Imagem" />
        </div>
    );
}