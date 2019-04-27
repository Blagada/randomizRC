


import styled from 'styled-components';
import Link from 'next/link';

import { txtForDarkBg, secondaryColor } from '../../assets/styles/colors';


const StyledReturnHome = styled.div`
  font-size: 12px;
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
            as={`/`}
            href={`/home`}
        >
            <a>{label}</a>
        </Link>
    </StyledReturnHome>
  );

ReturnHome.defaultProps = {
    label: "Retour à l'accueil",
};

export default ReturnHome