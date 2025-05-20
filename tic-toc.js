
  const dis = () => document.getElementById("mus").play();
  const pau = () => document.getElementById("mus").pause();

  const boardIds = [
    "one1", "one2", "one3",
    "two1", "two2", "two3",
    "three1", "three2", "three3"
  ];

  let currentPlayer = "x";

  const now = () => {
    const fpVal = fp.value.trim();
    const spVal = sp.value.trim();
    if (!fpVal || !spVal) {
      err1.innerText = !fpVal ? "Enter First Player" : "";
      err2.innerText = !spVal ? "Enter Second Player" : "";
      err1.style.color = err2.style.color = "red";
    } else {
      ft.innerText = fpVal;
      lp.innerText = spVal;
      err1.innerText = err2.innerText = "";
      currentPlayer = "x";
      re(); // clear board
    }
  };

  const checkWin = () => {
    const board = boardIds.map(id => document.getElementById(id).innerText);
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];

    for (const [a, b, c] of winPatterns) {
      if (board[a] && board[a] === board[b] && board[b] === board[c]) {
        return board[a]; // 'x' or 'o'
      }
    }
    return board.every(cell => cell) ? "draw" : null;
  };

  const stopVictoryMusic = () => {
    const vicAudio = document.getElementById("vic");
    vicAudio.pause();
    vicAudio.currentTime = 0;
  };

  const sa = (e) => {
    if (!fp.value || !sp.value || currentPlayer === "") return;

    if (e.target.innerText === "") {
      e.target.innerText = currentPlayer;
      const result = checkWin();

      if (result) {
        stopVictoryMusic();
        const vicAudio = document.getElementById("vic");
        vicAudio.play();

        if (result === "x") {
          won.innerText = `${ft.innerText} wins the round!`;
          sc1.value = +sc1.value + 1;
        } else if (result === "o") {
          won.innerText = `${lp.innerText} wins the round!`;
          sc2.value = +sc2.value + 1;
        } else {
          won.innerText = "NO winner!";
        }

        currentPlayer = ""; // Game over, disable moves
      } else {
        currentPlayer = currentPlayer === "x" ? "o" : "x";
      }
    }
  };

  const re = () => {
    boardIds.forEach(id => {
      document.getElementById(id).innerText = "";
    });
    currentPlayer = "x";
    won.innerText = "";
    stopVictoryMusic();
  };

  const ce = () => {
    boardIds.forEach(id => {
      document.getElementById(id).innerText = "";
    });
    currentPlayer = currentPlayer === "" ? "x" : currentPlayer;
    won.innerText = "";
    stopVictoryMusic();
  };

  const restartAll = () => {
    // Full reset
    fp.value = sp.value = "";
    ft.innerText = lp.innerText = "";
    sc1.value = sc2.value = 0;
    currentPlayer = "x";
    err1.innerText = err2.innerText = "";
    won.innerText = "";
    stopVictoryMusic();
    boardIds.forEach(id => document.getElementById(id).innerText = "");
  };

  // Replace `re()` with full reset in button if desired
  document.querySelector('button.btn-light').onclick = restartAll;

