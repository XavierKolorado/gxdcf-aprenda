const progressStorageKey = 'gxdcf-aprenda-progress-v1';

const curriculum = {
    logic: {
        name: 'Lógica com Portugol',
        level: 'Iniciante',
        description: 'Uma introdução opcional aos fundamentos da programação com pseudocódigo em português.',
        modules: [
            { name: '1. Introdução aos algoritmos', lessons: [{
                id: 'algoritmos', title: 'O que é um algoritmo?', duration: '6 min',
                paragraphs: [
                    'Um algoritmo é uma sequência finita e organizada de passos para resolver um problema. Uma receita, por exemplo, descreve ações em uma ordem para chegar a um resultado.',
                    'Programar é expressar esses passos de forma que uma pessoa ou um computador consiga segui-los. Antes de escrever código, identifique o objetivo, as entradas e o resultado esperado.',
                    'Os exemplos desta trilha usam uma representação didática de Portugol. Ela é pseudocódigo em português e não necessariamente corresponde à sintaxe exata de uma ferramenta específica.'
                ],
                code: 'INÍCIO\\n  escrever "Olá, mundo!"\\nFIM',
                exercise: { type: 'choice', prompt: 'Qual descrição melhor representa um algoritmo?', options: ['Uma sequência ordenada de passos para resolver um problema', 'Um tipo de computador', 'Uma linguagem que só funciona na internet'], answer: 0, explanation: 'Um algoritmo organiza passos finitos para produzir uma solução.' }
            }] },
            { name: '2. Variáveis e tipos de dados', lessons: [{
                id: 'variaveis', title: 'Guardando informações', duration: '7 min',
                paragraphs: ['Uma variável é um nome associado a um valor que o algoritmo pode consultar ou alterar. Dê nomes que revelem o significado do dado.', 'Os tipos ajudam a representar informações diferentes: inteiro para contagens, real para valores com casas decimais, texto para palavras e lógico para verdadeiro ou falso.'],
                code: 'INÍCIO\\n  idade: inteiro <- 16\\n  nome: texto <- "Lia"\\n  altura: real <- 1.65\\n  estudante: lógico <- verdadeiro\\nFIM',
                exercise: { type: 'fill', prompt: 'Complete a declaração para guardar uma idade inteira: idade: ____ <- 18', answer: 'inteiro', explanation: 'O tipo inteiro representa números sem parte decimal.' }
            }] },
            { name: '3. Entrada e saída de dados', lessons: [{
                id: 'entrada-saida', title: 'Conversando com o algoritmo', duration: '6 min',
                paragraphs: ['A entrada fornece informações ao programa; a saída apresenta um resultado. Em pseudocódigo, leia pode representar a entrada e escreva, a saída.', 'Separar entrada, processamento e saída facilita entender e testar um algoritmo.'],
                code: 'INÍCIO\\n  escrever "Qual é o seu nome?"\\n  ler nome\\n  escrever "Olá, ", nome\\nFIM',
                exercise: { type: 'choice', prompt: 'Qual instrução representa a leitura de uma informação fornecida pelo usuário?', options: ['escrever', 'ler', 'fim'], answer: 1, explanation: 'A instrução ler representa a entrada de dados neste pseudocódigo didático.' }
            }] },
            { name: '4. Operadores', lessons: [{
                id: 'operadores', title: 'Cálculos e comparações', duration: '8 min',
                paragraphs: ['Operadores aritméticos fazem cálculos: +, -, * e /. Operadores relacionais comparam valores e produzem um resultado lógico: =, <> , <, >, <= e >=.', 'O resultado de uma comparação pode ser usado em uma condição. Por exemplo, idade >= 18 será verdadeiro quando idade for pelo menos 18.'],
                code: 'soma <- 7 + 3\\nmetade <- soma / 2\\nmaior_de_idade <- idade >= 18',
                exercise: { type: 'challenge', prompt: 'Qual é o resultado da expressão 10 > 4?', answer: 'verdadeiro', explanation: 'Dez é maior que quatro, então a comparação resulta em verdadeiro.' }
            }] },
            { name: '5. Condicionais', lessons: [{
                id: 'condicionais', title: 'Tomando decisões', duration: '7 min',
                paragraphs: ['Uma condicional escolhe quais instruções executar com base em uma expressão lógica. Use se para o caso verdadeiro e senao para uma alternativa.', 'Teste as duas possibilidades: uma decisão deve tratar o caso esperado e, quando necessário, os demais casos.'],
                code: 'se nota >= 7 então\\n  escrever "Aprovado"\\nsenao\\n  escrever "Continue praticando"\\nfim_se',
                exercise: { type: 'fill', prompt: 'Complete: se chuva então levar_guarda_chuva senao ____', answer: 'seguir sem guarda chuva|seguir sem guarda-chuva|nao levar guarda chuva|não levar guarda-chuva', explanation: 'Quando a condição chuva é falsa, o bloco senao representa o caminho alternativo.' }
            }] },
            { name: '6. Laços de repetição', lessons: [{
                id: 'repeticao', title: 'Repetindo tarefas', duration: '8 min',
                paragraphs: ['Laços executam um trecho mais de uma vez. Use um laço contado quando souber quantas repetições são necessárias; use enquanto quando a repetição depender de uma condição.', 'Atualize a condição durante o laço para que ele possa terminar. Uma condição que nunca muda pode criar uma repetição infinita.'],
                code: 'para numero de 1 até 3 faça\\n  escrever numero\\nfim_para',
                exercise: { type: 'choice', prompt: 'Quantas vezes o corpo do laço de 1 até 3 é executado?', options: ['2 vezes', '3 vezes', '4 vezes'], answer: 1, explanation: 'O intervalo inclui 1, 2 e 3: são três execuções.' }
            }] },
            { name: '7. Vetores', lessons: [{
                id: 'vetores', title: 'Coleções em sequência', duration: '7 min',
                paragraphs: ['Um vetor guarda vários valores relacionados em uma sequência, acessados por uma posição (índice). Algumas linguagens começam a contagem em zero e outras em um; confira a convenção da ferramenta usada.', 'Neste exemplo didático, as posições começam em 1.'],
                code: 'notas <- [8, 9, 7]\\nescrever notas[1]  // primeiro valor: 8',
                exercise: { type: 'challenge', prompt: 'No vetor [4, 6, 9], considerando a primeira posição como 1, qual valor está na posição 2?', answer: '6', explanation: 'A segunda posição contém o valor 6.' }
            }] },
            { name: '8. Funções e procedimentos', lessons: [{
                id: 'funcoes', title: 'Organizando em blocos reutilizáveis', duration: '8 min',
                paragraphs: ['Uma função reúne uma tarefa e pode devolver um resultado. Um procedimento também nomeia uma tarefa, mas neste modelo não precisa devolver valor.', 'Parâmetros permitem que o bloco receba informações e seja reutilizado com diferentes valores.'],
                code: 'função dobro(valor: inteiro): inteiro\\n  retorne valor * 2\\nfim_função\\n\\nescrever dobro(5)  // 10',
                exercise: { type: 'fill', prompt: 'Uma função pode devolver um resultado usando a instrução ____.', answer: 'retorne|retornar', explanation: 'Neste pseudocódigo didático, retorne entrega o resultado da função.' }
            }] },
            { name: '9. Desafios de lógica', lessons: [{
                id: 'desafios', title: 'Juntando as ideias', duration: '8 min',
                paragraphs: ['Para resolver um desafio, escreva os passos antes do código: descubra quais dados entram, como transformá-los e o que deve ser apresentado.', 'Reveja as condições de limite e experimente exemplos pequenos para conferir o raciocínio.'],
                code: 'INÍCIO\\n  ler numero\\n  se numero % 2 = 0 então\\n    escrever "par"\\n  senao\\n    escrever "ímpar"\\n  fim_se\\nFIM',
                exercise: { type: 'challenge', prompt: 'Um número é par quando o resto da divisão por 2 é 0. O número 12 é par ou ímpar?', answer: 'par', explanation: '12 dividido por 2 tem resto zero, então é par.' }
            }] }
        ]
    },
    python: {
        name: 'Python',
        level: 'Curso inicial',
        description: 'Fundamentos práticos para começar a resolver problemas com Python.',
        modules: [
            { name: '1. Primeiros passos', lessons: [{
                id: 'primeiro-programa', title: 'Seu primeiro programa', duration: '6 min',
                paragraphs: ['Python é uma linguagem conhecida por sua sintaxe legível. Um programa executa instruções na ordem em que aparecem.', 'A função print apresenta informações na saída. Os exemplos são código para estudo: esta plataforma não executa o código que você digita.'],
                code: 'print("Olá, mundo!")',
                exercise: { type: 'choice', prompt: 'Qual função apresenta uma mensagem no terminal em Python?', options: ['input()', 'print()', 'show()'], answer: 1, explanation: 'print() escreve valores na saída do programa.' }
            }] },
            { name: '2. Variáveis e tipos', lessons: [{
                id: 'py-variaveis', title: 'Variáveis e tipos básicos', duration: '8 min',
                paragraphs: ['Atribua um valor a um nome usando =. Python identifica o tipo a partir do valor atribuído; entre os tipos comuns estão int, float, str e bool.', 'Escolha nomes descritivos e use aspas para textos. O operador = atribui um valor; == compara dois valores.'],
                code: 'nome = "Lia"\\nidade = 16\\naltura = 1.65\\nestudante = True',
                exercise: { type: 'fill', prompt: 'Complete para exibir a variável nome: ____ (nome)', answer: 'print', explanation: 'A chamada print(nome) apresenta o valor armazenado na variável.' }
            }] },
            { name: '3. Entrada e saída', lessons: [{
                id: 'py-entrada', title: 'Lendo dados', duration: '7 min',
                paragraphs: ['input() lê texto digitado pelo usuário. Para usar a resposta como número, converta-a explicitamente com int() ou float().', 'Ao converter entrada, considere que o valor digitado pode não estar no formato esperado. Validação de entradas será importante em programas maiores.'],
                code: 'nome = input("Seu nome: ")\\nprint(f"Olá, {nome}!")\\nidade = int(input("Sua idade: "))',
                exercise: { type: 'choice', prompt: 'Qual conversão transforma um texto numérico em número inteiro?', options: ['str()', 'int()', 'bool()'], answer: 1, explanation: 'int() converte um valor compatível para inteiro.' }
            }] },
            { name: '4. Operadores e expressões', lessons: [{
                id: 'py-operadores', title: 'Calculando e comparando', duration: '8 min',
                paragraphs: ['Python oferece +, -, * e / para operações aritméticas. // faz divisão inteira e % calcula o resto.', 'Comparações como ==, !=, < e >= produzem True ou False e podem orientar uma decisão.'],
                code: 'total = 7 + 3\\nresto = 10 % 3\\nmaior = total > 8',
                exercise: { type: 'challenge', prompt: 'Qual valor a expressão 17 % 5 produz?', answer: '2', explanation: '17 dividido por 5 deixa resto 2.' }
            }] },
            { name: '5. Condicionais', lessons: [{
                id: 'py-condicoes', title: 'Decisões com if', duration: '8 min',
                paragraphs: ['Use if, elif e else para escolher um caminho. Os dois-pontos iniciam um bloco e a indentação define quais instruções pertencem a ele.', 'Condições podem ser combinadas com and, or e not.'],
                code: 'nota = 8\\nif nota >= 7:\\n    print("Aprovado")\\nelse:\\n    print("Continue praticando")',
                exercise: { type: 'fill', prompt: 'Complete a condição: if idade ____ 18:', answer: '>=', explanation: 'O operador >= verifica se idade é maior ou igual a 18.' }
            }] },
            { name: '6. Laços de repetição', lessons: [{
                id: 'py-repeticao', title: 'Repetindo com for e while', duration: '9 min',
                paragraphs: ['for percorre itens de uma sequência. range(inicio, fim) gera números até, mas sem incluir, o limite fim.', 'while repete enquanto uma condição for verdadeira. Atualize os valores envolvidos para que o laço termine quando esperado.'],
                code: 'for numero in range(1, 4):\\n    print(numero)\\n\\ncontador = 0\\nwhile contador < 3:\\n    contador += 1',
                exercise: { type: 'challenge', prompt: 'Quantos números range(1, 5) gera?', answer: '4|quatro', explanation: 'São os números 1, 2, 3 e 4; o limite final não entra.' }
            }] },
            { name: '7. Listas', lessons: [{
                id: 'py-listas', title: 'Trabalhando com listas', duration: '8 min',
                paragraphs: ['Listas agrupam valores em uma sequência. Em Python, o primeiro índice é 0; len(lista) informa quantos itens ela contém.', 'Use append() para adicionar ao final e percorra itens com for quando precisar processar cada valor.'],
                code: 'frutas = ["pera", "uva"]\\nfrutas.append("maçã")\\nprint(frutas[0])  # pera',
                exercise: { type: 'choice', prompt: 'Qual é o índice do primeiro item de uma lista Python?', options: ['0', '1', '-1'], answer: 0, explanation: 'Em Python, a indexação começa em zero.' }
            }] },
            { name: '8. Funções', lessons: [{
                id: 'py-funcoes', title: 'Criando funções', duration: '9 min',
                paragraphs: ['def define uma função. Parâmetros recebem valores e return devolve um resultado para quem chamou a função.', 'Uma função pequena, com nome claro, ajuda a reaproveitar e testar uma tarefa.'],
                code: 'def dobro(valor):\\n    return valor * 2\\n\\nresultado = dobro(5)  # 10',
                exercise: { type: 'fill', prompt: 'Complete a palavra-chave que devolve o resultado: ____ valor * 2', answer: 'return', explanation: 'return encerra a função e devolve o valor indicado.' }
            }] },
            { name: '9. Desafios e revisão', lessons: [{
                id: 'py-desafios', title: 'Desafio: contar itens', duration: '10 min',
                paragraphs: ['Use uma variável acumuladora para somar valores durante uma repetição. Comece com um valor inicial adequado e atualize-o a cada item.', 'Antes de programar, experimente o algoritmo com uma lista curta e calcule o resultado esperado à mão.'],
                code: 'numeros = [2, 4, 6]\\ntotal = 0\\nfor numero in numeros:\\n    total += numero\\nprint(total)  # 12',
                exercise: { type: 'challenge', prompt: 'Qual será a saída para a lista [3, 5, 2] somando todos os itens?', answer: '10', explanation: '3 + 5 + 2 resulta em 10.' }
            }] }
        ]
    },
    javascript: {
        name: 'JavaScript',
        level: 'Trilha introdutória',
        description: 'Um percurso inicial pela sintaxe essencial de JavaScript. O conteúdo ainda é introdutório.',
        modules: [
            { name: '1. Primeiros passos', lessons: [{
                id: 'js-primeiro-programa', title: 'Seu primeiro programa', duration: '5 min',
                paragraphs: ['JavaScript é usada em páginas web e também em outros ambientes. Uma instrução simples pode apresentar uma mensagem no console.', 'Os exemplos ajudam a estudar a sintaxe; não há execução de código digitado pelo aluno nesta plataforma.'],
                code: 'console.log("Olá, mundo!");',
                exercise: { type: 'choice', prompt: 'Qual método apresenta uma mensagem no console em JavaScript?', options: ['console.log()', 'print()', 'System.out.println()'], answer: 0, explanation: 'console.log() escreve uma mensagem no console.' }
            }] },
            { name: '2. Variáveis e valores', lessons: [{
                id: 'js-variaveis', title: 'Variáveis com const e let', duration: '6 min',
                paragraphs: ['Use const quando não pretende reatribuir o nome; use let quando o valor precisará ser reatribuído. JavaScript tem tipos como number, string e boolean.', 'Prefira nomes que expliquem o propósito de cada valor.'],
                code: 'const nome = "Lia";\\nlet pontos = 0;\\npontos = pontos + 1;',
                exercise: { type: 'fill', prompt: 'Complete para declarar um nome que não será reatribuído: ____ nome = "Lia";', answer: 'const', explanation: 'const declara uma ligação que não pode ser reatribuída.' }
            }] },
            { name: '3. Condições e repetição', lessons: [{
                id: 'js-condicoes', title: 'Decisões com if e else', duration: '7 min',
                paragraphs: ['if executa um bloco quando uma condição é verdadeira; else define uma alternativa. Use comparações para produzir condições claras.', 'Laços como for e while permitem repetir instruções. Esta trilha apresenta os conceitos básicos e não pretende ser um curso completo de JavaScript.'],
                code: 'const nota = 8;\\nif (nota >= 7) {\\n  console.log("Aprovado");\\n} else {\\n  console.log("Continue praticando");\\n}',
                exercise: { type: 'challenge', prompt: 'Se nota vale 6 e a condição é nota >= 7, qual bloco será executado?', answer: 'else', explanation: '6 não é maior nem igual a 7, então a condição é falsa e o bloco else será escolhido.' }
            }] }
        ]
    },
    java: {
        name: 'Java',
        level: 'Trilha introdutória',
        description: 'Uma introdução à estrutura e aos conceitos essenciais de Java.',
        modules: [
            { name: '1. Primeiros passos', lessons: [{
                id: 'java-primeiro-programa', title: 'A estrutura de um programa Java', duration: '6 min',
                paragraphs: ['Java organiza o código em classes. Um programa de console começa sua execução pelo método main.', 'A sintaxe inclui chaves para delimitar blocos e ponto e vírgula ao final de instruções. O exemplo é para leitura e não é executado nesta plataforma.'],
                code: 'class Main {\\n    public static void main(String[] args) {\\n        System.out.println("Olá, mundo!");\\n    }\\n}',
                exercise: { type: 'choice', prompt: 'Qual método apresenta uma linha no console Java?', options: ['System.out.println()', 'console.log()', 'print()'], answer: 0, explanation: 'System.out.println() apresenta o valor e encerra a linha.' }
            }] },
            { name: '2. Variáveis e tipos', lessons: [{
                id: 'java-variaveis', title: 'Tipos e variáveis', duration: '6 min',
                paragraphs: ['Em Java, declare o tipo junto com o nome da variável. int representa inteiros, double números decimais e String textos.', 'O tipo declarado restringe quais valores podem ser atribuídos à variável.'],
                code: 'int idade = 18;\\ndouble altura = 1.72;\\nString nome = "Lia";\\nboolean ativo = true;',
                exercise: { type: 'fill', prompt: 'Complete para guardar um número inteiro: ____ idade = 18;', answer: 'int', explanation: 'int é o tipo primitivo usado para números inteiros.' }
            }] },
            { name: '3. Condições e repetição', lessons: [{
                id: 'java-condicoes', title: 'Decisões com if e else', duration: '7 min',
                paragraphs: ['Uma condição if escolhe um bloco quando sua expressão é verdadeira. else define o caminho alternativo.', 'Java também oferece laços como for e while para repetir instruções. Esta é uma trilha inicial, não um curso completo da linguagem.'],
                code: 'int nota = 8;\\nif (nota >= 7) {\\n    System.out.println("Aprovado");\\n} else {\\n    System.out.println("Continue praticando");\\n}',
                exercise: { type: 'challenge', prompt: 'Se nota vale 6, qual mensagem este exemplo apresenta?', answer: 'continue praticando', explanation: 'A condição nota >= 7 é falsa para 6; portanto, o bloco else é executado.' }
            }] }
        ]
    },
    csharp: {
        name: 'C#',
        level: 'Trilha introdutória',
        description: 'Conheça a estrutura básica de C# com uma sequência curta de aulas iniciais.',
        modules: [
            { name: '1. Primeiros passos', lessons: [{
                id: 'csharp-primeiro-programa', title: 'A saída do programa', duration: '5 min',
                paragraphs: ['C# é uma linguagem de programação de propósito geral. Em um programa de console, Console.WriteLine apresenta uma mensagem e quebra a linha.', 'O exemplo ilustra a sintaxe e não é executado pelo ambiente de aprendizagem.'],
                code: 'Console.WriteLine("Olá, mundo!");',
                exercise: { type: 'choice', prompt: 'Qual chamada escreve uma mensagem e uma nova linha em C#?', options: ['Console.WriteLine()', 'console.log()', 'System.out.println()'], answer: 0, explanation: 'Console.WriteLine() escreve o valor e inicia uma nova linha.' }
            }] },
            { name: '2. Variáveis e tipos', lessons: [{
                id: 'csharp-variaveis', title: 'Variáveis e tipos', duration: '6 min',
                paragraphs: ['Declare variáveis com tipos como int para inteiros, double para decimais, string para textos e bool para valores lógicos.', 'var permite inferir o tipo inicial, mas o tipo continua definido após a inferência.'],
                code: 'int idade = 18;\\ndouble altura = 1.72;\\nstring nome = "Lia";\\nbool ativo = true;',
                exercise: { type: 'fill', prompt: 'Complete para guardar um texto: ____ nome = "Lia";', answer: 'string', explanation: 'string representa uma sequência de caracteres em C#.' }
            }] },
            { name: '3. Condições e repetição', lessons: [{
                id: 'csharp-condicoes', title: 'Decisões com if e else', duration: '7 min',
                paragraphs: ['if executa um bloco quando uma condição é verdadeira; else trata o caso alternativo.', 'Laços como for e while repetem ações. Esta trilha oferece apenas uma introdução inicial à linguagem.'],
                code: 'int nota = 8;\\nif (nota >= 7)\\n{\\n    Console.WriteLine("Aprovado");\\n}\\nelse\\n{\\n    Console.WriteLine("Continue praticando");\\n}',
                exercise: { type: 'challenge', prompt: 'Se nota vale 6 e a condição é nota >= 7, qual bloco será executado?', answer: 'else', explanation: 'A condição resulta em falso, então o bloco else é executado.' }
            }] }
        ]
    }
};

