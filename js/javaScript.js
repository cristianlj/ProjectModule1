//Criar divs aqui no JS


let body = document.getElementsByTagName('body');
let divContainer = document.createElement('DIV');
let header = document.createElement('HEADER');

body[0].appendChild(header);
body[0].appendChild(divContainer);

divContainer.setAttribute('class', 'container')

let divBuilder = document.createElement('div');
divContainer.appendChild(divBuilder);
divBuilder.setAttribute('class', 'builder');


//Criação do 1 andar
let divFloor1 = document.createElement('div');
divBuilder.appendChild(divFloor1);
divFloor1.setAttribute('class', 'floor1');

// Criação das janelas 1 andar
let divFloor1Window1 = document.createElement('div');
divFloor1.appendChild(divFloor1Window1)
divFloor1Window1.setAttribute('class', 'windowFloor');

let divFloor1Window2 = document.createElement('div');
divFloor1.appendChild(divFloor1Window2)
divFloor1Window2.setAttribute('class', 'windowFloor');

let divFloor1Window3 = document.createElement('div');
divFloor1.appendChild(divFloor1Window3)
divFloor1Window3.setAttribute('class', 'windowFloor');

let divFloor1Window4 = document.createElement('div');
divFloor1.appendChild(divFloor1Window4)
divFloor1Window4.setAttribute('class', 'windowFloor');


//Criação do 2 andar
let divFloor2 = document.createElement('div');
divBuilder.appendChild(divFloor2);
divFloor2.setAttribute('class', 'floor2');

// Criação das janelas 2 andar
let divFloor2Window1 = document.createElement('div');
divFloor2.appendChild(divFloor2Window1)
divFloor2Window1.setAttribute('class', 'windowFloor');

let divFloor2Window2 = document.createElement('div');
divFloor2.appendChild(divFloor2Window2)
divFloor2Window2.setAttribute('class', 'windowFloor');

let divFloor2Window3 = document.createElement('div');
divFloor2.appendChild(divFloor2Window3)
divFloor2Window3.setAttribute('class', 'windowFloor');

let divFloor2Window4 = document.createElement('div');
divFloor2.appendChild(divFloor2Window4)
divFloor2Window4.setAttribute('class', 'windowFloor');


//Criação do 3 andar
let divFloor3 = document.createElement('div');
divBuilder.appendChild(divFloor3);
divFloor3.setAttribute('class', 'floor3');

// Criação das janelas 1 andar
let divFloor3Window1 = document.createElement('div');
divFloor3.appendChild(divFloor3Window1)
divFloor3Window1.setAttribute('class', 'windowFloor');

let divFloor3Window2 = document.createElement('div');
divFloor3.appendChild(divFloor3Window2)
divFloor3Window2.setAttribute('class', 'windowFloor');

let divFloor3Window3 = document.createElement('div');
divFloor3.appendChild(divFloor3Window3)
divFloor3Window3.setAttribute('class', 'windowFloor');

let divFloor3Window4 = document.createElement('div');
divFloor3.appendChild(divFloor3Window4)
divFloor3Window4.setAttribute('class', 'windowFloor');

//Criação do 4 andar
let divFloor4 = document.createElement('div');
divBuilder.appendChild(divFloor4);
divFloor4.setAttribute('class', 'floor4');

let divFloor4Window1 = document.createElement('div');
divFloor4.appendChild(divFloor4Window1)
divFloor4Window1.setAttribute('class', 'windowFloor');

let divFloor4Window2 = document.createElement('div');
divFloor4.appendChild(divFloor4Window2)
divFloor4Window2.setAttribute('class', 'windowFloor');

let divFloor4Window3 = document.createElement('div');
divFloor4.appendChild(divFloor4Window3)
divFloor4Window3.setAttribute('class', 'windowFloor');

let divFloor4Window4 = document.createElement('div');
divFloor4.appendChild(divFloor4Window4)
divFloor4Window4.setAttribute('class', 'windowFloor');


//Criação do 5 andar
let divFloor5 = document.createElement('div');
divBuilder.appendChild(divFloor5);
divFloor5.setAttribute('class', 'floor5');

