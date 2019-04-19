import styled from 'styled-components';
import Link from 'next/link'

import MakeBackground from '../MakeBackground/';
import PageTitle from '../PageTitle';



const StyledLayout = styled.main`
  background: #1a163b;
`;

const Layout = ({
    children,
    className,
    title,
  }) => (
  <StyledLayout>
    <PageTitle
      title={title}
      className={className}
    />
    {children}      
    <MakeBackground />
  </StyledLayout>
)

export default Layout