function loadProgress() {
    try {
        const value = JSON.parse(localStorage.getItem(progressStorageKey) || '{}');
        if (!value || typeof value !== 'object' || Array.isArray(value)) {
            return { completedLessons: [], solvedExercises: [], trackProgress: {} };
        }
        return {
            ...value,
            completedLessons: Array.isArray(value.completedLessons) ? value.completedLessons : [],
            solvedExercises: Array.isArray(value.solvedExercises) ? value.solvedExercises : [],
            trackProgress: value.trackProgress && typeof value.trackProgress === 'object' ? value.trackProgress : {}
        };
    } catch (error) {
        console.warn('Não foi possível ler o progresso salvo.', error);
        return { completedLessons: [], solvedExercises: [], trackProgress: {} };
    }
}

let progress = loadProgress();
const trackSelect = document.getElementById('track-select');
const lessonNavigation = document.getElementById('lesson-navigation');
const lessonContent = document.getElementById('lesson-content');
const progressValue = document.getElementById('progress-value');
const progressBar = document.getElementById('progress-bar');
const progressTrack = document.querySelector('.progress-track');
const progressCount = document.getElementById('progress-count');
const currentTrackName = document.getElementById('current-track-name');
const completionStatus = document.getElementById('lesson-completion-status');
const previousButton = document.getElementById('previous-lesson');
const nextButton = document.getElementById('next-lesson');
const completeButton = document.getElementById('complete-lesson');

