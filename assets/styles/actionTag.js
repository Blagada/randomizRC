import styled from 'styled-components';

import { textFontFamily } from './fonts'
import {
    boxShadowColor,
    secondaryColor,
    txtForLightBg,
} from './colors';

export const StyledActionTag = styled.div`
    a, input {
        background: ${secondaryColor};
        border-radius: 1px;
        box-shadow: 4px 4px ${boxShadowColor};
        color: ${txtForLightBg};
        display: inline-block;
        font-size: 14px;
        font-weight: 600;
        padding: 5px;
        text-decoration: none;

        &:hover,
        &:focus {
            box-shadow: 2px 2px ${boxShadowColor};
            transform: translate(2px, 2px);
        }
    }

    input {
        border: none;
        cursor: pointer;
        font-family: ${textFontFamily};
    }
`;
