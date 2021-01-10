import "./styles.css"
import { ReactComponent as YoutubeIcon} from './youtube.svg';
import { ReactComponent as LinIcon} from './linkedin.svg';
import { ReactComponent as InstIcon} from './instagram.svg';

function Footer(){
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
            <a href="www.youtube.com" target="_new">
            <YoutubeIcon/>
            </a>
            <a href="https://www.linkedin.com/in/constantino-barreto-rr/" target="_new">
            <LinIcon/>
            </a>
            <a href="www.instagram.com">
            <InstIcon/>
            </a>
            </div>
        </footer>     
    )
}

export default Footer;