
import Link from 'next/link';

import { StyledActionTag } from '../../assets/styles/actionTag';

const ActionLink = ({
    className,
    label,
    link,
    path,
  }) => (
    <StyledActionTag
        className={`action-link ${className ? className : ''}`}
    >
        <Link
            as={`${link}`}
            href={`${path}`}
        >
            <a>{label}</a>
        </Link>
    </StyledActionTag>
  );

ActionLink.defaultProps = {
    link: "/",
    path: "/",
}

export default ActionLink