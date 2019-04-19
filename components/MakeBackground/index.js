import styled from 'styled-components';
import { secondaryColor } from '../../assets/styles/colors';

const StyleMakeBackground = styled.div`
    margin-top: -7%;
    pointer-events: none;
    position: relative;
    width: 100%;
    z-index: 1;
`;

const StyledSpanGradient = styled.span`
    background: linear-gradient(to bottom, rgba(26,22,59,1) 0%,rgba(255,255,255,0) 47%);
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
`;

const StyledSpanBackground = styled.span`
    background: ${secondaryColor};
    display: block;
    height: ${({heightValue}) => `${heightValue}px`};
    margin-bottom: ${({paddingValue}) => `${paddingValue}px`};
`;

const MakeBackground = ({
    className,
    nbLine,
 }) => {
    let generateBackground = []
    // Outer loop to create parent
    for (let i = 0; i < nbLine; i++) {
        generateBackground.push(
            <StyledSpanBackground
                className={`span--make-background ${className}`}
                heightValue={i}
                key={i}
                paddingValue={nbLine - i}
            />
        )
    }
    return (
        <StyleMakeBackground
            aria-hidden="true"
            className="make-background"
        >
            <StyledSpanGradient />
            {generateBackground}
            <StyledSpanBackground
                className="span--last--make-background"
                heightValue={50}
                paddingValue={0}
            />
        </StyleMakeBackground>
    );
};

MakeBackground.defaultProps = {
    className: '',
    nbLine: 17,
};

export default MakeBackground