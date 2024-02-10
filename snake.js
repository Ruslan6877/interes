
document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    const snakeSize = 20;
    let direction = 'right';
    let snake = [{x: 200, y: 200}];
    let food = generateFood();

    function generateFood() {
        return {
            x: Math.floor(Math.random() * (canvas.width / snakeSize)) * snakeSize,
            y: Math.floor(Math.random() * (canvas.height / snakeSize)) * snakeSize
        };
    }

    function drawSnake() {
        ctx.fillStyle = 'green';
        snake.forEach(part => ctx.fillRect(part.x, part.y, snakeSize, snakeSize));
    }

    function drawFood() {
        ctx.fillStyle = 'red';
        ctx.fillRect(food.x, food.y, snakeSize, snakeSize);
    }

    function moveSnake() {
        const head = {x: snake[0].x, y: snake[0].y};

        switch (direction) {
            case 'up':
                head.y -= snakeSize;
                break;
            case 'down':
                head.y += snakeSize;
                break;
            case 'left':
                head.x -= snakeSize;
                break;
            case 'right':
                head.x += snakeSize;
                break;
        }

        snake.unshift(head);

        if (head.x === food.x && head.y === food.y) {
            food = generateFood();
        } else {
            snake.pop();
        }
    }

    function checkCollision() {
        if (
            snake[0].x < 0 || snake[0].x >= canvas.width ||
            snake[0].y < 0 || snake[0].y >= canvas.height ||
            snake.slice(1).some(part => part.x === snake[0].x && part.y === snake[0].y)
        ) {
            clearInterval(gameLoop);
            alert('Game Over!');
        }
    }

    function update() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawSnake();
        drawFood();
        moveSnake();
        checkCollision();
    }

    const gameLoop = setInterval(update, 100);

    document.addEventListener('keydown', event => {
        switch (event.key) {
            case 'ArrowUp':
                if (direction !== 'down') direction = 'up';
                break;
            case 'ArrowDown':
                if (direction !== 'up') direction = 'down';
                break;
            case 'ArrowLeft':
                if (direction !== 'right') direction = 'left';
                break;
            case 'ArrowRight':
                if (direction !== 'left') direction = 'right';
                break;
        }
    });
});

