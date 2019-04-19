import styled from 'styled-components';
import { txtForDarkBg } from '../../assets/styles/colors';


const StyledTitle = styled.h1`
  color: ${txtForDarkBg};
  font-family: 'Knewave', cursive;
  font-style: italic;
  font-size: 15.5vw;
  line-height: 1.3;
  transform: rotate(-10deg);
  text-transform: uppercase;
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