let currentTrack = 'python';
let currentLessonId = 'primeiro-programa';
let persistenceError = false;

Object.entries(curriculum).forEach(([id, track]) => {
    const option = document.createElement('option');
    option.value = id;
    option.textContent = track.name;
    trackSelect.append(option);
});

function allLessons(trackId) {
    return curriculum[trackId].modules.flatMap((module) => module.lessons);
}

function lessonKey(trackId, lessonId) {
    return `${trackId}:${lessonId}`;
}

function saveProgress() {
    try {
        localStorage.setItem(progressStorageKey, JSON.stringify(progress));
        persistenceError = false;
        return true;
    } catch (error) {
        console.error('Não foi possível salvar o progresso neste dispositivo.', error);
        persistenceError = true;
        return false;
    }
}

function updateTrackProgress() {
    Object.keys(curriculum).forEach((trackId) => {
        const lessons = allLessons(trackId);
        const completed = lessons.filter((lesson) => progress.completedLessons.includes(lessonKey(trackId, lesson.id))).length;
        progress.trackProgress[trackId] = lessons.length ? Math.round((completed / lessons.length) * 100) : 0;
    });
}

function renderProgress() {
    const lessons = allLessons(currentTrack);
    const completed = lessons.filter((lesson) => progress.completedLessons.includes(lessonKey(currentTrack, lesson.id))).length;
    const percentage = lessons.length ? Math.round((completed / lessons.length) * 100) : 0;
    progressValue.textContent = `${percentage}%`;
    progressBar.style.width = `${percentage}%`;
    progressTrack.setAttribute('aria-valuenow', String(percentage));
    progressCount.textContent = `${completed} de ${lessons.length} aulas concluídas`;
}

