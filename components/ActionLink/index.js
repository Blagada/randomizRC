import styled from 'styled-components';
import Link from 'next/link';

import { secondaryColor } from '../../assets/styles/colors';

const StyledActionLink = styled(Link)`
    background: ${secondaryColor};
`;

const ActionLink = ({
    className,
    label,
    link,
    onclick,
  }) => (
    <StyledActionLink
        as={link}
        className={className}
        href={path}
        onClick={onclick}
    >
        <a>
            {label}
        </a>
    </StyledActionLink>
  );

export default ActionLink