// Criação das janelas 5 andar
let divFloor5Window1 = document.createElement('div');
divFloor5.appendChild(divFloor5Window1)
divFloor5Window1.setAttribute('class', 'windowFloor');
divFloor5Window1.setAttribute('id', 'divFloor5Window1');

let divFloor5Window2 = document.createElement('div');
divFloor5.appendChild(divFloor5Window2)
divFloor5Window2.setAttribute('class', 'windowFloor');
divFloor5Window2.setAttribute('id', 'divFloor5Window2');


let divFloor5Window3 = document.createElement('div');
divFloor5.appendChild(divFloor5Window3)
divFloor5Window3.setAttribute('class', 'windowFloor');
divFloor5Window3.setAttribute('id', 'divFloor5Window3');


let divFloor5Window4 = document.createElement('div');
divFloor5.appendChild(divFloor5Window4)
divFloor5Window4.setAttribute('class', 'windowFloor');
divFloor5Window4.setAttribute('id', 'divFloor5Window4');



let footer = document.createElement('footer');
let p = document.createElement('p');
body[0].appendChild(footer);
footer.appendChild(p);
let button = document.createElement('button');
button.innerText = "Start";
p.appendChild(button);
button.onclick = selectWindowFire;




// Random para escolher a janela, chamar função passando qual janela
function selectWindowFire() {
    let windowsArray = document.querySelectorAll('.windowFloor');
    var randElement = windowsArray[Math.floor(Math.random() * windowsArray.length)];
    randElement.classList.toggle('hidden');
    randElement.addEventListener("mouseenter", function (event) {
        event.target.style.backgroundColor = "purple";
        setTimeout(function () {
            event.target.style.backgroundColor = "greenyellow";
        }, 1000);
    }, false);
    randElement.addEventListener("mouseover", function (event) {
        event.target.style.backgroundColor = "greenyellow";
        setTimeout(function () {
            event.target.style.backgroundColor = "";
        }, 0);
    }, false);

}



// let windows = document.querySelectorAll('.windowFloor');

// let test = document.getElementById('divFloor5Window4');
// test.addEventListener("mouseenter", function (event) {
//     event.target.style.backgroundColor = "purple";
//     setTimeout(function () {
//         event.target.style.backgroundColor = "";
//     }, 1000);
// }, false);

// test.addEventListener("mouseover", function (event) {
//     event.target.style.backgroundColor = "orange";
//     setTimeout(function () {
//         event.target.style.backgroundColor = "";
//     }, 2000);
// }, false);




window.onload = function () {
    //Criar as divs
    // selectWindowFire();
};



// // //Criação do html
//  let body = document.getElementsByTagName('body');

// // //create header
//  let header = document.createElement('HEADER');

//  body[0].appendChild(header);

// // // create picture element 
//  let picture = document.createElement('picture');
//  let img = document.createElement("IMG");
// // //console.log(img);

//  img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5_DI_DVtX_PimksPNFR4o5M5A5-c5XpXt1FR5GP-7MxpKtXceIg';
//  picture.appendChild(img);

// let nav = document.createElement('NAV');
// //
// header.appendChild(picture);
// header.appendChild(nav);

// let ul = document.createElement('ul');
// let li1 = document.createElement('li');
// let li2 = document.createElement('li');
// let li3 = document.createElement('li');

// nav.appendChild(ul);
// ul.appendChild(li1);
// ul.appendChild(li2);
// ul.appendChild(li3);

// let lis = document.querySelectorAll('li');

// lis[0].innerText = "Item 1";
// lis[1].innerText = "Item 2";
// lis[2].innerText = "Item 3";




// // section

// let section1 = document.createElement('section');
// let h1 = document.createElement('h1');
// body[0].appendChild(section1);
// section1.appendChild(h1);



// let section2 = document.createElement('section');

// let div1 = document.createElement('div');
// let div2 = document.createElement('div');
// let div3 = document.createElement('div');

// body[0].appendChild(section2);
// section2.appendChild(div1);
// section2.appendChild(div2);
// section2.appendChild(div3);

// div1.innerText = 'Div Card';
// div2.innerText = 'Div Card';
// div3.innerText = 'Div Card';

// section2.setAttribute('class', 'cards');

















