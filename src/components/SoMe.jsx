import styled from 'styled-components';
import '../styles/so-me.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro';

const SoMeLinksStyle = styled.li`
    --so-me-li-margin: 0 20px;
    --so-me-li-text-color: ${(props) => props.color};
    --so-me-li-text-color_hover: ${(props) => props.colorHover};
`;

const SoMe = (props) => {
  const { category } = props;

  if (category === "dev") {
    return (
      <ul className="soMeLinks center">
        <li className="phoneNumber">
          +421 905 627 526
        </li>
      </ul>
    );
  }
  else if ( category === "reach") {
    return (
      <ul className="soMeLinks center">
        <SoMeLinksStyle color="#ffffff" colorHover="#ff1f1d">
          <a target="_blank" aria-label="Auto Elektronik Servis - Ing. Jozef Smieško facebook profile" rel="noopener noreferrer" href="https://www.facebook.com/autoalarmy/">
            <FontAwesomeIcon icon={brands('facebook')} size="3x" />
          </a>
        </SoMeLinksStyle>
      </ul>
    );
  }
};

export default SoMe;