import styled from 'styled-components';
import { txtForDarkBg, textShadow } from '../../assets/styles/colors';


const StyledSectionTitle = styled.h2`
  color: ${txtForDarkBg};
  font-size: 16px;
  line-height: 1.3;
  margin-top: 40px;
  text-shadow: ${textShadow};
`;

const SectionTitle = ({
    className,
    title,
  }) => (
    <StyledSectionTitle
        className={className}
    >
      {title}
    </StyledSectionTitle>
  );

export default SectionTitle