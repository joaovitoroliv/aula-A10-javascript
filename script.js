//Usar Let e Const - Não usar VAR (oldschool)
/////////////////////// Loop dentro de um Array ///////////////////////
let groceries = ['milk', 'cocoa puffs','tea'];
for (let i= 0; i < groceries.length; i++){
    console.log(groceries[i]);
}

////////////////////Outro tipo de for (for-of)///////////////////////////
//Para cada 'item' do array groceries -> imprimir o 'item'
for (let item of groceries){
    console.log(item);
}

/////////////////////////// Mapas de Objetos - Mapas dentro dos objetos /////////////////////////////////
// Cada Objeto no Javascript é uma coleção de pares de propriedades-valor - vamos falar disso mais tarde
// Anyway, vc bota definir mapas criando objetos:

//Creates an empty object
const prices = {};
// Objeto com conteudo
// Propriedade: valor,
const scores = {
    'peach': 100,
    'mario': 88,
    'luigi': 91
};
//Como imprimir o valor 100
console.log(scores['peach']); //100
// Propriedade é sempre String, não precisa de 'aspas'
// Pode ser:
const telefone = {
    jao: 991347880,
    mae: 988384509,
    vó: 32120267
};
console.log(telefone['jao']); //991347880
console.log(telefone['mae']); //988384509
console.log(telefone['vó']); //32120267
// Outra forma de acessar: SEMPRE UTILIZAR DESSA FORMA
// ESSA FORMA NÃO SERÁ POSSIVEL CASO A 'PROPRIEDADE' SEJA UMA 'VARIÁVEL', IE, ESTEJA DENTRO DE UMA VARIÁVEL E NAO SEJA UMA STRING - NESTE CASO UTILIZAR [VARIÁVEL]
console.log(telefone.jao); //991347880
console.log(telefone.mae); //988384509
console.log(telefone.vó); //32120267
///////////////////////////////////////////////////////////////////////////////////////////////
//Como adicionar uma propriedade a um objeto: dando a ele um nome da propriedade e um valor
const scores2 = {
    peach:100,
    mario: 88,
    luigi: 91
};
scores2.toad = 72;
console.log(scores2);

let nome = 'wario';
scores2[nome] = 102;
console.log(scores2);
//Deletar propriedade
delete scores2.peach;
console.log(scores2);
/////////////////////////////////////// Iterar dentro de um Mapa usando For//////////////////////
//for (key in object){ key = nome da propriedade IN object = nome do objeto
    // ... do something with object[key]
//}
for (let nome in scores){
    console.log(nome + ' got ' + scores[nome]);
}
// NAO PODE USAR FOR...IN EM ARRAYS, APENAS EM OBJETO
// NAO PODE USAR FOR...OF EM OBJETO, APENAS EM ARRAY!

////////////////////////////////////////////////// EVENTOS!!!!!!!! //////////////////////////////////////////
// The DOM: Árvores e nós que correspondem a uma página HTML
// How do We Acess a DOM object from Javascript?
// - document.querySelector('css selector');
// - Esse código retorna o primeiro elemento que corresponde ao seletor CSS
// Problema: como selecionar todas as divs de uma página via JS?
// - document.querySelectorAll ('div');
// - Retorna todos os elementos que correspondem ao seletor css escolhido

// Exemplo:
// Returns the DOM object from the HTML element
// with id ="button", or null if none existis
let element = document.querySelector('#button')

// Returns a list of DOM objects containing all elements that have a "quote" class AND all elements that have a "comment" class:
let elementList = document.querySelectorAll('.quote, .comment');

///////////////////////////////// Adding Event Listeners /////////////////////////////////////////////////////

// Each Dom Object has the following method defined:
// CODE: addEventListener(event name, function name);
// - event name is the string name of the Javascript event you want to listen to - common ones: click, focus, blur etc
// - function name is the name of the Javascript function you want to execute when the event fires

// To stop listenning to an event, use removeEventListener:
// CODE: removeEventListener(event name, function name);
// - event name is the string name of the Javascript event to stop listening to
// - function name is the name of the Javascript function you no longer want to execute when the event fires

