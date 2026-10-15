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
                    'Python é uma linguagem de programação de propósito geral. Ela aparece em automação, análise de dados, aplicações web e ensino. Sua sintaxe costuma ser legível, mas ainda exige atenção a nomes, aspas, parênteses e indentação.',
                    'Um programa é uma sequência de instruções que trabalha com dados para produzir um resultado. Nesta trilha, primeiro vamos ler pequenos programas e prever o resultado; depois combinaremos entrada, cálculos, decisões e repetições.',
                    'Os exemplos são código Python para estudo. Os exercícios verificam respostas por comparação no navegador: o código que você digitar não é executado.'
                ],
                code: 'mensagem = "Olá, Python!"\nprint(mensagem)',
                exercise: {
                    type: 'choice',
                    prompt: 'Considere as duas linhas do exemplo. O que aparece na saída quando a segunda linha é executada?',
                    options: ['Olá, Python!', 'mensagem', 'Nada: a atribuição não mostra o valor'],
                    answer: 0,
                    explanation: 'A variável mensagem guarda o texto; print(mensagem) apresenta o valor guardado.',
                    incorrectExplanation: 'Atribuir um valor guarda informação sem mostrá-la. A segunda linha pede que Python apresente o conteúdo da variável.'
                }
            }] },
            { name: '2. print() e comentários', lessons: [{
                id: 'primeiro-programa', title: 'Seu primeiro programa', duration: '6 min',
                paragraphs: [
                    'print() apresenta um ou mais valores. Texto literal precisa ficar entre aspas; o nome de uma variável, por outro lado, é escrito sem aspas para que Python procure o valor associado a ele.',
                    'Por padrão, cada chamada a print() termina com uma quebra de linha. Um comentário começa com # e ajuda a explicar uma intenção ou uma decisão que não está óbvia; Python ignora o comentário.',
                    'Prever a saída é uma forma útil de praticar leitura de código, mas este ambiente não executa o Python: o exercício abaixo compara a alternativa selecionada com a resposta definida.'
                ],
                code: 'cidade = "Recife"\nprint("Olá,", cidade)  # apresenta texto e valor\nprint("Bem-vinda!")',
                exercise: {
                    type: 'choice',
                    prompt: 'Qual é a saída, em duas linhas, deste exemplo?',
                    options: ['"Olá, Recife" e "Bem-vinda!" em linhas separadas', '"Olá, Recife" e "Bem-vinda!" na mesma linha', 'O nome cidade e o comentário também aparecem'],
                    answer: 1,
                    explanation: 'print apresenta o valor da variável sem suas aspas e termina cada chamada com uma nova linha. O comentário não aparece.',
                    incorrectExplanation: 'Acompanhe cada chamada separadamente: cidade é substituída pelo texto armazenado, o comentário é ignorado e o print padrão começa a próxima saída em outra linha.'
                }
            }] },
            { name: '3. Variáveis e tipos de dados', lessons: [{
                id: 'py-variaveis', title: 'Variáveis e tipos básicos', duration: '8 min',
                paragraphs: [
                    'Uma variável associa um nome a um valor. O sinal = faz uma atribuição: depois de pontos = 3, o nome pontos representa o inteiro 3. Em Python, não é preciso declarar o tipo antes; ele é inferido a partir do valor.',
                    'Quatro tipos comuns são int (inteiro), float (número com parte decimal), str (texto) e bool (True ou False). Aspas fazem parte da escrita de textos, enquanto números e valores lógicos não levam aspas.',
                    'Use nomes que expliquem o dado e mantenha a diferença entre atribuir (=) e comparar (==).'
                ],
                code: 'preco_unitario = 4.5\nquantidade = 3\nsubtotal = preco_unitario * quantidade\nproduto_disponivel = True',
                exercise: {
                    type: 'choice',
                    prompt: 'No exemplo, qual é o valor e o tipo de subtotal?',
                    options: ['13.5, float', '13.5, str', '"4.5 * 3", str'],
                    answer: 0,
                    explanation: '4.5 multiplicado por 3 resulta em 13.5, que é um número decimal (float).',
                    incorrectExplanation: 'Siga a atribuição: os nomes recebem valores numéricos, não o texto da expressão. Como o preço é decimal, a multiplicação também produz um valor decimal.'
                }
            }] },
            { name: '4. input() e conversão de tipos', lessons: [{
                id: 'py-entrada', title: 'Lendo dados', duration: '7 min',
                paragraphs: [
                    'input() mostra uma pergunta opcional e espera o usuário digitar uma resposta. O valor retornado é sempre texto (str), inclusive quando a pessoa digita algarismos.',
                    'Para fazer contas, converta o texto: int("14") produz o inteiro 14 e float("2.5") produz um decimal. A conversão só funciona se o texto tiver um formato numérico compatível; entradas inválidas precisam ser tratadas em programas mais completos.',
                    'A f-string f"Olá, {nome}" insere o valor de nome no texto. As chaves indicam uma expressão Python dentro da string.'
                ],
                code: 'resposta = input("Quantos livros você leu? ")\nquantidade = int(resposta)\nproximo_ano = quantidade + 1\nprint(f"Meta para o próximo ano: {proximo_ano}")',
                exercise: {
                    type: 'short',
                    prompt: 'Se a resposta digitada for "14", qual número será calculado para proximo_ano?',
                    answer: '15',
                    explanation: 'input() devolve o texto "14"; int converte para o número 14, e somar 1 resulta em 15.',
                    incorrectExplanation: 'Primeiro identifique a conversão: int transforma "14" em 14, então a soma é numérica (14 + 1), não uma concatenação de textos.'
                }
            }] },
            { name: '5. Operadores', lessons: [{
                id: 'py-operadores', title: 'Calculando e comparando', duration: '8 min',
                paragraphs: [
                    'Os operadores +, -, * e / fazem soma, subtração, multiplicação e divisão. // descarta a parte decimal da divisão; % devolve o resto. Parênteses deixam explícita a ordem desejada, e multiplicação/divisão são avaliadas antes de soma/subtração.',
                    'Operadores relacionais como ==, !=, <, <=, > e >= comparam valores e produzem bool: True ou False. O resultado pode ser guardado numa variável ou usado diretamente por uma condição.',
                    'Não confunda = (atribuição) com == (comparação).'
                ],
                code: 'valor = 2 + 3 * 4\natingiu_meta = valor >= 14\nprint(atingiu_meta)',
                exercise: {
                    type: 'short',
                    prompt: 'Sem executar o código, que valor booleano recebe atingiu_meta no exemplo? Responda True ou False.',
                    answer: 'true',
                    explanation: 'A multiplicação acontece primeiro: 3 * 4 = 12. Depois 2 + 12 = 14, e 14 >= 14 é True.',
                    incorrectExplanation: 'Respeite a precedência: faça a multiplicação antes da soma. Em seguida compare o resultado com 14; >= inclui também a igualdade.'
                }
            }] },
            { name: '6. Condicionais', lessons: [{
                id: 'py-condicoes', title: 'Decisões com if', duration: '8 min',
                paragraphs: [
                    'if avalia uma condição e executa seu bloco quando ela é verdadeira. elif testa outra condição apenas quando as anteriores foram falsas; else recebe os casos restantes. A ordem importa: Python usa o primeiro bloco cuja condição seja verdadeira.',
                    'Os dois-pontos abrem cada bloco e a indentação identifica as instruções dentro dele. and exige que duas condições sejam verdadeiras; or exige pelo menos uma; not inverte o valor lógico.',
                    'Ao criar faixas (por exemplo, níveis ou intervalos de nota), teste valores nos limites para confirmar que nenhum caso ficou de fora.'
                ],
                code: 'temperatura = 28\nif temperatura >= 30:\n    clima = "quente"\nelif temperatura >= 20:\n    clima = "agradável"\nelse:\n    clima = "frio"\nprint(clima)',
                exercise: {
                    type: 'choice',
                    prompt: 'Com temperatura igual a 20, qual valor fica em clima?',
                    options: ['"quente"', '"agradável"', '"frio"'],
                    answer: 1,
                    explanation: '20 não satisfaz temperatura >= 30, mas satisfaz temperatura >= 20; por isso, o elif seleciona "agradável".',
                    incorrectExplanation: 'Avalie os testes de cima para baixo. 20 falha no primeiro teste, mas atende ao limite inclusivo do elif (20 >= 20).'
                }
            }] },
            { name: '7. Laços while e for', lessons: [{
                id: 'py-repeticao', title: 'Repetindo com for e while', duration: '9 min',
                paragraphs: [
                    'for percorre cada item de uma sequência ou os valores produzidos por range(). Em range(inicio, fim), inicio entra e fim não entra; por isso range(1, 4) visita 1, 2 e 3.',
                    'while repete enquanto sua condição for verdadeira. É útil quando a quantidade de repetições depende de uma situação. Atualize no corpo os dados que influenciam a condição, para que o laço termine.',
                    'Use for quando a sequência ou quantidade é conhecida e while quando a repetição depende de uma condição. Antes de acompanhar a saída, anote o valor das variáveis a cada passagem.'
                ],
                code: 'soma_pares = 0\nfor numero in range(1, 5):\n    if numero % 2 == 0:\n        soma_pares += numero\n\ncontador = 3\nwhile contador > 0:\n    contador -= 1',
                exercise: {
                    type: 'challenge',
                    prompt: 'Ao final dos laços, quais valores têm soma_pares e contador? Responda no formato total,contador.',
                    answer: '6,0',
                    explanation: 'range(1, 5) visita 1, 2, 3 e 4; só 2 e 4 entram na soma, que resulta em 6. O while reduz contador de 3 até 0.',
                    incorrectExplanation: 'No for, filtre os valores pares da faixa (o 5 não entra) e some-os. No while, acompanhe contador: ele diminui uma unidade em cada passagem até a condição deixar de ser verdadeira.'
                }
            }] },
            { name: '8. Listas', lessons: [{
                id: 'py-listas', title: 'Trabalhando com listas', duration: '8 min',
                paragraphs: [
                    'Uma lista guarda vários valores em uma sequência que pode ser consultada e alterada. Os índices começam em zero: lista[0] é o primeiro item e lista[1] é o segundo. len(lista) informa quantos itens existem.',
                    'append(valor) acrescenta um item ao final da lista. Índices negativos contam a partir do fim: lista[-1] é o último elemento. Um índice inexistente causa IndexError, então confira o tamanho antes de acessar posições variáveis.',
                    'Um for pode percorrer os próprios valores da lista quando você precisa processar cada elemento.'
                ],
                code: 'tempos = [12, 9, 15]\ntempos.append(8)\nmelhora = tempos[0] - tempos[-1]\nprint(melhora)',
                exercise: {
                    type: 'short',
                    prompt: 'Depois do append, qual é o resultado de tempos[1] + tempos[-1]?',
                    answer: '17',
                    explanation: 'A lista fica [12, 9, 15, 8]. tempos[1] é 9, tempos[-1] é 8, e a soma é 17.',
                    incorrectExplanation: 'Atualize a lista após append antes de olhar os índices: o índice 1 continua apontando para o segundo item, e -1 aponta para o novo último item.'
                }
            }] },
            { name: '9. Funções', lessons: [{
                id: 'py-funcoes', title: 'Criando funções', duration: '9 min',
                paragraphs: [
                    'def cria uma função com um nome e parâmetros entre parênteses. O corpo é indentado. Parâmetros funcionam como nomes locais que recebem os argumentos informados na chamada.',
                    'return devolve um valor para o ponto em que a função foi chamada e encerra a execução dela. print() apenas apresenta algo; não substitui return quando outra parte do programa precisa usar o resultado.',
                    'Dividir uma solução em funções pequenas facilita reaproveitar e testar cada regra separadamente.'
                ],
                code: 'def calcular_troco(preco, valor_pago):\n    return valor_pago - preco\n\ntroco = calcular_troco(7, 10)\nprint(troco * 2)',
                exercise: {
                    type: 'short',
                    prompt: 'Qual valor é apresentado quando calcular_troco(8, 13) retorna o troco e esse resultado é multiplicado por 2?',
                    answer: '10',
                    explanation: 'A função devolve 13 - 8 = 5. A chamada usa esse retorno na multiplicação: 5 * 2 = 10.',
                    incorrectExplanation: 'Calcule primeiro o valor devolvido pela função usando os argumentos na ordem dos parâmetros; só depois aplique a multiplicação feita pelo código chamador.'
                }
            }] },
            { name: '10. Desafios práticos', lessons: [{
                id: 'py-desafios', title: 'Desafio: contar aprovações', duration: '12 min',
                paragraphs: [
                    'Este desafio combina valores digitados, conversão, comparação, função, lista, repetição e acumulador. Primeiro siga o programa à mão para entender cada etapa; depois, tente escrever uma solução semelhante no seu editor Python.',
                    'O corte é recebido como texto por input() e convertido para inteiro. A função aprovada decide se uma nota alcança esse corte. O for percorre todas as notas e o contador aumenta somente para as aprovadas.',
                    'O exercício abaixo é conferido comparando sua resposta com um valor esperado. Ele não roda o código Python nem executa o código que você escrever.'
                ],
                code: 'def foi_aprovada(nota, corte):\n    return nota >= corte\n\ncorte = int(input("Nota mínima: "))\nnotas = [5, 7, 10, 6]\naprovacoes = 0\nfor nota in notas:\n    if foi_aprovada(nota, corte):\n        aprovacoes += 1\nprint(aprovacoes)',
                exercise: {
                    type: 'challenge',
                    prompt: 'Se a pessoa digitar 6 como nota mínima, quantas notas da lista [5, 7, 10, 6] serão contadas como aprovadas?',
                    answer: '3',
                    explanation: 'int converte a entrada para 6. A função considera notas maiores ou iguais ao corte; 7, 10 e 6 passam, então o contador termina em 3.',
                    incorrectExplanation: 'Compare cada nota com o corte usando >=, que inclui a igualdade. Conte apenas as notas aprovadas: 5 fica abaixo de 6; as outras três atendem ao critério.'
                }
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
            objective: 'Conhecer a proposta da trilha e prever como uma instrução simples apresenta uma mensagem.',
            codeExplanation: 'A atribuição associa a string "Olá, Python!" ao nome mensagem. Em seguida, print recebe o nome da variável e apresenta seu valor.',
            commonErrors: ['Achar que Python serve apenas para um tipo de projeto.', 'Confundir o exemplo didático com código executado por esta página.']
        },
        'primeiro-programa': {
            objective: 'Usar print() para apresentar texto e # para registrar um comentário.',
            codeExplanation: 'A variável cidade guarda "Recife". print mostra o texto e o valor da variável; a próxima chamada produz uma nova linha. Tudo após # é comentário e não aparece.',
            commonErrors: ['Colocar o nome da variável entre aspas, o que mostraria o nome em vez de seu valor.', 'Esperar que o comentário após # apareça na saída.']
        },
        'py-variaveis': {
            objective: 'Criar variáveis e reconhecer int, float, str e bool; acompanhar como os tipos influenciam cálculos.',
            codeExplanation: 'preco_unitario guarda um float e quantidade guarda um int. O operador * calcula o subtotal 13.5; produto_disponivel guarda um bool.',
            commonErrors: ['Colocar aspas em um número que será usado em cálculos.', 'Usar = para comparar valores; para comparação use ==.']
        },
        'py-entrada': {
            objective: 'Ler texto com input(), convertê-lo para inteiro e usar o resultado em um cálculo.',
            codeExplanation: 'input() lê uma resposta como texto; int converte esse texto para número inteiro. A soma calcula a meta do ano seguinte e a f-string a inclui na mensagem.',
            commonErrors: ['Somar diretamente o texto retornado por input() a um número.', 'Esperar que int converta palavras como "dez" automaticamente em número.']
        },
        'py-operadores': {
            objective: 'Aplicar precedência aritmética e comparação para calcular um valor booleano.',
            codeExplanation: 'A multiplicação 3 * 4 acontece antes da soma, então valor fica 14. A comparação inclusiva >= torna atingiu_meta igual a True.',
            commonErrors: ['Fazer a soma antes da multiplicação sem parênteses.', 'Confundir =, que atribui, com ==, que compara.']
        },
        'py-condicoes': {
            objective: 'Selecionar um bloco com if, elif e else e entender a ordem das condições.',
            codeExplanation: 'O primeiro teste verifica se a temperatura é pelo menos 30. Se falhar, elif testa se é pelo menos 20. Os casos restantes chegam ao else.',
            commonErrors: ['Esquecer que elif só é avaliado quando os testes anteriores falham.', 'Omitir os dois-pontos ou indentar um bloco incorretamente.']
        },
        'py-repeticao': {
            objective: 'Filtrar valores em um for e acompanhar a condição de parada de um while.',
            codeExplanation: 'range(1, 5) visita 1, 2, 3 e 4; o if adiciona apenas os pares. O while reduz contador até que contador > 0 seja falso.',
            commonErrors: ['Esperar que range inclua o limite final.', 'Não atualizar uma variável usada na condição de while, criando um laço que não termina.']
        },
        'py-listas': {
            objective: 'Alterar uma lista e combinar índices positivos e negativos para calcular um valor.',
            codeExplanation: 'append acrescenta 8. O exemplo calcula a diferença entre o primeiro tempo e o último tempo da lista atualizada.',
            commonErrors: ['Esquecer que os índices começam em zero.', 'Presumir que append retorna uma nova lista; ele altera a lista existente.']
        },
        'py-funcoes': {
            objective: 'Definir uma função que calcula um valor e usar o retorno em outra expressão.',
            codeExplanation: 'calcular_troco recebe preço e valor pago, devolve a diferença, e a chamada usa esse resultado antes de multiplicá-lo por 2.',
            commonErrors: ['Inverter a ordem dos argumentos e obter um valor inesperado.', 'Usar print() esperando que ele substitua return.']
        },
        'py-desafios': {
            objective: 'Combinar conversão de entrada, comparação, função, lista, laço e acumulador para classificar notas.',
            codeExplanation: 'O corte é convertido para inteiro; a função compara cada nota com esse limite. O laço percorre a lista e aumenta aprovacoes somente quando a função retorna True.',
            commonErrors: ['Esquecer que input() fornece texto e comparar esse texto com números.', 'Não incluir uma nota igual ao corte quando a regra usa >=.']
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

function exerciseKey(trackId, lessonId) {
    const version = trackId === 'python' ? ':v2' : '';
    return `${lessonKey(trackId, lessonId)}${version}`;
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
    const validationNote = document.createElement('p');
    validationNote.className = 'exercise-validation-note';
    validationNote.textContent = 'O sistema compara sua resposta com a solução esperada; não executa código.';
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
            feedback.textContent = `Ainda não. ${exercise.incorrectExplanation || `A resposta correta é “${exercise.options[exercise.answer]}”. ${exercise.explanation}`}`;
        } else {
            feedback.textContent = `Ainda não. ${exercise.incorrectExplanation || `Uma resposta esperada é “${exercise.answer.split('|')[0]}”. ${exercise.explanation}`}`;
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
    section.append(label, heading, prompt, validationNote, form);
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

    const exercise = renderExercise(lesson.exercise, exerciseKey(currentTrack, lesson.id));
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
