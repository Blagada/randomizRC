import styled from 'styled-components';
import { secondaryColor } from '../../assets/styles/colors';


const StyledSectionTitle = styled.h2`
  color: ${secondaryColor};
  font-size: 16px;
  line-height: 1.3;
  margin-top: 40px;
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