const progressStorageKey = 'gxdcf-aprenda-progress-v1';

const curriculum = {
    logic: {
        name: 'Lógica com Portugol',
        level: 'Iniciante',
        description: 'Uma introdução opcional aos fundamentos da programação com pseudocódigo em português.',
        modules: [
            { name: '1. O que é lógica de programação?', lessons: [{
                id: 'logica-introducao', title: 'Pensar passo a passo', duration: '5 min',
                paragraphs: [
                    'Lógica de programação é organizar ideias em passos claros para resolver problemas. Você já usa lógica ao decidir o que levar para um passeio conforme o clima ou ao seguir instruções de uma receita.',
                    'Nesta trilha vamos representar esses passos com pseudocódigo em português. O objetivo é aprender a raciocinar sobre entradas, decisões e resultados antes de se preocupar com uma linguagem real.',
                    'A notação é uma representação didática inspirada em Portugol, não a sintaxe exata de VisuAlg, Portugol Studio ou de outra ferramenta.'
                ],
                code: 'PROBLEMA: decidir se levo um casaco\nPASSOS:\n  observar a temperatura\n  se estiver frio, levar um casaco',
                exercise: { type: 'choice', prompt: 'O que a lógica de programação ajuda a fazer?', options: ['Organizar passos e decisões para resolver problemas', 'Memorizar comandos sem entender o problema', 'Escolher uma cor para a tela'], answer: 0, explanation: 'A lógica organiza o raciocínio que depois pode ser expresso como programa.' }
            }] },
            { name: '2. Algoritmos e sequência de instruções', lessons: [{
                id: 'algoritmos', title: 'O que é um algoritmo?', duration: '6 min',
                paragraphs: [
                    'Um algoritmo é uma sequência finita e organizada de passos para resolver um problema. Uma receita, por exemplo, descreve ações em uma ordem para chegar a um resultado.',
                    'Programar é expressar esses passos de forma que uma pessoa ou um computador consiga segui-los. Antes de escrever código, identifique o objetivo, as entradas e o resultado esperado.',
                    'Os exemplos desta trilha usam uma representação didática de Portugol. Ela é pseudocódigo em português e não necessariamente corresponde à sintaxe exata de uma ferramenta específica.'
                ],
                code: 'INÍCIO\n  escrever "Olá, mundo!"\nFIM',
                exercise: { type: 'choice', prompt: 'Qual descrição melhor representa um algoritmo?', options: ['Uma sequência ordenada de passos para resolver um problema', 'Um tipo de computador', 'Uma linguagem que só funciona na internet'], answer: 0, explanation: 'Um algoritmo organiza passos finitos para produzir uma solução.' }
            }] },
            { name: '3. Variáveis e tipos de dados', lessons: [{
                id: 'variaveis', title: 'Guardando informações', duration: '7 min',
                paragraphs: ['Uma variável é um nome associado a um valor que o algoritmo pode consultar ou alterar. Dê nomes que revelem o significado do dado.', 'Os tipos ajudam a representar informações diferentes: inteiro para contagens, real para valores com casas decimais, texto para palavras e lógico para verdadeiro ou falso.'],
                code: 'INÍCIO\n  idade: inteiro <- 16\n  nome: texto <- "Lia"\n  altura: real <- 1.65\n  estudante: lógico <- verdadeiro\nFIM',
                exercise: { type: 'fill', prompt: 'Complete a declaração para guardar uma idade inteira: idade: ____ <- 18', answer: 'inteiro', explanation: 'O tipo inteiro representa números sem parte decimal.' }
            }] },
            { name: '4. Entrada e saída', lessons: [{
                id: 'entrada-saida', title: 'Conversando com o algoritmo', duration: '6 min',
                paragraphs: ['A entrada fornece informações ao programa; a saída apresenta um resultado. Em pseudocódigo, leia pode representar a entrada e escreva, a saída.', 'Separar entrada, processamento e saída facilita entender e testar um algoritmo.'],
                code: 'INÍCIO\n  escrever "Qual é o seu nome?"\n  ler nome\n  escrever "Olá, ", nome\nFIM',
                exercise: { type: 'choice', prompt: 'Qual instrução representa a leitura de uma informação fornecida pelo usuário?', options: ['escrever', 'ler', 'fim'], answer: 1, explanation: 'A instrução ler representa a entrada de dados neste pseudocódigo didático.' }
            }] },
            { name: '5. Operadores aritméticos e relacionais', lessons: [{
                id: 'operadores', title: 'Cálculos e comparações', duration: '8 min',
                paragraphs: ['Operadores aritméticos fazem cálculos: +, -, * e /. Operadores relacionais comparam valores e produzem um resultado lógico: =, <> , <, >, <= e >=.', 'O resultado de uma comparação pode ser usado em uma condição. Por exemplo, idade >= 18 será verdadeiro quando idade for pelo menos 18.'],
                code: 'soma <- 7 + 3\nmetade <- soma / 2\nmaior_de_idade <- idade >= 18',
                exercise: { type: 'challenge', prompt: 'Qual é o resultado da expressão 10 > 4?', answer: 'verdadeiro', explanation: 'Dez é maior que quatro, então a comparação resulta em verdadeiro.' }
            }] },
            { name: '6. Condicionais: se e senao', lessons: [{
                id: 'condicionais', title: 'Tomando decisões', duration: '7 min',
                paragraphs: ['Uma condicional escolhe quais instruções executar com base em uma expressão lógica. Use se para o caso verdadeiro e senao para uma alternativa.', 'Teste as duas possibilidades: uma decisão deve tratar o caso esperado e, quando necessário, os demais casos.'],
                code: 'se nota >= 7 então\n  escrever "Aprovado"\nsenao\n  escrever "Continue praticando"\nfim_se',
                exercise: { type: 'fill', prompt: 'Complete: se chuva então levar_guarda_chuva senao ____', answer: 'seguir sem guarda chuva|seguir sem guarda-chuva|nao levar guarda chuva|não levar guarda-chuva', explanation: 'Quando a condição chuva é falsa, o bloco senao representa o caminho alternativo.' }
            }] },
            { name: '7. Repetições', lessons: [{
                id: 'repeticao', title: 'Repetindo tarefas', duration: '8 min',
                paragraphs: ['Laços executam um trecho mais de uma vez. Use um laço contado quando souber quantas repetições são necessárias; use enquanto quando a repetição depender de uma condição.', 'Atualize a condição durante o laço para que ele possa terminar. Uma condição que nunca muda pode criar uma repetição infinita.'],
                code: 'para numero de 1 até 3 faça\n  escrever numero\nfim_para',
                exercise: { type: 'choice', prompt: 'Quantas vezes o corpo do laço de 1 até 3 é executado?', options: ['2 vezes', '3 vezes', '4 vezes'], answer: 1, explanation: 'O intervalo inclui 1, 2 e 3: são três execuções.' }
            }] },
            { name: '8. Vetores', lessons: [{
                id: 'vetores', title: 'Coleções em sequência', duration: '7 min',
                paragraphs: ['Um vetor guarda vários valores relacionados em uma sequência, acessados por uma posição (índice). Algumas linguagens começam a contagem em zero e outras em um; confira a convenção da ferramenta usada.', 'Neste exemplo didático, as posições começam em 1.'],
                code: 'notas <- [8, 9, 7]\nescrever notas[1]  // primeiro valor: 8',
                exercise: { type: 'challenge', prompt: 'No vetor [4, 6, 9], considerando a primeira posição como 1, qual valor está na posição 2?', answer: '6', explanation: 'A segunda posição contém o valor 6.' }
            }] },
            { name: '9. Funções e procedimentos', lessons: [{
                id: 'funcoes', title: 'Organizando em blocos reutilizáveis', duration: '8 min',
                paragraphs: ['Uma função reúne uma tarefa e pode devolver um resultado. Um procedimento também nomeia uma tarefa, mas neste modelo não precisa devolver valor.', 'Parâmetros permitem que o bloco receba informações e seja reutilizado com diferentes valores.'],
                code: 'função dobro(valor: inteiro): inteiro\n  retorne valor * 2\nfim_função\n\nescrever dobro(5)  // 10',
                exercise: { type: 'fill', prompt: 'Uma função pode devolver um resultado usando a instrução ____.', answer: 'retorne|retornar', explanation: 'Neste pseudocódigo didático, retorne entrega o resultado da função.' }
            }] },
            { name: '10. Desafios de lógica', lessons: [{
                id: 'desafios', title: 'Juntando as ideias', duration: '8 min',
                paragraphs: ['Para resolver um desafio, escreva os passos antes do código: descubra quais dados entram, como transformá-los e o que deve ser apresentado.', 'Reveja as condições de limite e experimente exemplos pequenos para conferir o raciocínio.'],
                code: 'INÍCIO\n  ler numero\n  se numero % 2 = 0 então\n    escrever "par"\n  senao\n    escrever "ímpar"\n  fim_se\nFIM',
                exercise: { type: 'challenge', prompt: 'Um número é par quando o resto da divisão por 2 é 0. O número 12 é par ou ímpar?', answer: 'par', explanation: '12 dividido por 2 tem resto zero, então é par.' }
            }] }
        ]
    },
    python: {
        name: 'Python',
        level: 'Curso inicial',
        description: 'Fundamentos práticos para começar a resolver problemas com Python.',
        modules: [
            { name: '1. Introdução ao Python', lessons: [{
                id: 'py-introducao', title: 'Conhecendo Python', duration: '6 min',
                paragraphs: [
                    'Python é uma linguagem de programação de propósito geral, usada em automação, análise de dados, aplicações web e ensino. Sua sintaxe procura deixar visível a estrutura do raciocínio.',
                    'Um programa é uma sequência de instruções que transforma dados em resultados. Nesta trilha vamos começar com saídas simples e, aos poucos, combinar variáveis, condições e repetições.',
                    'A plataforma apresenta exemplos para leitura e exercícios com respostas verificadas; ela não executa o código escrito pelo estudante.'
                ],
                code: 'mensagem = "Estou começando a programar"\nprint(mensagem)',
                exercise: { type: 'choice', prompt: 'Qual afirmação descreve melhor a proposta desta trilha?', options: ['Aprender conceitos e praticar Python passo a passo', 'Executar qualquer código digitado diretamente nesta página', 'Aprender apenas a decorar palavras-chave'], answer: 0, explanation: 'A trilha ensina conceitos progressivamente por meio de exemplos e exercícios validados.' }
            }] },
            { name: '2. print() e comentários', lessons: [{
                id: 'primeiro-programa', title: 'Seu primeiro programa', duration: '6 min',
                paragraphs: ['A função print() apresenta valores na saída do programa. O texto entre aspas é uma string; cada chamada a print() normalmente encerra a saída com uma nova linha.', 'Um comentário começa com # e serve para explicar uma decisão ou contexto a quem lê o código. Python ignora o comentário ao executar o programa. Escreva comentários úteis, não uma tradução óbvia de cada linha.', 'Os exemplos são código para estudo: esta página não executa o código que você digita.'],
                code: '# Apresenta uma saudação\nprint("Olá, mundo!")\nprint("Python em português")',
                exercise: { type: 'fill', prompt: 'Complete a função que mostra o texto na saída: ____("Olá!")', answer: 'print', explanation: 'print() apresenta o texto informado. As aspas delimitam a string.' }
            }] },
            { name: '3. Variáveis e tipos de dados', lessons: [{
                id: 'py-variaveis', title: 'Variáveis e tipos básicos', duration: '8 min',
                paragraphs: ['Atribua um valor a um nome usando =. Python identifica o tipo a partir do valor atribuído; entre os tipos comuns estão int, float, str e bool.', 'Escolha nomes descritivos e use aspas para textos. O operador = atribui um valor; == compara dois valores.'],
                code: 'nome = "Lia"\nidade = 16\naltura = 1.65\nestudante = True',
                exercise: { type: 'fill', prompt: 'Complete para exibir a variável nome: ____ (nome)', answer: 'print', explanation: 'A chamada print(nome) apresenta o valor armazenado na variável.' }
            }] },
            { name: '4. input() e conversão de tipos', lessons: [{
                id: 'py-entrada', title: 'Lendo dados', duration: '7 min',
                paragraphs: ['input() lê texto digitado pelo usuário. Para usar a resposta como número, converta-a explicitamente com int() ou float().', 'Ao converter entrada, considere que o valor digitado pode não estar no formato esperado. Validação de entradas será importante em programas maiores.'],
                code: 'nome = input("Seu nome: ")\nprint(f"Olá, {nome}!")\nidade = int(input("Sua idade: "))',
                exercise: { type: 'choice', prompt: 'Qual conversão transforma um texto numérico em número inteiro?', options: ['str()', 'int()', 'bool()'], answer: 1, explanation: 'int() converte um valor compatível para inteiro.' }
            }] },
            { name: '5. Operadores', lessons: [{
                id: 'py-operadores', title: 'Calculando e comparando', duration: '8 min',
                paragraphs: ['Python oferece +, -, * e / para operações aritméticas. // faz divisão inteira e % calcula o resto.', 'Comparações como ==, !=, < e >= produzem True ou False e podem orientar uma decisão.'],
                code: 'total = 7 + 3\nresto = 10 % 3\nmaior = total > 8',
                exercise: { type: 'short', prompt: 'Qual valor a expressão 17 % 5 produz?', answer: '2', explanation: '17 dividido por 5 deixa resto 2; o operador % devolve esse resto.' }
            }] },
            { name: '6. Condicionais', lessons: [{
                id: 'py-condicoes', title: 'Decisões com if', duration: '8 min',
                paragraphs: ['Use if, elif e else para escolher um caminho. Os dois-pontos iniciam um bloco e a indentação define quais instruções pertencem a ele.', 'Condições podem ser combinadas com and, or e not.'],
                code: 'nota = 8\nif nota >= 7:\n    print("Aprovado")\nelse:\n    print("Continue praticando")',
                exercise: { type: 'fill', prompt: 'Complete a condição: if idade ____ 18:', answer: '>=', explanation: 'O operador >= verifica se idade é maior ou igual a 18.' }
            }] },
            { name: '7. Laços while e for', lessons: [{
                id: 'py-repeticao', title: 'Repetindo com for e while', duration: '9 min',
                paragraphs: ['for percorre itens de uma sequência. range(inicio, fim) gera números até, mas sem incluir, o limite fim.', 'while repete enquanto uma condição for verdadeira. Atualize os valores envolvidos para que o laço termine quando esperado.'],
                code: 'for numero in range(1, 4):\n    print(numero)\n\ncontador = 0\nwhile contador < 3:\n    contador += 1',
                exercise: { type: 'challenge', prompt: 'Quantos números range(1, 5) gera?', answer: '4|quatro', explanation: 'São os números 1, 2, 3 e 4; o limite final não entra.' }
            }] },
            { name: '8. Listas', lessons: [{
                id: 'py-listas', title: 'Trabalhando com listas', duration: '8 min',
                paragraphs: ['Listas agrupam valores em uma sequência. Em Python, o primeiro índice é 0; len(lista) informa quantos itens ela contém.', 'Use append() para adicionar ao final e percorra itens com for quando precisar processar cada valor.'],
                code: 'frutas = ["pera", "uva"]\nfrutas.append("maçã")\nprint(frutas[0])  # pera',
                exercise: { type: 'choice', prompt: 'Qual é o índice do primeiro item de uma lista Python?', options: ['0', '1', '-1'], answer: 0, explanation: 'Em Python, a indexação começa em zero.' }
            }] },
            { name: '9. Funções', lessons: [{
                id: 'py-funcoes', title: 'Criando funções', duration: '9 min',
                paragraphs: ['def define uma função. Parâmetros recebem valores e return devolve um resultado para quem chamou a função.', 'Uma função pequena, com nome claro, ajuda a reaproveitar e testar uma tarefa.'],
                code: 'def dobro(valor):\n    return valor * 2\n\nresultado = dobro(5)  # 10',
                exercise: { type: 'fill', prompt: 'Complete a palavra-chave que devolve o resultado: ____ valor * 2', answer: 'return', explanation: 'return encerra a função e devolve o valor indicado.' }
            }] },
            { name: '10. Desafios práticos', lessons: [{
                id: 'py-desafios', title: 'Desafio: contar itens', duration: '10 min',
                paragraphs: ['Use uma variável acumuladora para somar valores durante uma repetição. Comece com um valor inicial adequado e atualize-o a cada item.', 'Antes de programar, experimente o algoritmo com uma lista curta e calcule o resultado esperado à mão.'],
                code: 'numeros = [2, 4, 6]\ntotal = 0\nfor numero in numeros:\n    total += numero\nprint(total)  # 12',
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
                code: 'const nome = "Lia";\nlet pontos = 0;\npontos = pontos + 1;',
                exercise: { type: 'fill', prompt: 'Complete para declarar um nome que não será reatribuído: ____ nome = "Lia";', answer: 'const', explanation: 'const declara uma ligação que não pode ser reatribuída.' }
            }] },
            { name: '3. Condições e repetição', lessons: [{
                id: 'js-condicoes', title: 'Decisões com if e else', duration: '7 min',
                paragraphs: ['if executa um bloco quando uma condição é verdadeira; else define uma alternativa. Use comparações para produzir condições claras.', 'Laços como for e while permitem repetir instruções. Esta trilha apresenta os conceitos básicos e não pretende ser um curso completo de JavaScript.'],
                code: 'const nota = 8;\nif (nota >= 7) {\n  console.log("Aprovado");\n} else {\n  console.log("Continue praticando");\n}',
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
                code: 'class Main {\n    public static void main(String[] args) {\n        System.out.println("Olá, mundo!");\n    }\n}',
                exercise: { type: 'choice', prompt: 'Qual método apresenta uma linha no console Java?', options: ['System.out.println()', 'console.log()', 'print()'], answer: 0, explanation: 'System.out.println() apresenta o valor e encerra a linha.' }
            }] },
            { name: '2. Variáveis e tipos', lessons: [{
                id: 'java-variaveis', title: 'Tipos e variáveis', duration: '6 min',
                paragraphs: ['Em Java, declare o tipo junto com o nome da variável. int representa inteiros, double números decimais e String textos.', 'O tipo declarado restringe quais valores podem ser atribuídos à variável.'],
                code: 'int idade = 18;\ndouble altura = 1.72;\nString nome = "Lia";\nboolean ativo = true;',
                exercise: { type: 'fill', prompt: 'Complete para guardar um número inteiro: ____ idade = 18;', answer: 'int', explanation: 'int é o tipo primitivo usado para números inteiros.' }
            }] },
            { name: '3. Condições e repetição', lessons: [{
                id: 'java-condicoes', title: 'Decisões com if e else', duration: '7 min',
                paragraphs: ['Uma condição if escolhe um bloco quando sua expressão é verdadeira. else define o caminho alternativo.', 'Java também oferece laços como for e while para repetir instruções. Esta é uma trilha inicial, não um curso completo da linguagem.'],
                code: 'int nota = 8;\nif (nota >= 7) {\n    System.out.println("Aprovado");\n} else {\n    System.out.println("Continue praticando");\n}',
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
                code: 'int idade = 18;\ndouble altura = 1.72;\nstring nome = "Lia";\nbool ativo = true;',
                exercise: { type: 'fill', prompt: 'Complete para guardar um texto: ____ nome = "Lia";', answer: 'string', explanation: 'string representa uma sequência de caracteres em C#.' }
            }] },
            { name: '3. Condições e repetição', lessons: [{
                id: 'csharp-condicoes', title: 'Decisões com if e else', duration: '7 min',
                paragraphs: ['if executa um bloco quando uma condição é verdadeira; else trata o caso alternativo.', 'Laços como for e while repetem ações. Esta trilha oferece apenas uma introdução inicial à linguagem.'],
                code: 'int nota = 8;\nif (nota >= 7)\n{\n    Console.WriteLine("Aprovado");\n}\nelse\n{\n    Console.WriteLine("Continue praticando");\n}',
                exercise: { type: 'challenge', prompt: 'Se nota vale 6 e a condição é nota >= 7, qual bloco será executado?', answer: 'else', explanation: 'A condição resulta em falso, então o bloco else é executado.' }
            }] }
        ]
    }
};

