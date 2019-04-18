import styled from 'styled-components';
import Link from 'next/link'

const Title = styled.h1`
  color: red;
  font-size: 50px;
`

const Layout = props => (
  <div>
    <Title>randomizRC</Title>
    {props.children}
  </div>
)

export default Layout