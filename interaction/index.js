const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const startMessage = document.getElementById("startMessage");
const restartMessage = document.getElementById("restartMessage");
const scoreText = document.getElementById("score");

const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

let snake;
let fruit;
let score = 0;
let gameStarted = false;

canvas.addEventListener("click", () => {
    if (!gameStarted) {
        gameStarted = true;
        startMessage.style.display = "none";
        setup();
        gameLoop();
    } else {
        resetGame();
        restartMessage.style.display = "none";
        gameLoop();
    }
});

function setup() {
    snake = new Snake();
    fruit = new Fruit();
    window.addEventListener("keydown", (e) => snake.changeDirection(e));
}

function gameLoop() {
    if (!gameStarted) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snake.move();
    if (snake.eat(fruit)) {
        fruit = new Fruit();
        score++;
        scoreText.textContent = "Score: " + score;
    }
    snake.draw();
    fruit.draw();
    if (snake.checkCollision()) {
        endGame();
    } else {
        setTimeout(gameLoop, 100);
    }
}

function Snake() {
    this.body = [{ x: 5, y: 5 }];
    this.direction = "RIGHT";

    this.draw = function () {
        this.body.forEach((segment, index) => {
            const color = this.getSegmentColor(index);
            ctx.fillStyle = color;
            ctx.fillRect(segment.x * scale, segment.y * scale, scale, scale);
        });
    };

    this.getSegmentColor = function (index) {
        const length = this.body.length;
        const redValue = Math.min(255, Math.floor(255 * (index / length)));
        const greenValue = Math.min(255, Math.floor(255 * (index / length)));
        return `rgb(${redValue}, ${greenValue}, 0)`;
    };

    this.move = function () {
        if (!gameStarted) return;

        const head = { x: this.body[0].x, y: this.body[0].y };
        if (this.direction === "RIGHT") head.x++;
        if (this.direction === "LEFT") head.x--;
        if (this.direction === "UP") head.y--;
        if (this.direction === "DOWN") head.y++;

        this.body.unshift(head);
        if (!this.eat(fruit)) {
            this.body.pop();
        }
    };

    this.changeDirection = function (event) {
        if (event.key === "ArrowUp" && this.direction !== "DOWN") this.direction = "UP";
        if (event.key === "ArrowDown" && this.direction !== "UP") this.direction = "DOWN";
        if (event.key === "ArrowLeft" && this.direction !== "RIGHT") this.direction = "LEFT";
        if (event.key === "ArrowRight" && this.direction !== "LEFT") this.direction = "RIGHT";
    };

    this.eat = function (fruit) {
        return this.body[0].x === fruit.x && this.body[0].y === fruit.y;
    };

    this.checkCollision = function () {
        const head = this.body[0];
        if (head.x < 0 || head.x >= columns || head.y < 0 || head.y >= rows) return true;
        for (let i = 1; i < this.body.length; i++) {
            if (this.body[i].x === head.x && this.body[i].y === head.y) return true;
        }
        return false;
    };
}

function Fruit() {
    this.x = Math.floor(Math.random() * columns);
    this.y = Math.floor(Math.random() * rows);

    this.draw = function () {
        ctx.fillStyle = "#FF1493";
        ctx.fillRect(this.x * scale, this.y * scale, scale, scale);
    };
}

function resetGame() {
    snake = new Snake();
    score = 0;
    scoreText.textContent = "Score: " + score;
}

function endGame() {
    gameStarted = false;
    restartMessage.style.display = "block";
}
