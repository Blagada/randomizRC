import styled from 'styled-components';
import { makeBackground } from "../../lib/mixin";

const StyledSpanBackground = styled.span`
    background: red;
    display: block;
    height: ${({heightValue}) => `${heightValue}px`};
    padding-bottom: ${({paddingValue}) => `${paddingValue}px`};
`;

const MakeBackground = ({
    nbLine,
 }) => {
    for (var index = 2; index < nbLine; index++) {
        console.log(index, nbLine);
        const content = (
            <StyledSpanBackground
                aria-hidden="true"
                heightValue={nbLine}
                paddingValue={index}
            />
        );
        return content;
    }
    return null;
 }

MakeBackground.defaultProps = {
    nbLine: 17,
};

export default MakeBackground