import styled from 'styled-components';
import { secondaryColor } from '../../assets/styles/colors';
import { locations } from '../../assets/constants';

const StyledEmployesItem = styled.label`
  border-bottom: 1px solid ${secondaryColor};
  display: flex;
  justify-content: flex-end;
  margin: 5px 0;

  input[type=checkbox] {
    align-self: center;
    margin: 2px 10px 0 0;
  }
`;

const StyledEmployesName = styled.span`
  flex-grow: 1;
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
        id={id}
        type="checkbox"
        value={id}
    />
    <StyledEmployesName>{title}</StyledEmployesName>
    <select>
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