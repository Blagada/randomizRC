


import styled from 'styled-components';
import Link from 'next/link';

import { txtForDarkBg, secondaryColor } from '../../assets/styles/colors';


const StyledReturnHome = styled.div`
  
  font-family: 'Knewave', cursive;
  font-style: italic;
  font-size: 15px;
  line-height: 1.3;
  text-transform: uppercase;

  a {
    color: ${txtForDarkBg};
  }

  a:hover,
  a:focus {
      color: ${secondaryColor};
  }
`;

const ReturnHome = ({
    className,
    label,
  }) => (
    <StyledReturnHome>
        <Link
            as={`/index/`}
            href={`/index`}
        >
            <a>{label}</a>
        </Link>
    </StyledReturnHome>
  );

ReturnHome.defaultProps = {
    label: "Retour à l'accueil",
};

export default ReturnHome