function setCurrentLesson(trackId, lessonId, updateUrl = true) {
    const lesson = allLessons(trackId).find((item) => item.id === lessonId);
    if (!lesson) {
        lessonId = allLessons(trackId)[0].id;
    }
    currentTrack = trackId;
    currentLessonId = lessonId;
    progress.selectedTrack = trackId;
    progress.lastLesson = lessonId;
    updateTrackProgress();
    saveProgress();

    if (updateUrl) {
        const url = new URL(window.location.href);
        url.searchParams.set('linguagem', currentTrack);
        url.searchParams.set('aula', currentLessonId);
        window.history.replaceState({}, '', url);
    }
    render();
}

function renderSidebar() {
    lessonNavigation.replaceChildren();
    curriculum[currentTrack].modules.forEach((module) => {
        const section = document.createElement('section');
        section.className = 'module-group';
        const heading = document.createElement('h2');
        heading.textContent = module.name;
        section.append(heading);
        const list = document.createElement('ul');
        module.lessons.forEach((lesson) => {
            const item = document.createElement('li');
            const button = document.createElement('button');
            const key = lessonKey(currentTrack, lesson.id);
            const isCurrent = lesson.id === currentLessonId;
            const isComplete = progress.completedLessons.includes(key);
            button.type = 'button';
            button.className = `lesson-link${isCurrent ? ' is-current' : ''}${isComplete ? ' is-complete' : ''}`;
            button.setAttribute('aria-current', isCurrent ? 'page' : 'false');
            button.dataset.lessonId = lesson.id;
            const label = document.createElement('span');
            label.textContent = lesson.title;
            const marker = document.createElement('span');
            marker.className = 'lesson-marker';
            marker.setAttribute('aria-label', isComplete ? 'Concluída' : '');
            marker.textContent = isComplete ? '✓' : '';
            button.append(label, marker);
            item.append(button);
            list.append(item);
        });
        section.append(list);
        lessonNavigation.append(section);
    });
}

