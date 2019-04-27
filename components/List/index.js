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
    spreadsheets,
  }) => {
    if (!spreadsheets) {
        return "Aucune liste n'est disponible pour le moment";
    }
    console.log(`list`, spreadsheets)
    return (
        <StyledList
            className={className}
            isEditable={isEditable}
        >
            { /* .slice(0, maxItem) */ }
            {spreadsheets.map((spreadsheet, i) => (
                <li
                    key={spreadsheet.id}
                >
                    {isEmployes ? (
                        <>
                            {isEditable ? (
                                <EmployesItem
                                    id={spreadsheet.id}
                                    isActive={getIsActive(spreadsheet.presence)}
                                    title={spreadsheet.name}
                                    employeLocation={spreadsheet.location}
                                />
                            ) : (
                                <p>{spreadsheet.name}, {spreadsheet.location}</p>
                            )}
                        </>
                    ) : (
                        <Link
                            as={`/meeting/${spreadsheet.id}`}
                            href={`/meeting?id=${spreadsheet.id}`}
                        >
                            <a>{spreadsheet.name}</a>
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