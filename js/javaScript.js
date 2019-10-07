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

let button = document.createElement('button');
button.innerText = "Start";
divBuilder.appendChild(button);
button.onclick = selectWindowFire;


let footer = document.createElement('footer');
let p = document.createElement('p');
body[0].appendChild(footer);
footer.appendChild(p);

let count = 0;

// Random para escolher a janela, chamar função passando qual janela
function selectWindowFire() {
    let windowsArray = document.querySelectorAll('.windowFloor');
    var randElement = windowsArray[Math.floor(Math.random() * windowsArray.length)];
    //  var randElement = windowsArray[1];


    if (randElement.className == 'windowFloor') {
        randElement.classList.toggle('onFire');


        count = count + 1;
        console.log(count);


        randElement.onmouseover = function (event) {
            event.preventDefault();
            event.stopPropagation();

            event.target.style.backgroundColor = "purple";
            setTimeout(function () {
                count = count - 1;
                console.log(count);
                event.target.removeAttribute('style');
                randElement.classList.toggle('onFire');
                randElement.onmouseover = () => false;
            }, 500);
        };
    }
}


window.onload = function () {
    //Criar as divs
    // selectWindowFire();
    this.setInterval(function () {
        if (count < 10) {
            selectWindowFire();
        }
        else {
            return alert('Game Over');
        }
    }, 500);


};

















