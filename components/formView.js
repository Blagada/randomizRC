import styled from 'styled-components';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch'

import { StyledActionTag } from '../assets/styles/actionTag';
import { textFontFamily } from '../assets/styles/fonts';
import { textShadow, secondaryColor } from '../assets/styles/colors';
import { randomizeArray, regularTeamDistribution } from '../assets/helpers';

import Layout from '../components/layout';
import List from '../components/List';

const StyledForm = styled.form`
  input[type=radio] {
    margin: 0 5px;
  }

  .submit-action {
    margin-top: 20px;
  }
`;

const StyledLabel = styled.label`
  display: block;
  text-shadow: ${textShadow};
`;

const StyledHr = styled.hr`
  border-bottom: 0;
  border-style: solid;
  color: ${secondaryColor};
  display: block;
  margin: 20px 0;
`;

const StyledFieldset = styled.fieldset`
  border-color: ${secondaryColor};
  border-style: solid;
  border-width: 1px;
  text-shadow: ${textShadow};

  label {
    text-shadow: none;
  }
`;

const StyledInputField = styled.input`
  font-family: ${textFontFamily};
  display: block;
  margin-top: 5px;
  padding: 4px;
`;

const StyledDetails = styled.details`
  summary {
    cursor: pointer;
    text-shadow: ${textShadow};

    &:hover, &:focus {
      text-shadow: none;
    }
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

    let randomizedUsers = [];

    switch (randomType) {
      case '0':
        let teamDistribution = regularTeamDistribution(userQty, numberOfTeams);
        let randomized = randomizeArray(teamDistribution);
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
        break;
    }
    console.log(randomizedUsers);
      var body = {
        "requests": [
          {
            "addSheet": {
              "properties": {
                "title": meetingName
              }
            }
          }
        ]
      }
      fetch(`https://sheets.googleapis.com/v4/spreadsheets/1m0ZHw-FEsStTTUmObOT5PjCUfvfbL8l1IRfiubfwJvw:batchUpdate`, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Authorization': 'Bearer gxuGO3YIAASD2QPif4khRL33',
          'Content-Type':'application/json',
          'Access-Control-Allow-Origin':'*',
        },
        body: JSON.stringify(body)
      }).then((res) => {
        res.status === 200 ? console.log('IT WORKED') : console.log(res);
      })
    
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
          <p>Attention, tous les champs du formulaire sont requis pour la création d'une rencontre.</p>
          {/* Nom */}
          <StyledLabel
            htmlFor="meetingName"
          >
            Nom de la rencontre
            <StyledInputField type="text" id="meetingName" name="meetingName" placeholder="Ex: Rencontre 1" required/>
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
            <StyledInputField type="number" id="numberMembersPerTeam" name="numberMembersPerTeam" min="1" placeholder="Ex: 4" required/>
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

