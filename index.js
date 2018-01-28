( function () {
    'use strick';

let fullCard = ['6 \u2661','6 \u2662','6 \u2664','6 \u2663','7 \u2661','7 \u2662','7 \u2664','7 \u2663','8 \u2661','8 \u2662',
    '8 \u2664','8 \u2663','9 \u2661','9 \u2662','9 \u2664','9 \u2663','10 \u2661','10 \u2662','10 \u2664','10 \u2663','J \u2661',
    'J \u2662','J \u2664','J \u2663','D \u2661','D \u2662','D \u2664','D \u2663','B \u2661','B \u2662','B \u2664','B \u2663',
    'A \u2661','A \u2662','A \u2664','A \u2663'];

let suit = ['\u2661','\u2662','\u2664','\u2663'];
let button = document.getElementById('submit');
let play = document.getElementById('play');
let paragraf = document.querySelector('p');
let tab = document.querySelector('table');
let paste = document.getElementById('paste');
let player1 = [];
let player2 = [];
let trump = [];
let stroke1, stroke2;
let str1, str2;

    let score1 = 0;
    let score2 = 0
let result = score2 + ' : ' + score1;

    function shuffle(array) {         // функция тусовки колоды
        let currentIndex = array.length, temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;

        }
        return array;
    };

    shuffle(fullCard);  //выполняем функцию
    player2 = fullCard.splice(17,18);//каждому по пол колоде
    player1 = fullCard.splice(0,18);

    shuffle(suit);
    trump = suit.slice(0,1);
    console.log(trump);
    function getTable() {
        paragraf.align = "center";


        tab = document.createElement('table');  //создаём таблицу
        tab.width=580;
        tab.border=1;
        tab.align='center';
        paste.appendChild(tab);

        let rowInfo = tab.insertRow(0)
        let playInfo1 = rowInfo.insertCell(0);//в созданной строке добавляем столбец
        playInfo1.width="290";//указываем длину столбца равной 200 пикселей
        playInfo1.align="center";//указываем позиционирование по центру
        playInfo1.innerHTML = 'Игрок - ' + playerName1;//заполняем ячейку жирным текстом

        let playInfo2 = rowInfo.insertCell(0);//в созданной строке добавляем столбец
        playInfo2.width="290";//указываем длину столбца равной 200 пикселей
        playInfo2.align="center";//указываем позиционирование по центру
        playInfo2.innerHTML = 'Игрок - ' + playerName2;//заполняем ячейку жирным текстом
    }
    let playerName1 = String(prompt('Введите имя первого игрока'));
    let playerName2 = String(prompt('И ворого игрока'));

    getTable()

    //функцтя игры
    play.addEventListener('click', gogo)

        function gogo () {
        // по клику достаём последнюю карту обоих игроков
         stroke1 = player1.pop();
         stroke2 = player2.pop();

str1 = stroke1.split(' ');
str2 = stroke2.split(' ');


//записываем данные
        let row = tab.insertRow(-1)
        let cell1 = row.insertCell(-1);//в созданной строке добавляем столбец
        cell1.width="300";//указываем длину столбца равной 200 пикселей
        cell1.align="center";//указываем позиционирование по центру
        cell1.innerHTML = 'Карта второго игрокa - ' + stroke1;//заполняем ячейку жирным текстом

        let cell2 = row.insertCell(-1);//в созданной строке добавляем столбец
        cell2.width="300";//указываем длину столбца равной 200 пикселей
        cell2.align="center";//указываем позиционирование по центру
        cell2.innerHTML = 'Карта первого игрокa - ' + stroke2;//заполняем ячейку жирным текстом
//1 из козырей
if (trump[0] == str1[1] && trump[0] !== str2[1]){
    score1+=1;
    paragraf.innerHTML = 'Козырь - ' + trump[0] + '<br>' + score1 + ' : '+  score2;
}
            if (trump[0] !== str1[1]&&trump[0] === str2[1]){
                score2+=1;
                paragraf.innerHTML = 'Козырь - ' + trump[0] + '<br>' + score1 + ' : '+  score2;
            }

            // все без козыря
            if (trump[0] !== str1[1]&&trump[0] !== str2[1]){
                if(str1[0] == str2[0]){
                    score2+=1;
                    score1+=1;
                    paragraf.innerHTML = 'Козырь - ' + trump[0] + '<br>' + score1 + ' : '+  score2;
                }
                if(str1[0] > str2[0]){
                    score1+=1;
                    paragraf.innerHTML = 'Козырь - ' + trump[0] + '<br>' + score1 + ' : '+  score2;
                }
                if(str1[0] < str2[0]){
                    score2+=1;
                    paragraf.innerHTML = 'Козырь - ' + trump[0] + '<br>' + score1 + ' : '+  score2;
                }

                //все козыри
            }       if (trump[0] == str1[1]&&trump[0] == str2[1]){
                if(str1[0] == str2[0]){
                    score2+=1;
                    score1+=1;
                    paragraf.innerHTML = 'Козырь - ' + trump[0] + '<br>' + score1 + ' : '+  score2;
                }
                if(str1[0] > str2[0]){
                    score1+=1;
                    paragraf.innerHTML = 'Козырь - ' + trump[0] + '<br>' + score1 + ' : '+  score2;
                }
                if(str1[0] < str2[0]){
                    score2+=1;
                    paragraf.innerHTML = 'Козырь - ' + trump[0] + '<br>' + score1 + ' : '+  score2;
                }
            };




    };
























}());
