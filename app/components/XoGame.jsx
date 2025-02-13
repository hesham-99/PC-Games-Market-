"use client";
// # X O Game with Digital Score

// pages/index.js
import { useState } from 'react';

const initialState = Array(9).fill(null);

export default function Home() {
  const [squares, setSquares] = useState(initialState);
  const [xIsNext, setXIsNext] = useState(true);
  const [score, setScore] = useState({ X: 0, O: 0 });

  const handleClick = (index) => {
    if (squares[index] || calculateWinner(squares)) return;

    const newSquares = squares.slice();
    newSquares[index] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);

    const winner = calculateWinner(newSquares);
    if (winner) {
      setScore((prevScore) => ({ ...prevScore, [winner]: prevScore[winner] + 1 }));
      setSquares(initialState);
    }
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  return (
    <div className={styles.container}>
      <h1>X O Game</h1>
      <div className={styles.scoreboard}>
        <h2>Score</h2>
        <p>X: {score.X} - O: {score.O}</p>
      </div>
      <div className={styles.board}>
        {squares.map((square, index) => (
          <button key={index} className={styles.square} onClick={() => handleClick(index)}>
            {square}
          </button>
        ))}
      </div>
    </div>
  );
}











// CSS Cood

/* styles/Home.module.css */
// .container {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     margin-top: 50px;
//   }
  
//   .scoreboard {
//     margin-bottom: 20px;
//   }
  
//   .board {
//     display: grid;
//     grid-template-columns: repeat(3, 100px);
//     gap: 10px;
//   }
  
//   .square {
//     width: 100px;
//     height: 100px;
//     font-size: 24px;
//     cursor: pointer;
//     background-color: #f0f0f0;
//     border: 2px solid #000;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//   }
  
//   .square:hover {
//     background-color: #e0e0e0;
//   }
  