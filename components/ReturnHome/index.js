


import styled from 'styled-components';
import Link from 'next/link';

import { txtForDarkBg, textShadow, secondaryColor } from '../../assets/styles/colors';


const StyledReturnHome = styled.div`
  font-size: 14px;
  line-height: 1.3;

  a {
      border-bottom: 1px solid ${txtForDarkBg};
      color: ${txtForDarkBg};
      text-decoration: none;
  }

  a:hover,
  a:focus {
      border-bottom-color: ${secondaryColor};
      border-bottom-style: dashed;
      text-shadow: ${textShadow};
  }

  a:active {
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