const lessonDetails = {
    logic: {
        'logica-introducao': {
            objective: 'Perceber que programar começa por dividir um problema em passos compreensíveis.',
            codeExplanation: 'A lista de passos descreve uma decisão do cotidiano sem depender de uma linguagem de programação. A mesma estratégia pode depois ser convertida em pseudocódigo.',
            commonErrors: ['Tentar escrever comandos antes de entender o problema.', 'Achar que existe uma única ordem correta sem considerar as condições.']
        },
        algoritmos: {
            objective: 'Identificar a ordem, a entrada e o resultado de um algoritmo simples.',
            codeExplanation: 'O algoritmo apresenta uma mensagem entre o início e o fim. Cada instrução tem uma posição e a ordem influencia o resultado.',
            commonErrors: ['Deixar um passo importante implícito.', 'Criar instruções sem uma condição de parada.']
        },
        variaveis: {
            objective: 'Escolher tipos de dados simples e guardar valores em variáveis com nomes claros.',
            codeExplanation: 'Cada nome recebe um valor e um tipo: idade é inteiro, nome é texto, altura é real e estudante é lógico.',
            commonErrors: ['Confundir texto numérico com um número.', 'Usar nomes que não explicam o conteúdo da variável.']
        },
        'entrada-saida': {
            objective: 'Distinguir informações lidas pelo algoritmo dos resultados apresentados ao usuário.',
            codeExplanation: 'O algoritmo pergunta pelo nome, lê a resposta e usa o valor recebido ao construir a saudação.',
            commonErrors: ['Tentar usar uma resposta antes de ler a entrada.', 'Confundir ler com escrever.']
        },
        operadores: {
            objective: 'Calcular expressões aritméticas e interpretar comparações relacionais.',
            codeExplanation: 'Primeiro calcula-se a soma 7 + 3; depois metade recebe o resultado dividido por 2. A comparação final produz um valor lógico.',
            commonErrors: ['Confundir =, usado para atribuir neste modelo, com uma comparação.', 'Esperar que uma comparação devolva um número em vez de verdadeiro ou falso.']
        },
        condicionais: {
            objective: 'Escrever caminhos alternativos com se e senao.',
            codeExplanation: 'A nota é comparada com 7. Se a condição for verdadeira, aparece a primeira mensagem; caso contrário, executa-se o bloco senao.',
            commonErrors: ['Esquecer de tratar o caso falso.', 'Comparar um valor com o operador inadequado.']
        },
        repeticao: {
            objective: 'Entender como um laço contado repete instruções e quando uma repetição termina.',
            codeExplanation: 'O laço visita os valores 1, 2 e 3 e escreve cada um uma vez.',
            commonErrors: ['Errar os limites da contagem.', 'Não alterar uma condição em um laço enquanto.']
        },
        vetores: {
            objective: 'Guardar uma sequência de valores e buscar um item pela posição.',
            codeExplanation: 'O vetor contém três notas. Nesta convenção didática, notas[1] seleciona o primeiro valor, 8.',
            commonErrors: ['Usar um índice que não existe.', 'Presumir que toda ferramenta começa os índices na mesma posição.']
        },
        funcoes: {
            objective: 'Diferenciar uma função que devolve valor de um procedimento que executa uma tarefa.',
            codeExplanation: 'A função recebe valor, multiplica por 2 e devolve o resultado; ao chamar dobro(5), o resultado é 10.',
            commonErrors: ['Esquecer de devolver o resultado.', 'Confundir o parâmetro da função com o valor passado na chamada.']
        },
        desafios: {
            objective: 'Combinar entrada, operador de resto e condicional para classificar um número.',
            codeExplanation: 'O resto da divisão por 2 é zero para números pares; a condição escolhe a mensagem correspondente.',
            commonErrors: ['Testar apenas um exemplo.', 'Classificar como par sem verificar o resto da divisão.']
        }
    },
    python: {
        'py-introducao': {
            objective: 'Conhecer a proposta da trilha e identificar uma variável como um nome associado a um valor.',
            codeExplanation: 'A atribuição associa uma frase ao nome mensagem; a segunda instrução apresenta esse valor. A sintaxe é legível, mas cada caractere continua tendo significado.',
            commonErrors: ['Achar que Python serve apenas para um tipo de projeto.', 'Confundir o exemplo didático com código executado por esta página.']
        },
        'primeiro-programa': {
            objective: 'Usar print() para apresentar texto e # para registrar um comentário.',
            codeExplanation: 'O comentário começa com # e não é tratado como uma instrução. Cada chamada print() apresenta uma string e termina a linha.',
            commonErrors: ['Esquecer as aspas que delimitam uma string.', 'Esperar que o comentário após # seja apresentado na tela.']
        },
        'py-variaveis': {
            objective: 'Criar variáveis e reconhecer int, float, str e bool por seus valores.',
            codeExplanation: 'Python infere o tipo: idade é inteiro, altura é decimal, nome é texto e estudante é booleano. A atribuição usa =.',
            commonErrors: ['Usar = para comparar valores; para comparação use ==.', 'Esquecer aspas no valor de texto ou usar True com letras minúsculas.']
        },
        'py-entrada': {
            objective: 'Ler um texto com input() e converter uma entrada numérica antes de fazer cálculos.',
            codeExplanation: 'input() retorna texto. int(...) converte o texto da idade em inteiro; a f-string inclui o nome na saudação.',
            commonErrors: ['Somar diretamente o texto retornado por input() a um número.', 'Digitar letras quando o programa espera um número.']
        },
        'py-operadores': {
            objective: 'Aplicar operações aritméticas, o operador de resto e comparações.',
            codeExplanation: 'total recebe 10, resto recebe 1 e maior recebe True, pois 10 é maior que 8.',
            commonErrors: ['Confundir / com //: o primeiro faz divisão comum.', 'Confundir =, que atribui, com ==, que compara.']
        },
        'py-condicoes': {
            objective: 'Selecionar um bloco usando if e else, com indentação consistente.',
            codeExplanation: 'Como 8 é maior ou igual a 7, Python executa o primeiro print. O bloco else fica reservado para notas menores.',
            commonErrors: ['Omitir os dois-pontos depois de if ou else.', 'Indentar o bloco de maneira inconsistente.']
        },
        'py-repeticao': {
            objective: 'Percorrer uma faixa com for e repetir enquanto uma condição for verdadeira.',
            codeExplanation: 'range(1, 4) percorre 1, 2 e 3. No while, o contador aumenta até deixar de ser menor que 3.',
            commonErrors: ['Esperar que range inclua o limite final.', 'Esquecer de atualizar o contador de um while.']
        },
        'py-listas': {
            objective: 'Criar uma lista, acrescentar um item e acessar posições começando pelo índice zero.',
            codeExplanation: 'append() adiciona maçã ao fim. frutas[0] seleciona o primeiro elemento, pera.',
            commonErrors: ['Acessar o primeiro item pelo índice 1.', 'Tentar acessar uma posição além do fim da lista.']
        },
        'py-funcoes': {
            objective: 'Definir uma função com def, receber um parâmetro e devolver um valor com return.',
            codeExplanation: 'dobro(5) associa 5 ao parâmetro valor, calcula 5 * 2 e devolve 10 para resultado.',
            commonErrors: ['Esquecer os dois-pontos ou a indentação do corpo.', 'Usar print() esperando que ele substitua return.']
        },
        'py-desafios': {
            objective: 'Usar uma variável acumuladora para somar os itens de uma lista.',
            codeExplanation: 'total começa em zero; cada passagem do for adiciona o próximo número. Ao final, print apresenta a soma 12.',
            commonErrors: ['Não inicializar total antes do laço.', 'Reiniciar total dentro do laço e perder as somas anteriores.']
        }
    },
    javascript: {
        'js-primeiro-programa': {
            objective: 'Apresentar uma mensagem no console usando a sintaxe própria de JavaScript.',
            codeExplanation: 'console.log recebe a string entre aspas e a apresenta no console; o ponto e vírgula encerra a instrução.',
            commonErrors: ['Usar print() como se fosse Python.', 'Esquecer as aspas que delimitam o texto.']
        },
        'js-variaveis': {
            objective: 'Diferenciar const, que impede reatribuição, de let, que permite atualizar um valor.',
            codeExplanation: 'nome é declarado com const. pontos é declarado com let e depois recebe o valor anterior acrescido de um.',
            commonErrors: ['Tentar reatribuir uma variável const.', 'Esquecer de declarar um nome antes de usá-lo.']
        },
        'js-condicoes': {
            objective: 'Avaliar uma condição e executar um dos blocos if ou else.',
            codeExplanation: 'A expressão nota >= 7 é verdadeira para 8, então console.log apresenta “Aprovado”.',
            commonErrors: ['Esquecer de agrupar o bloco com chaves.', 'Usar = em vez de um operador de comparação.']
        }
    },
    java: {
        'java-primeiro-programa': {
            objective: 'Reconhecer a classe e o método main que iniciam um programa Java.',
            codeExplanation: 'O método main é o ponto de entrada; System.out.println apresenta a mensagem e encerra a linha.',
            commonErrors: ['Alterar maiúsculas e minúsculas em nomes da API.', 'Esquecer chaves ou ponto e vírgula.']
        },
        'java-variaveis': {
            objective: 'Declarar variáveis Java usando tipos compatíveis com os valores.',
            codeExplanation: 'int, double, String e boolean mostram tipos distintos; String começa com letra maiúscula.',
            commonErrors: ['Escrever string minúsculo no lugar de String.', 'Atribuir texto sem aspas ou um valor incompatível com o tipo.']
        },
        'java-condicoes': {
            objective: 'Usar uma condição booleana para escolher entre dois blocos Java.',
            codeExplanation: 'Como 8 é maior ou igual a 7, a primeira chamada System.out.println é executada.',
            commonErrors: ['Esquecer as chaves do bloco.', 'Usar =, atribuição, no lugar de uma comparação.']
        }
    },
    csharp: {
        'csharp-primeiro-programa': {
            objective: 'Apresentar texto em um aplicativo de console C#.',
            codeExplanation: 'Console.WriteLine recebe a string e escreve seu conteúdo seguido por uma nova linha.',
            commonErrors: ['Usar console.log de JavaScript.', 'Alterar a grafia ou capitalização de WriteLine.']
        },
        'csharp-variaveis': {
            objective: 'Escolher tipos C# básicos para números, texto e valores lógicos.',
            codeExplanation: 'Cada declaração associa nome e tipo. O valor de nome está entre aspas; true é um valor lógico.',
            commonErrors: ['Confundir string com String sem considerar o estilo adotado.', 'Escrever true entre aspas e transformá-lo em texto.']
        },
        'csharp-condicoes': {
            objective: 'Usar if e else em C# para selecionar uma ação conforme uma comparação.',
            codeExplanation: 'A nota 8 satisfaz nota >= 7, então o bloco if escreve “Aprovado”.',
            commonErrors: ['Esquecer as chaves do bloco.', 'Comparar com = em vez de >=.']
        }
    }
};