function renderExercise(exercise, key) {
    const section = document.createElement('section');
    section.className = 'exercise-card';
    section.setAttribute('aria-labelledby', 'exercise-heading');
    const label = document.createElement('span');
    label.className = 'exercise-label';
    label.textContent = exercise.type === 'choice' ? 'MÚLTIPLA ESCOLHA' : exercise.type === 'fill' ? 'COMPLETE O CÓDIGO' : 'DESAFIO DE LÓGICA';
    const heading = document.createElement('h3');
    heading.id = 'exercise-heading';
    heading.textContent = 'Hora de praticar';
    const prompt = document.createElement('p');
    prompt.className = 'exercise-prompt';
    prompt.textContent = exercise.prompt;
    const form = document.createElement('form');
    form.className = 'exercise-form';
    form.noValidate = true;
    const feedback = document.createElement('p');
    feedback.className = 'exercise-feedback';
    feedback.setAttribute('aria-live', 'polite');

    if (exercise.type === 'choice') {
        const options = document.createElement('div');
        options.className = 'exercise-options';
        exercise.options.forEach((option, index) => {
            const labelElement = document.createElement('label');
            labelElement.className = 'exercise-option';
            const input = document.createElement('input');
            input.type = 'radio';
            input.name = 'answer';
            input.value = String(index);
            input.required = true;
            const text = document.createElement('span');
            text.textContent = option;
            labelElement.append(input, text);
            options.append(labelElement);
        });
        form.append(options);
    } else {
        const input = exercise.type === 'fill' ? document.createElement('input') : document.createElement('textarea');
        input.name = 'answer';
        input.autocomplete = 'off';
        input.required = true;
        input.setAttribute('aria-label', 'Sua resposta');
        input.placeholder = exercise.type === 'fill' ? 'Digite o trecho que falta' : 'Digite sua resposta';
        if (exercise.type === 'fill') input.type = 'text';
        form.append(input);
    }

    const submit = document.createElement('button');
    submit.className = 'button button-primary check-answer';
    submit.type = 'submit';
    submit.textContent = 'Verificar resposta';
    if (progress.solvedExercises.includes(key)) {
        submit.textContent = 'Resposta já conferida';
    }
    form.append(submit, feedback);
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        let correct;
        if (exercise.type === 'choice') {
            correct = Number(formData.get('answer')) === exercise.answer;
        } else {
            const response = String(formData.get('answer') || '').trim().toLocaleLowerCase('pt-BR');
            const acceptedAnswers = exercise.answer.split('|').map((answer) => answer.trim().toLocaleLowerCase('pt-BR'));
            correct = acceptedAnswers.includes(response);
        }

        feedback.className = `exercise-feedback ${correct ? 'feedback-success' : 'feedback-error'}`;
        feedback.textContent = correct
            ? `Muito bem! ${exercise.explanation}`
            : `Ainda não. ${exercise.explanation}`;
        if (correct && !progress.solvedExercises.includes(key)) {
            progress.solvedExercises.push(key);
            saveProgress();
            submit.textContent = 'Resposta correta ✓';
        }
    });
    section.append(label, heading, prompt, form);
    return section;
}

