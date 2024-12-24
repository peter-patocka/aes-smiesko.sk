import { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import logo from '../assets/images/logo.png';

import '../styles/header.scss';

const Header = () => {
  const [, setScrollY] = useState(0);
  const [header, setHeader] = useState('header default-pos clearfix');

  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();
      setScrollY(window.scrollY);

      if (window.scrollY> 10) {
        setHeader('header scrolled-pos clearfix');
        //console.log('window.scrollY', window.scrollY);
      } else {
        setHeader(header);
      }
      //console.log('window.scrollY', window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={header} data-testid="header">
      <div className="logo-container">
        <a href="/" className="logo">
          <img width="50" height="50" src={logo} alt="aes-smiesko.sk | autoelektrikár Bratislava logo"/>
          <span className='logo-text'>aes-smiesko.sk</span>
        </a>
      </div>
      <input className="menu-btn" type="checkbox" id="menu-btn"/>
      <label className="menu-icon" htmlFor="menu-btn">
        <FontAwesomeIcon className="navicon" icon={solid('bars')} size="1x"/>
      </label>
      <div className="quickIcons">
        <span className="quickIcon" title="Telefónny kontakt">
          <FontAwesomeIcon className="icon_menu_li" icon={solid('phone')} size="1x" fixedWidth/> +421 905 627 526
        </span>
        <span className="quickIcon" title="Otváracie hodiny">
          <FontAwesomeIcon className="icon_menu_li" icon={solid('clock')} size="1x" fixedWidth/> Po-Pia 9:00 - 18:00
        </span>
      </div>
      <ul className="menu">
        <li>
          <HashLink className="menu_item" smooth to="#o-mne">
            <FontAwesomeIcon className="icon_menu_li" icon={solid('user')} size="1x"/>
            O mne
          </HashLink>
        </li>
        <li>
          <HashLink className="menu_item" smooth to="#ponukane-sluzby">
            <FontAwesomeIcon className="icon_menu_li" icon={solid('automobile')} size="1x" fixedWidth/>
            Ponúkané služby
          </HashLink>
        </li>
        <li>
          <HashLink className="menu_item" smooth to="#cennik">
            <FontAwesomeIcon className="icon_menu_li" icon={solid('euro')} size="1x" fixedWidth/>
            Cenník
          </HashLink>
        </li>
        <li>
          <HashLink className="menu_item" smooth to="#kontakt">
            <FontAwesomeIcon className="icon_menu_li" icon={solid('envelope')} size="1x" fixedWidth/>
            Kontakt
          </HashLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;