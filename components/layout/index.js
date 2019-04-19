import styled from 'styled-components';
import Link from 'next/link'

import MakeBackground from '../MakeBackground/';

const Title = styled.h1`
  color: red;
  font-size: 50px;
`

const Layout = ({
    children,
    className,
    title,
  }) => (
  <div>
    <Title className={className}>
      {title}
    </Title>
    {children}      
    <MakeBackground />
  </div>
)

export default Layout