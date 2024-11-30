// Todas as cores possíveis
const allColors = [
    "AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond",
    "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue",
    "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGreen", "DarkKhaki",
    "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen",
    "DarkSlateBlue", "DarkSlateGray", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray",
    "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold",
    "GoldenRod", "Gray", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki",
    "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow",
    "LightGray", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray",
    "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine",
    "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen",
    "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite",
    "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen",
    "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple",
    "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna",
    "Silver", "SkyBlue", "SlateBlue", "SlateGray", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle",
    "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen"
];

// Seleção aleatória de 10 cores
const selectedColors = allColors.sort(() => Math.random() - 0.5).slice(0, 10);

// Escolher uma cor aleatória dentre as selecionadas
const targetColor = selectedColors[Math.floor(Math.random() * selectedColors.length)];

// Exibir as opções de cores
document.getElementById('color-options').innerText = selectedColors.join(', ');

function guessColor() {
    const userInput = document.getElementById('color-input').value.trim();
    const feedbackElement = document.getElementById('feedback');

    if (!selectedColors.includes(userInput)) {
        feedbackElement.innerText = `Por favor, escolha uma cor válida da lista!`;
        return;
    }

    if (userInput === targetColor) {
        document.body.style.backgroundColor = targetColor;
        feedbackElement.innerText = `Parabéns! Você acertou. A cor é ${targetColor}.`;
    } else if (userInput < targetColor) {
        feedbackElement.innerText = `Errou! A cor correta vem depois de "${userInput}" em ordem alfabética.`;
    } else {
        feedbackElement.innerText = `Errou! A cor correta vem antes de "${userInput}" em ordem alfabética.`;
    }
}
