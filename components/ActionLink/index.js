import styled from 'styled-components';
import Link from 'next/link';

import {
    boxShadowColor,
    secondaryColor,
    txtForLightBg,
} from '../../assets/styles/colors';

const StyledActionLink = styled.div`
    a {
        background: ${secondaryColor};
        border-radius: 1px;
        box-shadow: 4px 4px ${boxShadowColor};
        color: ${txtForLightBg};
        display: inline-block;
        font-weight: 600;
        padding: 5px;
        text-decoration: none;
    }

    a:hover,
    a:focus {
        box-shadow: 2px 2px ${boxShadowColor};
        transform: translate(2px, 2px);
    }
`;

const ActionLink = ({
    className,
    label,
    link,
    path,
  }) => (
    <StyledActionLink
        className={className || className}
    >
        <Link
            as={`${link}`}
            href={`${path}`}
        >
            <a>{label}</a>
        </Link>
    </StyledActionLink>
  );

ActionLink.defaultProps = {
    link: "/",
    path: "/",
}

export default ActionLink