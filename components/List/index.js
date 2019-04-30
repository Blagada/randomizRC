import Link from 'next/link';
import styled from 'styled-components';

import EmployesItem from '../../components/EmployesItem';

import { getIsActive } from '../../assets/helpers';
import { txtForDarkBg, secondaryColor } from '../../assets/styles/colors';


const StyledList = styled.ul`
    color: ${txtForDarkBg};
    margin: 0;
    padding: 0 0 0 20px;
    ${({ isEditable }) => (isEditable ? 'list-style: none;' : '')}

    a {
        color: ${txtForDarkBg};
    }

    a:hover,
    a:focus {
        color: ${secondaryColor};
    }
`;

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
  }) => {
    if (!items) {
        return "Aucune liste n'est disponible pour le moment";
    }

    return (
        <StyledList
            className={className}
            isEditable={isEditable}
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
                                <p>{item.name}, {item.location}</p>
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
}

export default List