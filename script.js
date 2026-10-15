const progressStorageKey = 'gxdcf-aprenda-progress-v1';

const tracks = {
    logic: { name: 'Lógica com Portugol', firstLesson: 'logica-introducao' },
    python: { name: 'Python', firstLesson: 'py-introducao' },
    javascript: { name: 'JavaScript', firstLesson: 'js-primeiro-programa' },
    java: { name: 'Java', firstLesson: 'java-primeiro-programa' },
    csharp: { name: 'C#', firstLesson: 'csharp-primeiro-programa' }
};
const trackAliases = { portugol: 'logic' };

const languageSelect = document.getElementById('language-select');
const startButton = document.getElementById('start-button');
const selectedLanguage = document.getElementById('selected-language');
const courseCards = document.querySelectorAll('[data-track-link]');

function readProgress() {
    try {
        const saved = JSON.parse(localStorage.getItem(progressStorageKey) || '{}');
        return saved && typeof saved === 'object' ? saved : {};
    } catch (error) {
        console.warn('Não foi possível ler o progresso salvo.', error);
        return {};
    }
}

function openTrack(track) {
    const selectedTrack = tracks[track] ? track : trackAliases[track] || 'python';
    const progress = readProgress();
    const lastLesson = progress.lastLesson;
    const lesson = progress.selectedTrack === selectedTrack && lastLesson
        ? lastLesson
        : tracks[selectedTrack].firstLesson;

    const urlTrack = selectedTrack === 'logic' ? 'portugol' : selectedTrack;
    window.location.href = `curso.html?linguagem=${encodeURIComponent(urlTrack)}&aula=${encodeURIComponent(lesson)}`;
}

function updateSelectedLanguage() {
    const track = tracks[languageSelect.value];
    selectedLanguage.textContent = track
        ? `Você escolheu ${track.name}. O curso pode ser acessado sem cadastro.`
        : 'Selecione uma trilha para começar.';
}

languageSelect.addEventListener('change', updateSelectedLanguage);
startButton.addEventListener('click', () => openTrack(languageSelect.value));

courseCards.forEach((card) => {
    card.addEventListener('click', (event) => {
        event.preventDefault();
        openTrack(card.dataset.trackLink);
    });
});

const savedProgress = readProgress();
const savedTrack = tracks[savedProgress.selectedTrack]
    ? savedProgress.selectedTrack
    : trackAliases[savedProgress.selectedTrack];
if (tracks[savedTrack]) {
    languageSelect.value = savedTrack;
}
updateSelectedLanguage();
