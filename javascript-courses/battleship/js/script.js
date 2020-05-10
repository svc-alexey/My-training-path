let view = {
    // В HTML
    // Добавить сообщение
    displayMessage: function (msg) {
        var messageArea = document.getElementById("messageArea");
        messageArea.innerHTML = msg;
    },
    // Добавить класс hit
    displayHit: function (location) {
        let cell = document.getElementById(location);
        cell.setAttribute('class', 'hit');
    },
    // Добавить класс miss
    displayMiss: function (location) {
        let cell = document.getElementById(location);
        cell.setAttribute('class', 'miss'); // add class miss
    }
};

let model = {
    // Размер доски
    boardSize: 7,
    // Кол-во караблей
    numShips: 3,
    // Длина корабля
    shipLength: 3,
    // Кол-во потопленых
    shipsSunk: 0,

    // Массив локации кораблей
    ships: [{
            locations: ["", "", ""],
            hits: ["", "", ""]
        },
        {
            locations: ["", "", ""],
            hits: ["", "", ""]
        },
        {
            locations: ["", "", ""],
            hits: ["", "", ""]
        },
    ],

    //  Функция присвавает hit в массив ships
    fire: function (guess) {
        for (let i = 0; i < this.numShips; i++) {

            let ship = this.ships[i];

            let index = ship.locations.indexOf(guess); // object/props/method

            // Если уже была введена каманда
            if (ship.hits[index] === 'hit') {
                view.displayMessage('Oops,you already hit that locations');
                return true;
                // Если нет
            } else if (index >= 0) {
                ship.hits[index] = "hit";
                view.displayHit(guess);
                view.displayMessage("HIT!");
                // Если потопил
                if (this.isSunk(ship)) {
                    view.displayMessage("you sank my  battleship!");
                    this.shipsSunk++;
                }
                return true;
            }
        }
        view.displayMiss(guess);
        view.displayMessage("You missed!");
        return false;
    },

    // Функция для проверки потопленых
    isSunk: function (ship) {
        for (let i = 0; i < this.shipLength; i++) {
            if (ship.hits[i] !== "hit") {
                return false; // Если не потоплено
            }
        }
        return true;
    },

    //  Генерация рассположения кораблей
    generateShipLocations: function () {
        let locations;
        for (let i = 0; i < this.numShips; i++) {
            do {
                locations = this.generateShip();
            } while (this.collision(locations));
            this.ships[i].locations = locations;
        }
        console.log("ships array:" + this.ships);
    },
    // Генерация направления
    generateShip: function () {
        let direction = creareRandom(2); // 0 или 1
        let row, col;

        if (direction === 1) {
            row = creareRandom(this.boardSize);
            col = creareRandom(this.boardSize - this.shipLength + 1);
        } else {
            row = creareRandom(this.boardSize - this.shipLength + 1);
            col = creareRandom(this.boardSize);
        }

        //  
        let newShipLocations = [];
        for (let i = 0; i < this.shiplength; i++) {
            if (direction === 1) {
                newShipLocations.push(row + "" + (col + i));
            } else {
                newShipLocations.push((row + i) + "" + col);
            }
        }
        console.log(newShipLocations);
        return newShipLocations;

    },

    // Проверка совпадений с уже сгенерируемыми 
    collision: function (locations) {
        for (let i = 0; i < this.numShips; i++) {
            let ship = this.ships[i];
            for (let j = 0; j < locations.length; j++) {
                if (ship.locations.indexOf(locations[j]) >= 0) {
                    return true;
                }
            }
        }
        return false;
    }
};

// controoller, bind all other components
let controller = {
    guesses: 0,
    // Проверка конца игры
    processGuess: function (guess) {
        let location = parseGuess(guess);
        if (location) {
            this.guesses++;
            let hit = model.fire(location);
            if (hit && model.shipsSunk === model.numShips) {
                view.displayMessage("You sank all my battleships, in " + this.guesses + "guesses");
            }
        }
    }
};

// Обработка введенных данных
function parseGuess(guess) {
    let alphabet = ["A", "B", "C", "D", "E", "F", "G"];

    if (guess === null || guess.length !== 2) alert("Oops, please enter a one letter and one number on the board");
    else {
        // Выделить первый символ
        let firstChar = guess.charAt(0);
        let row = alphabet.indexOf(firstChar);
        let column = guess.charAt(1);
        if (isNaN(row) || isNaN(column)) alert("Oops, that isn't on the board");
        else if (row < 0 || row >= model.boardSize || column < 0 || column >= model.boardSize) alert("Oops, thet's off the board");
        else return row + column;
    }
    return null;
}

//Обработчик user input
function handleFireButton() {
    let guessInput = document.getElementById("guessInput");
    let guess = guessInput.value.toUpperCase();
    controller.processGuess(guess);
    guessInput.value = "";
}
// Для работы Enter
function handleKeyPress(e) {
    let fireButton = document.getElementById('fireButton');
    if (e.keyCode === 13) {
        fireButton.click();
        return false;
    }
}
//  Привязка к кнопкам
function init() {
    let fireButton = document.getElementById("fireButton");
    fireButton.onclick = handleFireButton;
    let guessInput = document.getElementById("guessInput");
    guessInput.onkeypress = handleKeyPress;
    model.generateShipLocations();
}
// Функция для рандома
function creareRandom(num) {
    let rand = Math.floor(Math.random() * num);
    return rand;
}
// После полной загрузки страницы
window.onload = init;