//cria variavel tipo constante; coloca objetos como 'pergunta'(as especificacoes que vao ser puxadas), no objeto pode incluir qualquer tipo de valor, seja numero, array ou string
const perguntas = [
    {
      pergunta: "Quantos dias tem uma semana?",
      respostas: [
        "5",
        "6",
        "7",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a capital do Brasil?",
      respostas: [
        "Rio de Janeiro",
        "São Paulo",
        "Brasília",
      ],
      correta: 2
    },
    {
      pergunta: "Quanto é 2 + 2?",
      respostas: [
        "3",
        "4",
        "5",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o planeta mais próximo do Sol?",
      respostas: [
        "Terra",
        "Vênus",
        "Mercúrio",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o maior animal terrestre?",
      respostas: [
        "Elefante",
        "Girafa",
        "Tigre",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a cor do céu em um dia ensolarado?",
      respostas: [
        "Azul",
        "Verde",
        "Vermelho",
      ],
      correta: 0
    },
    {
      pergunta: "Quantos meses tem mais de 26 dias?",
      respostas: [
        "1",
        "10",
        "Todos",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o metal mais precioso?",
      respostas: [
        "Ferro",
        "Ouro",
        "Prata",
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o maior país do mundo em área territorial?",
      respostas: [
        "Estados Unidos",
        "China",
        "Rússia",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a capital do Reino Unido?",
      respostas: [
        "Londres",
        "Paris",
        "Berlim",
      ],
      correta: 0
    },
  ];
  //cria uma variavel quiz puxando do html
  const quiz = document.querySelector('#quiz')
  //document
  //queryselector puxa elemento html
  
  //cria variavel puxando abaixo do template e nomeando como template
  const template = document.querySelector('template')
  
  
  const corretas = new Set()
  //variavel corretas adiciona conjunto set, que vai servir par armazenar a informacao de quantas acertou
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  //roda apenas uma vez na aplicacao
  
  
  // loop ou laço de repetição:
  for(const item of perguntas) {
    //inicia o loop para cada elemento do array da parte "perguntas"
    //item é uma variável que representa cada elemento do array
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  //textcontent ta mudando o conteudo
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      
      //clone node: ele clona todos os nós filhos e seus atributos também. Isso significa que ele cria uma cópia não apenas do elemento em si, mas também de todo o conteúdo dentro dele. (clona a porra toda)
      
      //dts
    
      dt.querySelector('span').textContent = resposta
  
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      //antes desse codigo, podia escolher apenas 1 para todas as questoes, agora cada questao pode escolher 1 input (é como se transformasse cada pergunta e resposta em 1 só, assim a bolinha nao é compartilhada)
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      //agora cada reposta tem 1 valor (como 0, 1, 2)
  
      dt.querySelector('input').onchange = (event) => {
        //onchange é como um observador, ele so ativa quando fizer uma interacao no input
  
  
       const estaCorreta = event.target.value == item.correta   //comparacao, ou vai ser verdadeira, ou vai ser falsa
       //criando variavel puxando o valor da questao que selecionamos e logo (==) comparando com a questao que realmente é correta, (event.target.value) é uma string, (item.correta) é um numero
       
       corretas.delete(item) //sem isso, quando altera o input por indecisao, ele nao vai ficar armazenando acertos (se acerta, mantem; se errar, tira)
       if(estaCorreta) {
         //se estiver correta, ele vai entrar nessa parte do {}
  
         
         corretas.add(item) //vai somando quantas acertou
         }
        
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        //agora armazena os acertos 0 de 10 kk
      }
      
      
      
      
      quizItem.querySelector('dl').appendChild(dt)
      //puxa todas as respostas da const "perguntas" (sempre a ultima linha)
    }
  
  quizItem.querySelector('dl dt').remove()
  //deleta/remove a "Resposta A" que o span do HTML tava tacando
  
    // coloca a pergunta na tela
  quiz.appendChild(quizItem)
  
  }