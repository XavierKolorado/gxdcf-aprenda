
const languageSelect = document.getElementById('language-select');
const startButton = document.getElementById('start-button');
const selectedLanguage = document.getElementById('selected-language');

const languages = {
    python: 'Python',
    javascript: 'JavaScript',
    java: 'Java',
    csharp: 'C#'
};

function updateSelectedLanguage() {
    const language = languages[languageSelect.value];

    selectedLanguage.textContent =
        `Você escolheu ${language}. Clique em Começar para continuar.`;
}

languageSelect.addEventListener('change', updateSelectedLanguage);

startButton.addEventListener('click', () => {
    const language = languages[languageSelect.value];

    selectedLanguage.textContent =
        `O curso de ${language} ainda está em desenvolvimento. Em breve!`;
});

updateSelectedLanguage();
