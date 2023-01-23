import devImg from '../../assets/profile.svg';
import './styles.scss';

export default function DevInfos() {
    return (
        <>
            <div className="dev-info-image">
                <img src={devImg} alt="Imagem" />
            </div>
            <div className='dev-info-text'>
                <h2>Rafael Sulimann</h2>
                <h3>Full Stack - Spring - React</h3>
            </div>
        </>
    );
}