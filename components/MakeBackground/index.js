import styled from 'styled-components';

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
    const content = (nbLine, index) => (
        <StyledSpanBackground
            aria-hidden="true"
            className={className}
            heightValue={nbLine}
            paddingValue={index}
        />
    );
    let generateBackground = []
    // Outer loop to create parent
    for (let i = 0; i < nbLine; i++) {
        generateBackground.push(<>{content(i, nbLine - i)}</>)
    }
    return generateBackground;
};

MakeBackground.defaultProps = {
    nbLine: 17,
};

export default MakeBackground