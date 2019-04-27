import Link from 'next/link';
import styled from 'styled-components';

import { txtForDarkBg, secondaryColor } from '../../assets/styles/colors';


const StyledList = styled.ul`
    color: ${txtForDarkBg};
    margin: 0;
    padding: 0 0 0 20px;
    ${({ isEmployes }) => (isEmployes ? 'list-style: none;' : '')}

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
    isEmployes,
    maxItem,
    spreadsheets,
  }) => {
    if (!spreadsheets) {
        return "Aucune liste n'est disponible pour le moment";
    }
    return (
        <StyledList
            className={className}
            isEmployes={isEmployes}
        >
            { /* .slice(0, maxItem) */ }
            {spreadsheets.map((spreadsheet, i) => (
                <li
                    key={spreadsheet.id}
                >
                    {isEmployes ? (
                        <EmployesItem />
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