import "./style.css";

function CounterApp() {
  const boxes = document.querySelectorAll(".box");
  const playerColor = document.querySelector(".player-color")!;
  const resetBtn = document.querySelector(".reset-btn")!;
  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];
  let player = "X";
  let tieCount = 0;
  let playerX = false;
  let playerO = false;

  boxes.forEach((item) => {
    item.addEventListener("click", () => {
      if (item.innerHTML === "" && playerX === false && playerO === false) {
        item.innerHTML =
          player === "X"
            ? '<span class="player-x">X</span>'
            : '<span class="player-o">O</span>';
        playerColor.innerHTML =
          player === "X"
            ? '<span class="player-o">O</span>'
            : '<span class="player-x">X</span>';
        player = player === "X" ? "O" : "X";
      }

      for (let i of winningConditions) {
        let a = boxes[i[0]].innerHTML;
        let b = boxes[i[1]].innerHTML;
        let c = boxes[i[2]].innerHTML;
        tieCount += 0.125;

        if (a === b && b === c && a !== "") {
          a === '<span class="player-x">X</span>'
            ? (playerX = true)
            : (playerO = true);
          GameOver();
        }

        if (tieCount == 9) {
          GameOver();
        }
      }
    });

    function GameOver() {
      if (playerX) {
        alert("Player X Won The Game!");
      } else if (playerO) {
        alert("Player O Won The Game!");
      } else {
        alert("Tie");
      }
    }

    function resetGame() {
      player = "X";
      playerColor.innerHTML = '<span class="player-x">X</span>';
      tieCount = 0;
      playerX = false;
      playerO = false;

      boxes.forEach((item) => {
        item.innerHTML = "";
      });
    }

    resetBtn.addEventListener("click", resetGame);
  });

  return (
    <div className="main">
      <h1 className="title">Tic Tac Toe</h1>

      <p className="announcer">
        Player <span className="player-color">X</span>'s turn!
      </p>

      <div className="container">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>

      <button className="reset-btn">RESET</button>
    </div>
  );
}

export default CounterApp;
