import styled from 'styled-components';
import Link from 'next/link';

import Layout from '../components/layout';

const StyledForm = styled.div`
  input[type=text] {
    display: block;
  }

  input[type=radio] {
    margin: 0 5px;
  }

  label {
    display: block;
  }

  hr {
    border-top: 1px solid #fff;
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
          for="meetingName"
        >
          Nom de la rencontre
          <input type="text" id="meetingName" />
        </label>
        <hr />
        {/* radio type de random */}
        <fieldset>
          <legend>Type de random</legend>
          <label
            for="randomType1"
          >
            <input type="radio" id="randomType1" name="randomType" value="1" />
            La totale
          </label>
          <label
            for="randomType2"
          >
            <input type="radio" id="randomType2" name="randomType" value="2" />
            Au moins un par localisation
          </label>
          <label
            for="randomType3"
          >
            <input type="radio" id="randomType3" name="randomType" value="3" />
            Par localisation
          </label>
        </fieldset>
        <hr />
      </StyledForm>
    </Layout>
  )
}

export default FormView;

