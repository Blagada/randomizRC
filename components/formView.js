import styled from 'styled-components';
import Link from 'next/link';

import { StyledActionTag } from '../assets/styles/actionTag';

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

  .submit-action {
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
    const data = new FormData(event.target);
    let usersData = [];
    let randomType = "";
    let meetingName = "";
    let numberMembersPerTeam = 0;

    for (var [key, value] of data.entries()) { 
      if (key.includes('checkboxMember')){
        usersData.push({"id": value, "name": "", "location": ""})
      }

      if (key.includes('selectMember')) {
        const userNumericId = key.replace( /^\D+/g, '');
        const index = usersData.findIndex(user => user.id === userNumericId);
        if(index >= 0) {
          usersData[index] = {
            'id': userNumericId,
            'location': value,
            'name': usersData[index].name,
          }
        }
      }
          
      if (key.includes('textMember')) {
        const userNumericId = key.replace( /^\D+/g, '');
        const index = usersData.findIndex(user => user.id === userNumericId);
        if(index >= 0) {
          usersData[index] = {
            'id': userNumericId,
            'location': usersData[index].location,
            'name': value,
          }
        }
      }
      
      if (key.includes('meetingName')) {
        meetingName = value;
      }

      if (key.includes('randomType')) {
        randomType = value;
      }

      if (key.includes('numberMembersPerTeam')) {
        numberMembersPerTeam = value;
      }
      
    }
    const userQty = usersData.length;
    const numberOfTeams = Math.floor(userQty / numberMembersPerTeam);
    const usersWithoutTeam = Math.abs((numberOfTeams * numberMembersPerTeam) - userQty);
    console.log('numberOfTeams', numberOfTeams);
    console.log('userQty', userQty);
    console.log('usersWithoutTeam', usersWithoutTeam);
    let teamDistribution = [];
    
    var currTeamIndex = 1;

    for (let i = 0; i < userQty; i++) {
      teamDistribution.push(currTeamIndex);
      currTeamIndex = currTeamIndex + 1; 
      if (currTeamIndex > numberOfTeams) {
        currTeamIndex = 1;
      }
      console.log(userQty);
    }  

    let randomizedUsers = [];
    console.log('randomType', randomType);

    switch (randomType) {
      case '0':
        for (let i = teamDistribution.length - 1; i > 0; i--) {
          let j = Math.floor(Math.random() * (i + 1));
          [teamDistribution[i], teamDistribution[j]] = [teamDistribution[j], teamDistribution[i]];
        }
        usersData.map((userData, i) => {
          randomizedUsers.push({
            'name': userData.name,
            'location': userData.location,
            'team': teamDistribution[i],
          });
        });
        break;
      case '1':
        // Au moins un par localisation
        usersData.map((userData) => {

        });
        break;
      case '2':
        // Par localisation
        usersData.map((userData) => {
        
        });
        break;
      default:
      console.log('DEFAULT');
        break;
    }
    console.log(randomizedUsers);
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
            <input type="text" id="meetingName" name="meetingName" placeholder="Ex: Rencontre 1" required/>
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
              <input type="radio" id="randomType2" name="randomType" value="1" defaultChecked/>
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
            <input type="number" id="numberMembersPerTeam" name="numberMembersPerTeam" min="1" placeholder="Ex: 4" required/>
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
          <StyledActionTag
            className="submit-action"
          >
            <input type="submit" value="Créer la rencontre" />
          </StyledActionTag>
        </StyledForm>
      </Layout>
    )
  }
}

export default FormView;