const trackAliases = { portugol: 'logic' };
const lessonAliases = {
    logic: { introducao: 'logica-introducao' },
    python: {
        introducao: 'py-introducao',
        variaveis: 'py-variaveis',
        entrada: 'py-entrada',
        operadores: 'py-operadores',
        condicionais: 'py-condicoes',
        repeticao: 'py-repeticao',
        listas: 'py-listas',
        funcoes: 'py-funcoes',
        desafios: 'py-desafios'
    }
};

function normalizeTrackId(trackId) {
    const normalizedTrackId = trackAliases[trackId] || trackId;
    return curriculum[normalizedTrackId] ? normalizedTrackId : null;
}

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
        url.searchParams.set('linguagem', currentTrack === 'logic' ? 'portugol' : currentTrack);
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
    const exerciseLabels = {
        choice: 'MÚLTIPLA ESCOLHA',
        fill: 'COMPLETE O CÓDIGO',
        short: 'RESPOSTA CURTA',
        challenge: 'DESAFIO DE LÓGICA'
    };
    label.textContent = exerciseLabels[exercise.type] || 'EXERCÍCIO';
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

    const exerciseCompleted = progress.solvedExercises.includes(key);
    if (exerciseCompleted) {
        feedback.classList.add('feedback-success');
        feedback.textContent = `Exercício concluído. ${exercise.explanation}`;
    }

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
        const input = exercise.type === 'challenge' ? document.createElement('textarea') : document.createElement('input');
        input.name = 'answer';
        input.autocomplete = 'off';
        input.required = true;
        input.setAttribute('aria-label', 'Sua resposta');
        input.placeholder = exercise.type === 'fill' ? 'Digite o trecho que falta' : 'Digite sua resposta';
        if (exercise.type !== 'challenge') input.type = 'text';
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
        const submittedAnswer = formData.get('answer');
        const normalizedResponse = String(submittedAnswer || '').trim().toLocaleLowerCase('pt-BR');
        if (!normalizedResponse) {
            feedback.className = 'exercise-feedback feedback-error';
            feedback.textContent = 'Informe uma resposta antes de verificar.';
            return;
        }

        let correct;
        if (exercise.type === 'choice') {
            correct = submittedAnswer !== null && Number(submittedAnswer) === exercise.answer;
        } else {
            const acceptedAnswers = exercise.answer.split('|').map((answer) => answer.trim().toLocaleLowerCase('pt-BR'));
            correct = acceptedAnswers.includes(normalizedResponse);
        }

        feedback.className = `exercise-feedback ${correct ? 'feedback-success' : 'feedback-error'}`;
        if (correct) {
            feedback.textContent = `Muito bem! ${exercise.explanation}`;
        } else if (exercise.type === 'choice') {
            feedback.textContent = `Ainda não. A resposta correta é “${exercise.options[exercise.answer]}”. ${exercise.explanation}`;
        } else {
            feedback.textContent = `Ainda não. Uma resposta esperada é “${exercise.answer.split('|')[0]}”. ${exercise.explanation}`;
        }
        if (correct && !progress.solvedExercises.includes(key)) {
            progress.solvedExercises.push(key);
            const saved = saveProgress();
            submit.textContent = saved ? 'Resposta correta ✓' : 'Resposta correta';
            if (!saved) {
                feedback.textContent += ' A resposta foi conferida, mas não foi possível salvá-la neste dispositivo.';
            }
        }
    });
    section.append(label, heading, prompt, form);
    return section;
}

