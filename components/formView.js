import styled from 'styled-components';
import Link from 'next/link';

import Layout from '../components/layout';
import List from '../components/List';
import ActionLink from './ActionLink';
import EmployesItem from './EmployesItem';

const StyledForm = styled.form`
  input[type=text],
  input[type=number] {
    display: block;
    margin-top: 5px;
    padding: 4px;
  }

  input[type=radio] {
    margin: 0 5px;
  }

  .action-link {
    margin-top: 20px;
  }
`;

const StyledLabel = styled.label`
  display: block;
`;

const StyledHr = styled.hr`
  border-bottom: 0;
  border-style: solid;
  display: block;
  margin: 20px 0;
`;

const StyledFieldset = styled.fieldset`
  border-style: solid;
  border-width: 1px;
`;

const StyledDetails = styled.details`
  summary {
    cursor: pointer;
  }
`;

class FormView extends React.Component{
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
   
  }

  handleSubmit(event) {
    console.log('SUBMITTING FORMS LIKE ITS 1995');
    event.preventDefault();
    
  }

  render() {
    const {
      employes,
    } = this.props

    return(
      <Layout
        title="Créer une rencontre"
      >
        <StyledForm onSubmit={this.handleSubmit}>
          {/* Nom */}
          <StyledLabel
            htmlFor="meetingName"
          >
            Nom de la rencontre
            <input type="text" id="meetingName" placeholder="Ex: Rencontre 1" />
          </StyledLabel>
          <StyledHr />
          {/* radio type de random */}
          <StyledFieldset>
            <legend>Type de rencontre aléatoire</legend>
            <StyledLabel
              htmlFor="randomType1"
            >
              <input type="radio" id="randomType1" name="randomType" value="0" />
              La totale
            </StyledLabel>
            <StyledLabel
              htmlFor="randomType2"
            >
              <input type="radio" id="randomType2" name="randomType" value="1" />
              Au moins un par localisation
            </StyledLabel>
            <StyledLabel
              htmlFor="randomType3"
            >
              <input type="radio" id="randomType3" name="randomType" value="2" />
              Par localisation
            </StyledLabel>
          </StyledFieldset>
          <StyledHr />
          <StyledLabel
            htmlFor="numberMembersPerTeam"
          >
            Nombre de membres par équipe
            <input type="number" id="numberMembersPerTeam" min="1" placeholder="Ex: 4" />
          </StyledLabel>
          <StyledHr />
          <StyledDetails>
            <summary>Listes des employés invités</summary>
            <List
              items={employes}
              isEmployes
              isEditable
            />
          </StyledDetails>
          <input type="submit" value="Créer la rencontre" />
        </StyledForm>
      </Layout>
    )
  }
}

export default FormView;