function renderLesson() {
    const lesson = allLessons(currentTrack).find((item) => item.id === currentLessonId);
    const module = curriculum[currentTrack].modules.find((item) => item.lessons.some((entry) => entry.id === lesson.id));
    const title = document.createElement('h1');
    title.className = 'lesson-title';
    title.textContent = lesson.title;
    const meta = document.createElement('div');
    meta.className = 'lesson-meta';
    meta.textContent = `${module.name} · ${lesson.duration} de leitura`;

    const intro = document.createElement('div');
    intro.className = 'lesson-intro';
    const trackName = document.createElement('span');
    trackName.className = 'track-kicker';
    trackName.textContent = `${curriculum[currentTrack].name} · ${curriculum[currentTrack].level}`;
    intro.append(trackName, title, meta);

    const body = document.createElement('div');
    body.className = 'lesson-theory';
    lesson.paragraphs.forEach((text) => {
        const paragraph = document.createElement('p');
        paragraph.textContent = text;
        body.append(paragraph);
    });

    const example = document.createElement('section');
    example.className = 'code-example';
    const exampleHeader = document.createElement('div');
    exampleHeader.className = 'code-example-header';
    const exampleLabel = document.createElement('span');
    exampleLabel.textContent = 'EXEMPLO';
    const languageLabel = document.createElement('span');
    languageLabel.textContent = currentTrack === 'logic' ? 'Portugol didático' : curriculum[currentTrack].name;
    const pre = document.createElement('pre');
    const code = document.createElement('code');
    code.textContent = lesson.code;
    pre.append(code);
    exampleHeader.append(exampleLabel, languageLabel);
    example.append(exampleHeader, pre);
    const exercise = renderExercise(lesson.exercise, lessonKey(currentTrack, lesson.id));
    lessonContent.replaceChildren(intro, body, example, exercise);
}