function renderLesson() {
    const lesson = allLessons(currentTrack).find((item) => item.id === currentLessonId);
    const module = curriculum[currentTrack].modules.find((item) => item.lessons.some((entry) => entry.id === lesson.id));
    const details = lessonDetails[currentTrack][lesson.id];
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

    const objective = document.createElement('section');
    objective.className = 'lesson-objective';
    const objectiveHeading = document.createElement('h2');
    objectiveHeading.textContent = 'Objetivo de aprendizagem';
    const objectiveText = document.createElement('p');
    objectiveText.textContent = details.objective;
    objective.append(objectiveHeading, objectiveText);

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
    const exampleExplanation = document.createElement('section');
    exampleExplanation.className = 'example-explanation';
    const exampleExplanationHeading = document.createElement('h2');
    exampleExplanationHeading.textContent = 'Como o exemplo funciona';
    const exampleExplanationText = document.createElement('p');
    exampleExplanationText.textContent = details.codeExplanation;
    exampleExplanation.append(exampleExplanationHeading, exampleExplanationText);

    const errors = document.createElement('section');
    errors.className = 'common-errors';
    const errorsHeading = document.createElement('h2');
    errorsHeading.textContent = 'Erros comuns';
    const errorsList = document.createElement('ul');
    details.commonErrors.forEach((text) => {
        const item = document.createElement('li');
        item.textContent = text;
        errorsList.append(item);
    });
    errors.append(errorsHeading, errorsList);

    const exercise = renderExercise(lesson.exercise, lessonKey(currentTrack, lesson.id));
    lessonContent.replaceChildren(intro, objective, body, example, exampleExplanation, errors, exercise);
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
const requestedTrack = normalizeTrackId(params.get('linguagem'));
const rawRequestedLesson = params.get('aula');
const requestedLesson = lessonAliases[requestedTrack]?.[rawRequestedLesson] || rawRequestedLesson;
const initialTrack = requestedTrack || normalizeTrackId(progress.selectedTrack) || 'python';
const initialLesson = allLessons(initialTrack).some((lesson) => lesson.id === requestedLesson)
    ? requestedLesson
    : initialTrack === progress.selectedTrack && allLessons(initialTrack).some((lesson) => lesson.id === progress.lastLesson)
        ? progress.lastLesson
        : allLessons(initialTrack)[0].id;

setCurrentLesson(initialTrack, initialLesson, !requestedTrack || !requestedLesson || initialTrack !== requestedTrack || initialLesson !== requestedLesson);
