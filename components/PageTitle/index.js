import styled from 'styled-components';

import { txtForDarkBg, secondaryColor } from '../../assets/styles/colors';
import { titleFontFamily } from '../../assets/styles/fonts';

const StyledTitle = styled.h1`
  color: ${txtForDarkBg};
  font-family: ${titleFontFamily};
  font-style: italic;
  font-size: 12.5vw;
  line-height: 1.3;
  padding-left: 2%;
  position: relative;
  transform: rotate(-10deg);
  text-transform: uppercase;
  /* Dégradé dans le titre de la page */
  background: linear-gradient(to right, ${txtForDarkBg} 0%, ${secondaryColor} 70%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  /**/

  @media (min-width: 650px) {
    font-size: 84px;
  }
`;

const PageTitle = ({
    className,
    title,
  }) => (
    <StyledTitle
        className={className}
    >
      {title}
    </StyledTitle>
  );

export default PageTitle