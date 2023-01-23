import PortfolioCard from '../PortfolioCard';
import './styles.scss';

export default function Portfolio() {
    return (
        <>
            <div className='portfolio-title'>
                <h2>Portfolio</h2>
            </div>
            <div className='portfolio-cards'>
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