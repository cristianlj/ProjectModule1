//Criar divs aqui no JS



// objetos janelas com vários atributos
// let windowF = new Object();
// window.id = id;
// window.status = status;
// window.color = color;

let intervalIds = [];


let body = document.getElementsByTagName('body');
let divContainer = document.createElement('DIV');
let header = document.createElement('HEADER');

body[0].appendChild(header);
body[0].appendChild(divContainer);

divContainer.setAttribute('class', 'container')

let divBuilder = document.createElement('div');
divContainer.appendChild(divBuilder);
divBuilder.setAttribute('class', 'builder');

//Local onde ficam os dados do jogo
let divInfoMain = document.createElement('div');
divContainer.appendChild(divInfoMain);
divInfoMain.setAttribute('class', 'divInfoMain');

let divInfo = document.createElement('div');
divInfoMain.appendChild(divInfo);
divInfo.setAttribute('class', 'divInfo floor1');

let lblScore = document.createElement('label');
divInfo.appendChild(lblScore);
lblScore.innerText = "Score: 0"



let lblTimeGame = document.createElement('label');
divInfo.appendChild(lblTimeGame);
lblTimeGame.innerText = "Time Game: 0"






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

// Random para escolher a janela, chamar função passando qual janela
const selectWindowFire = () => {
    let windowsArray = document.querySelectorAll('.windowFloor');
    var randElement = windowsArray[Math.floor(Math.random() * windowsArray.length)];
    //  var randElement = windowsArray[1];
    if (randElement.classList.contains('windowFloor') && !randElement.classList.contains('onFire')) {
        randElement.classList.add('onFire');

        count = count + 1;
        let timer;
        let intervalId;

        randElement.onmouseover = (event) => {
            event.preventDefault();
            event.stopPropagation();
            timer = 0;
            intervalId = setInterval(() => {
                console.log(timer, event.target)
                timer++;
                if (timer > 30) {
                    clearInterval(intervalId)
                }
            }, 100);
            intervalIds.push(intervalId);
        };

        randElement.onmouseout = (event) => {
            event.stopPropagation();
            event.preventDefault();
            if (timer > 20) {
                addScore();
                event.target.classList.remove('onFire');
                event.target.onmouseover = null;
                event.target.onmouseout = null;

                clearInterval(intervalId)
            }
            else {
                console.log('count menor que 2s ', timer)
            };
        }
    }
}


let button = document.createElement('button');
button.innerText = "Start";
divInfoMain.appendChild(button);
button.setAttribute('class', 'button')
button.onclick = sortWindow;


let footer = document.createElement('footer');
let p = document.createElement('p');
body[0].appendChild(footer);
footer.appendChild(p);

let count = 0;
let score = 0;


function addScore() {

    if (score < 10) {
        score = score + 1;
        lblScore.innerText = "Score: " + score
    }
    else if (score < 5) {
        console.log('Você perdeu, atingiu ' + score + ' pontos.');
    }
    else {
        console.log('Você venceu, atingiu ' + score + ' pontos.');
    }
}




//Criar as divs
// selectWindowFire();
function sortWindow() {
    if (count <= 10) {
        selectWindowFire();
        lblTimeGame.innerText = "Time: " + (count - 1);
        setTimeout(sortWindow, 1000);
    }
    else {
        // finalzacao do jogo.
        intervalIds.forEach(function (intervalId) {
            clearInterval(intervalId);
            console.log(intervalIds)
            console.log('matou o interval', intervalId)
        });
        let windowsArray = document.querySelectorAll('.windowFloor');
        windowsArray.forEach(function (item) {
            item.onmouseover = null;
            item.onmouseout = null;
            item.classList.remove('onFire');
        })
        return;
    }

}

sortWindow();




















