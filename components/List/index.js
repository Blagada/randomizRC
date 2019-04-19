import Link from 'next/link';
import styled from 'styled-components';

import { txtForDarkBg, secondaryColor } from '../../assets/styles/colors';


const StyledList = styled.ul`
    color: ${txtForDarkBg};
    margin: 0;
    padding: 0 0 0 20px;

    a {
        color: ${txtForDarkBg};
        text-decoration: none;
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
    spreadsheets,
  }) => (
    <StyledList
        className={className}
    >
        {spreadsheets.map(spreadsheet => (
            <li key={spreadsheet.id}>
                <Link as={`/meeting/${spreadsheet.id}`} href={`/viewMeeting?id=${spreadsheet.id}`}>
                    <a>{spreadsheet.name}</a>
                </Link>
            </li>
        ))}
    </StyledList>
  );

export default List