function render() {
    trackSelect.value = currentTrack;
    currentTrackName.textContent = curriculum[currentTrack].name;
    renderSidebar();
    renderProgress();
    renderLesson();

    const lessons = allLessons(currentTrack);
    const index = lessons.findIndex((lesson) => lesson.id === currentLessonId);
    previousButton.disabled = index <= 0;
    nextButton.disabled = index >= lessons.length - 1;
    const completed = progress.completedLessons.includes(lessonKey(currentTrack, currentLessonId));
    completeButton.textContent = completed ? 'Aula concluída ✓' : 'Marcar como concluída';
    completionStatus.textContent = persistenceError
        ? 'Não foi possível salvar o progresso.'
        : completed ? 'Aula concluída' : 'Aula em andamento';
    completionStatus.classList.toggle('status-error', persistenceError);
    lessonContent.setAttribute('aria-busy', 'false');
}

trackSelect.addEventListener('change', () => {
    const newTrack = trackSelect.value;
    setCurrentLesson(newTrack, allLessons(newTrack)[0].id);
});

lessonNavigation.addEventListener('click', (event) => {
    const button = event.target.closest('[data-lesson-id]');
    if (button) setCurrentLesson(currentTrack, button.dataset.lessonId);
});

function moveLesson(direction) {
    const lessons = allLessons(currentTrack);
    const nextIndex = lessons.findIndex((lesson) => lesson.id === currentLessonId) + direction;
    if (nextIndex >= 0 && nextIndex < lessons.length) {
        setCurrentLesson(currentTrack, lessons[nextIndex].id);
    }
}

previousButton.addEventListener('click', () => moveLesson(-1));
nextButton.addEventListener('click', () => moveLesson(1));
completeButton.addEventListener('click', () => {
    const key = lessonKey(currentTrack, currentLessonId);
    if (!progress.completedLessons.includes(key)) progress.completedLessons.push(key);
    updateTrackProgress();
    saveProgress();
    render();
});

const params = new URLSearchParams(window.location.search);
const requestedTrack = params.get('linguagem');
const requestedLesson = params.get('aula');
const initialTrack = curriculum[requestedTrack] ? requestedTrack : curriculum[progress.selectedTrack] ? progress.selectedTrack : 'python';
const initialLesson = allLessons(initialTrack).some((lesson) => lesson.id === requestedLesson)
    ? requestedLesson
    : initialTrack === progress.selectedTrack && allLessons(initialTrack).some((lesson) => lesson.id === progress.lastLesson)
        ? progress.lastLesson
        : allLessons(initialTrack)[0].id;

setCurrentLesson(initialTrack, initialLesson, !requestedTrack || !requestedLesson || initialTrack !== requestedTrack || initialLesson !== requestedLesson);
