export const backgroundColor = '#1a163b';
export const txtForLightBg = '#000';
export const txtForDarkBg = '#fff';
export const boxShadowColor = "#888";

export const secondaryColorArray = [
    '#ed1b24',
    '#f7f391',
    '#fb96fa',
    '#9ff1b6',
    '#ffd02b',
    '#c6ff19',
    '#19ff44',
    '#aad6e2',
];

export function randomSecondaryColor() {
    const randomIndex = Math.floor(Math.random() * secondaryColorArray.length); 
    const color = secondaryColorArray[randomIndex];
    return color;
};

export const secondaryColor = randomSecondaryColor();