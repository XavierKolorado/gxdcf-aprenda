const progressStorageKey = 'gxdcf-aprenda-progress-v1';

const tracks = {
    logic: { name: 'Lógica com Portugol', firstLesson: 'algoritmos' },
    python: { name: 'Python', firstLesson: 'primeiro-programa' },
    javascript: { name: 'JavaScript', firstLesson: 'js-primeiro-programa' },
    java: { name: 'Java', firstLesson: 'java-primeiro-programa' },
    csharp: { name: 'C#', firstLesson: 'csharp-primeiro-programa' }
};

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
    const selectedTrack = tracks[track] ? track : 'python';
    const progress = readProgress();
    const lastLesson = progress.lastLesson;
    const lesson = progress.selectedTrack === selectedTrack && lastLesson
        ? lastLesson
        : tracks[selectedTrack].firstLesson;

    window.location.href = `curso.html?linguagem=${encodeURIComponent(selectedTrack)}&aula=${encodeURIComponent(lesson)}`;
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
if (tracks[savedProgress.selectedTrack]) {
    languageSelect.value = savedProgress.selectedTrack;
}
updateSelectedLanguage();
