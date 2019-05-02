import styled from 'styled-components';
import { textFontFamily } from '../../assets/styles/fonts';
import { secondaryColor } from '../../assets/styles/colors';
import { locations } from '../../assets/helpers';

const StyledEmployesItem = styled.label`
  border-bottom: 1px solid ${secondaryColor};
  display: flex;
  margin: 5px 0;

  input[type=checkbox] {
    align-self: center;
    margin: 2px 10px 0 0;
  }

  select {
    align-self: center;
    font-family: ${textFontFamily};
    margin-left: 10px;
  }
`;

const StyledEmployesName = styled.input`
  font-family: ${textFontFamily};
  flex-grow: 1;
  margin: 2px 0;
  padding: 1px 4px;
`;

const EmployesItem = ({
  className,
  employeLocation,
  id,
  isActive,
  title,
}) => (
  <StyledEmployesItem
      className={className}
      htmlFor={id}
  >
    <input
        {...isActive && { 'defaultChecked': true }}
        id={`checkboxMember${id}`}
        name={`checkboxMember${id}`}
        type="checkbox"
        value={id}
    />
    <StyledEmployesName 
      id={`textMember${id}`}
      name={`textMember${id}`}
      type="text"
      value={title}
      required
    />

    <select name={`selectMember${id}`}>
      {locations.map((location, i) => (
        <option
          value={location.id}
          title={location.name}
          key={`${location.abbrName}${i}`}
          {... employeLocation.toUpperCase() === location.id && {'selected' : 'selected'}}
        >
         {location.abbrName}
        </option>
      ))}
    </select>
  </StyledEmployesItem>
);

EmployesItem.defaultProps = {
  isActive: false,
};

export default EmployesItem