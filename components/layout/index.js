import styled from 'styled-components';
import Link from 'next/link'

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
  </div>
)

export default Layout