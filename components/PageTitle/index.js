import styled from 'styled-components';
import { txtForDarkBg, secondaryColor } from '../../assets/styles/colors';


const StyledTitle = styled.h1`
  color: ${txtForDarkBg};
  font-family: 'Knewave', cursive;
  font-style: italic;
  font-size: 15.5vw;
  line-height: 1.3;
  position: relative;
  transform: rotate(-10deg);
  text-transform: uppercase;
  /* Dégradé dans le titre de la page */
  background: -webkit-linear-gradient(${txtForDarkBg}, ${secondaryColor});
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  /**/

  @media (min-width: 620px) {
    font-size: 95px;
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