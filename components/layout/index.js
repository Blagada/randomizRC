import styled from 'styled-components';
import Link from 'next/link'

import GlobalStyle from '../../assets/styles/startup';

import MakeBackground from '../MakeBackground/';
import PageTitle from '../PageTitle';
import ReturnHome from '../ReturnHome';

import { backgroundColor } from '../../assets/styles/colors';

const StyledLayout = styled.div`
  background: ${backgroundColor};
  display: flex;
  flex-direction: column;
  height: 100%; 
  min-height: 100vh;
  justify-content: flex-start;

  header {
    padding: 20px;
  }

  main {
    flex-grow: 1;
    padding: 20px;
    position: relative;
    z-index: 10;
  }

  .make-background {
    box-sizing: border-box;
    padding: 20px;
  }
`;

const Layout = ({
    children,
    className,
    title,
    withReturnLink,
  }) => (
  <StyledLayout>
    <header>
      {withReturnLink && (
        <ReturnHome />
      )}
      <PageTitle
        title={title}
        className={className}
      />
    </header>
    <main>
      {children}  
    </main>
    <footer>    
      
    </footer>
    <MakeBackground />
    <GlobalStyle />
  </StyledLayout>
)

Layout.defaultProps = {
  withReturnLink: true,
}

export default Layout