// How do we interact with the page?
// Os objetos do DOM eles possuem 'tipos'
// - DOM é uma árvore e um nó do DOM possui um tipo geral 'Node' (uma interace)
// - 'Element' implementa a interface 'Node'
// - Cada elemento HTML possui um especifico 'Element' derivado de uma classe, como 'HTMLImageElement', no caso de uma imagem.

/////////////////////////////////// Atributos e propriedades do DOM ///////////////////////////////
// Todo atributo de um elemento HTML é uma propriedade no objeto DOM respectivo
// Exemplo:

// No HTML:
// <img src ="puppy.png" />

// No Javascript:
// const element = document.querySelector('img');
// element.src = 'bear.png';

// ISSO É EQUIVALENTE MAS NEM SEMPRE!!!!!!!!!!!!!! DEVEMOS SEMPRE VERIFICAR O ELEMENTO HTML
// PARA VERIFICAR ISSO É NECESSÁRIO VERIFICAR, NESSE CASO, o 'HTMLImageElement'

////////////////////////////////////// EXEMPLO: PRESENTE ////////////////////////////////////////////
// Problema: redundancia ao pegar o elemento img
// Tenho que escrever duas vezes: 
// const image = document.querySelector('img');
// Como resolver?
// - Event.currentTarget
// CODE: 
// function openPresent (event){
 //   const image = event.currentTarget;
//}
// const image = document.querySelector('img');
// image.addEventListener('click', openPresent);
// o evento currentTarget é a referencia do objeto que está linkada com o evento, nesse caso, com a tag img que foi adicionada ao listener.
/////////////////////////////////// NAO CONFUNDA event.currentTarget com Event.target //////////////////////
// Event.target - "geralmente qualquer lugar que meu mouse possa clicar, ou passar o mouse por cima e etc"

//////////////////////////////////////////////// Algumas propriedades do objeto Elements
// id: o valor do atributo id, em forma de string
// innerHTML: todo o código HTML entre o inicio e o final de uma tag de um elemento, em forma de string
// textContent: conteudo de texto de um nó 
// classList: um objeto contendo as classes aplicadas ao elemento
// Exemplo:
// function openPresent (event){
//     // Pego a propria imagem com currentTarget e mudo ela com .src
//     const image = event.currentTarget;
//     image.src = 'https://media.giphy.com/media/4rIVbO4OaMTwZyR4Pi/giphy.gif'

//     // Mudar o titulo (seleciono h1) e mudo ele
//     const title = document.querySelector('h1');
//     title.textContent = 'Hooray!';

//     //Removo o event listener e done!
//     image.removeEventListener('click', openPresent);
// }
// //Recuperei a imagem e adicionei o ouvidor de evento
// const image = document.querySelector('img');
// image.addEventListener('click', openPresent);

//////////////////////////////////////////// Add Elements via DOM ///////////////////////////
// CODE: createElement e appendChild
// - document.createElement(tag string);
// - element.appendChild(element);
// Ou Então, quero criar um h1 usando innerHTML
// element.innerHTML = '<h1>Hooray!</h1>';
// MAS ISSO NAO É USUAL, QUESTOES DE SEGURANÇA!

/////////////////////////////////////////////// Remove elements via DOM ////////////////////////////////////////
// CODE: element.remove();
// Problema: Como remover tudo que está dentro da div:
// div.innerHTML = '';

//Exemplo do presente ainda:
// function openPresent (event){
//     //Criando um novo header h1
//     const newHeader = document.createElement('h1');
//     // Coloquei um conteudo no novo header que criei
//     newHeader.textContent = 'Hooray!';
//     //Criei uma imagem via create element
//     const newImage = document.createElement('img');
//     //Coloquei o endereço de onde ta a imagem
//     newImage.src = 'https://media.giphy.com/media/4rIVbO4OaMTwZyR4Pi/giphy.gif';

//     const container = document.querySelector('#container');
//     container.innerHTML = '';
//     container.appendChild(newHeader);
//     container.appendChild(newImage);
// }
// const image = document.querySelector('img');
// image.addEventListener('click', openPresent);

// Problema: clicamos no presente mas o texto que está em cima em h1 muda rapido mas a imagem demora
// Como resolver? 
// - display: none;
// O que ele faz?
// - tag é carregada mas não aparece na tela
// Porque fazer isso?
// - Sem display none ao abrir o presente precisamos de carregar a imagem e isso tem um delay entre o texto e a imagem