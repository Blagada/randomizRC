import styled from 'styled-components';
import Link from 'next/link';

import Layout from '../components/layout';
import List from '../components/List';
import ActionLink from './ActionLink';

const StyledForm = styled.div`
  input[type=text],
  input[type=number] {
    display: block;
    margin-top: 5px;
  }

  input[type=radio] {
    margin: 0 5px;
  }

  label {
    display: block;
  }

  fieldset {
    border-style: solid;
    border-width: 1px;
  }

  hr {
    border-bottom: 0;
    border-style: solid;
    display: block;
    margin: 20px 0;
  }

  .action-link {
    margin-top: 20px;
  }
`;

function FormView ({

}) {
  
  return (
    <Layout
      title="Créer une rencontre"
    >
      <StyledForm>
        {/* Nom */}
        <label
          htmlFor="meetingName"
        >
          Nom de la rencontre
          <input type="text" id="meetingName" placeholder="Ex: Rencontre 1" />
        </label>
        <hr />
        {/* radio type de random */}
        <fieldset>
          <legend>Type de rencontre aléatoire</legend>
          <label
            htmlFor="randomType1"
          >
            <input type="radio" id="randomType1" name="randomType" value="0" />
            La totale
          </label>
          <label
            htmlFor="randomType2"
          >
            <input type="radio" id="randomType2" name="randomType" value="1" />
            Au moins un par localisation
          </label>
          <label
            htmlFor="randomType3"
          >
            <input type="radio" id="randomType3" name="randomType" value="2" />
            Par localisation
          </label>
        </fieldset>
        <hr />
        <label
          htmlFor="numberMembersPerTeam"
        >
          Nombre de membres par équipe
          <input type="number" id="numberMembersPerTeam" placeholder="Ex: 4" />
        </label>
        <hr />
        <details>
          <summary>Listes des employés invités</summary>
          <List />
        </details>
        <ActionLink
          path="/meeting"
          link="/meeting"
          label="Créer la rencontre"
        />
      </StyledForm>
    </Layout>
  )
}

export default FormView;

