document.addEventListener('DOMContentLoaded', () => {
    const easyTexts = [
        "The cat sat on the mat.",
        "A quick brown fox jumps over the lazy dog.",
        "Hello world!"
    ];

    const mediumTexts = [
        "Typing is a skill that improves with practice.",
        "The quick brown fox jumps over the lazy dog.",
        "JavaScript is a versatile programming language."
    ];

    const hardTexts = [
        "To be or not to be, that is the question.",
        "The five boxing wizards jump quickly.",
        "Sphinx of black quartz, judge my vow."
    ];

    const textToType = document.getElementById('textToType');
    const selectElement = document.getElementById('inputGroupSelect01');

    selectElement.addEventListener('change', (event) => {
        let selectedText;
        switch (event.target.value) {
            case '1':
                selectedText = easyTexts[Math.floor(Math.random() * easyTexts.length)];
                break;
            case '2':
                selectedText = mediumTexts[Math.floor(Math.random() * mediumTexts.length)];
                break;
            case '3':
                selectedText = hardTexts[Math.floor(Math.random() * hardTexts.length)];
                break;
            default:
                selectedText = "Please select a difficulty level.";
        }
        textToType.value = selectedText;
    });
});
