// document.addEventListener("DOMContentLoaded", () => {
//     const canvas = document.getElementById("gameCanvas");
//     const ctx = canvas.getContext("2d");
//     const startButton = document.getElementById("startButton");
  
//     const tileSize = 20;
//     let snake;
//     let food;
//     let score;
//     let gameLoop;
  
//     startButton.addEventListener("click", startGame);
  
//     function startGame() {
//       snake = new Snake();
//       food = new Food();
//       score = 0;
  
//       if (gameLoop) clearInterval(gameLoop);
//       gameLoop = setInterval(gameTick, 1000 / 10);
//     }
  
//     function gameTick() {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
  
//       snake.update();
//       snake.draw(ctx);
  
//       if (snake.collided()) {
//         gameOver();
//         return;
//       }
  
//       if (snake.eat(food)) {
//         food.randomize();
//         score += 10;
//       }
  
//       food.draw(ctx);
//       drawScore();
//     }
  
//     function drawScore() {
//       ctx.fillStyle = "#000";
//       ctx.font = "20px Arial";
//       ctx.fillText("Score: " + score, 10, 30);
//     }
  
//     function gameOver() {
//       clearInterval(gameLoop);
//       alert("Game Over! Score: " + score);
//     }
  
//     class Snake {
//       constructor() {
//         this.body = [{ x: 10, y: 10 }];
//         this.direction = { x: 1, y: 0 };
//       }
  
//       update() {
//         const head = { x: this.body[0].x + this.direction.x, y: this.body[0].y + this.direction.y };
//         this.body.unshift(head);
  
//         if (!this.eat(food)) {
//           this.body.pop();
//         }
//       }
  
//       draw(ctx) {
//         ctx.fillStyle = "#c2ae1d";
//         this.body.forEach(segment => {
//           ctx.fillRect(segment.x * tileSize, segment.y * tileSize, tileSize, tileSize);
//         });
//       }
  
//       eat(food) {
//         const head = this.body[0];
//         if (head.x === food.x && head.y === food.y) {
//           return true;
//         }
//         return false;
//       }
  
//       collided() {
//         const head = this.body[0];
//         if (
//           head.x < 0 || head.x >= canvas.width / tileSize ||
//           head.y < 0 || head.y >= canvas.height / tileSize
//         ) {
//           return true;
//         }
//         return false;
//       }
//     }
  
//     class Food {
//       constructor() {
//         this.randomize();
//       }
  
//       randomize() {
//         this.x = Math.floor(Math.random() * (canvas.width / tileSize));
//         this.y = Math.floor(Math.random() * (canvas.height / tileSize));
//       }
  
//       draw(ctx) {
//         ctx.fillStyle = "#69b6db";
//         ctx.fillRect(this.x * tileSize, this.y * tileSize, tileSize, tileSize);
//       }
//     }
  
//     document.addEventListener("keydown", e => {
//       switch (e.key) {
//         case "ArrowUp":
//           if (snake.direction.y !== 1) {
//             snake.direction = { x: 0, y: -1 };
//           }
//           break;
//         case "ArrowDown":
//           if (snake.direction.y !== -1) {
//             snake.direction = { x: 0, y: 1 };
//           }
//           break;
//         case "ArrowLeft":
//           if (snake.direction.x !== 1) {
//             snake.direction = { x: -1, y: 0 };
//           }
//           break;
//         case "ArrowRight":
//           if (snake.direction.x !== -1) {
//             snake.direction = { x: 1, y: 0 };
//           }
//           break;
//       }
//     });
//   });
  

document.addEventListener("DOMContentLoaded", () => {
    const cells = document.querySelectorAll('.cell');
    const restartBtn = document.getElementById('restart-btn');
    let currentPlayer = 'X';
    let gameOver = false;
  
    function checkWinner() {
      const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6]             // diagonals
      ];
  
      for (let combo of winningCombos) {
        const [a, b, c] = combo;
        if (cells[a].innerText && cells[a].innerText === cells[b].innerText && cells[a].innerText === cells[c].innerText) {
          cells[a].classList.add('winner');
          cells[b].classList.add('winner');
          cells[c].classList.add('winner');
          gameOver = true;
          return true;
        }
      }
  
      return false;
    }
  
    function handleClick(e) {
      const cell = e.target;
      if (cell.innerText || gameOver) return;
      cell.innerText = currentPlayer;
      if (checkWinner()) {
        alert(`Player ${currentPlayer} wins!`);
      } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      }
    }
  
    function restartGame() {
      cells.forEach(cell => {
        cell.innerText = '';
        cell.classList.remove('winner');
      });
      currentPlayer = 'X';
      gameOver = false;
    }
  
    cells.forEach(cell => cell.addEventListener('click', handleClick));
    restartBtn.addEventListener('click', restartGame);
  });
  

  //смена фона
  document.getElementById('changeButton').addEventListener('click', function() {
    var background = document.getElementById('background');
    if (background.style.backgroundImage.includes('https://www.komar.de/media/cms/fileadmin/user_upload/Category/Fototapeten/Marvel/komar-fototapeten-marvel.jpg')) {
      background.style.backgroundImage = "url('https://assets.vogue.in/photos/5ce412599cc0c0b8f5f9b4bf/4:3/w_1440,h_1080,c_limit/Everything-you-need-to-know-before-watching-Marvel-movies-this-year.jpg')"; /* Путь ко второму фоновому изображению */
    } else {
      background.style.backgroundImage = "url('https://www.komar.de/media/cms/fileadmin/user_upload/Category/Fototapeten/Marvel/komar-fototapeten-marvel.jpg')"; /* Путь к первому фоновому изображению */
    }
  });
  
  //tom
  const facts = [
    "Сердце ежа бьется 300 раз в минуту.",
    "В 1830-х годах кетчуп продавали как лекарство.u",
    "Самец непарного шелкопряда может почувствовать запах самки за 1.8 километров.",
    "Дуб не производит жёлуди, пока он младше 50 лет.",
    "Сайт с наибольшим количеством посетительниц от 35 до 44 лет — Alka-Seltzer.com"
];

const emoji = ["😄", "😃", "😁", "😆", "😂", "🤣", "😊", "😌"];

const factText = document.getElementById("fact-text");
const factButton = document.getElementById("fact-button");
const emojiContainer = document.getElementById("emoji");

factButton.addEventListener("click", function() {
    const randomFactIndex = Math.floor(Math.random() * facts.length);
    const randomEmojiIndex = Math.floor(Math.random() * emoji.length);
    factText.textContent = facts[randomFactIndex];
    emojiContainer.textContent = emoji[randomEmojiIndex];
});
