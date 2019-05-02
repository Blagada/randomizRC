import Link from 'next/link';
import styled from 'styled-components';

import EmployesItem from '../../components/EmployesItem';

import { locations } from '../../assets/helpers';
import { getIsActive } from '../../assets/helpers';
import { txtForDarkBg, textShadow, secondaryColor } from '../../assets/styles/colors';


const StyledList = styled.ul`
    ${({ withBg }) => (withBg ? 'background: linear-gradient(to right, rgba(255,255,255,.1) 0%,rgba(255,255,255,.04) 80%);' : '')}    
    border-left: 2px solid ${secondaryColor};
    color: ${txtForDarkBg};
    margin: 0;
    padding: 0;

    li {
        list-style: none;
        padding-left: 10px;

        &:nth-child(2n) {
            ${({ withBg }) => (withBg ? 'background: linear-gradient(to right, rgba(255,255,255,.1) 0%,rgba(255,255,255,.04) 100%);' : '')}
        }
    }

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

const StyledLocationName = styled.span`
    display: inline-block;
    margin: 0 0 0 5px;
`;


const getLocationName = (item) => (
    <>
        {locations.map((location) => {
            if (item.toUpperCase() === location.id)
            return location.name
        })}
    </>
)
{/* TODO : Permet d'afficher des listes
        - Soit de rencontre
        - Soit d'employé
*/}

const List = ({
    className,
    isEditable,
    isEmployes,
    maxItem,
    items,
    withBg,
  }) => {
    if (!items) {
        return "Aucune liste n'est disponible pour le moment";
    }

    return (
        <StyledList
            className={className}
            isEditable={isEditable}
            withBg={withBg}
        >
            { /* .slice(0, maxItem) */ }
            {items.map((item, i) => (
                <li
                    key={item.id}
                >
                    {isEmployes ? (
                        <>
                            {isEditable ? (
                                <EmployesItem
                                    id={item.id}
                                    isActive={getIsActive(item.presence)}
                                    title={item.name}
                                    employeLocation={item.location}
                                />
                            ) : (
                                <>
                                    <span>{item.name},</span>
                                    <StyledLocationName>{getLocationName(item.location)}</StyledLocationName>
                                </>
                            )}
                        </>
                    ) : (
                        <Link
                            as={`/meeting/${item.id}`}
                            href={`/meeting?id=${item.id}`}
                        >
                            <a>{item.name}</a>
                        </Link>
                    )}                    
                </li>
            ))}
        </StyledList>
    )
};

List.defaultProps = {
    maxItem: 5,
    isEmployes: false,
    withBg: true,
}

export default List