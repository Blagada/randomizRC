import styled from 'styled-components';

const StyleMakeBackground = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
`;

const StyledSpanBackground = styled.span`
    background: red;
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
                aria-hidden="true"
                className={className}
                heightValue={i}
                key={i}
                paddingValue={nbLine - i}
            />
        )
    }
    return (
        <StyleMakeBackground>
            {generateBackground}
        </StyleMakeBackground>
    );
};

MakeBackground.defaultProps = {
    nbLine: 17,
};

export default MakeBackground