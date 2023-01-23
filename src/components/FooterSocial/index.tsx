import instagramImg from '../../assets/instagram.png';
import youtubeImg from '../../assets/youtube.png';
import './styles.scss';

export default function FooterSocial() {
    return (
        <>
            <div className="footer-social-text">
                <p>Siga-nos</p>
            </div>
            <div className="footer-social-medias">
                <div className="footer-social-media-image">
                    <a href="#"><img src={instagramImg} alt="Instagram" /></a> 
                </div>
                <div className="footer-social-media-image">
                    <a href="#"><img src={youtubeImg} alt="Youtube" /></a> 
                </div>
            </div>
        </>
    );
}