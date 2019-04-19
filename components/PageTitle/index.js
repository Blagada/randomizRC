import styled from 'styled-components';


const StyledTitle = styled.h1`
  color: #fff;
  font-size: 50px;
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