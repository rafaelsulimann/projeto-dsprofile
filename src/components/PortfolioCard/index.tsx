import productImg from '../../assets/portfolio2.png';
import './styles.scss';

export default function PortfolioCard () {
    return (
        <div className="portfolio-card-image">
            <img src={productImg} alt="Product" />
        </div>
    );
}