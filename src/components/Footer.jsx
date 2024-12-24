import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro';

import '../styles/footer.scss';

const Footer = () => {
  return (
    <footer className="footer-container">
      <p>
        <FontAwesomeIcon className="footer-container_icon" icon={solid('copyright')} size="1x" /> aes-smiesko.sk {new Date().getFullYear()}
        &nbsp;
        <a href="https://github.com/peter-patocka/aes-smiesko.sk" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="footer-container_icon" icon={brands('github')} size="1x"/></a>
      </p>
    </footer>
  );
}

export default Footer;
