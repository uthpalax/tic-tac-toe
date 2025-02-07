import { useState } from "react";
import "./App.css";

function Square({ position, handleClick }) {
  return <div className="box" onClick={() => handleClick({ ...position, value: 'X' })}> {position.value} </div>;
}

function App() {
  const [squares, setSquares] = useState([
    { x: 0, y: 0, value: null },
    { x: 0, y: 1, value: null },
    { x: 0, y: 2, value: null },
    { x: 1, y: 0, value: null },
    { x: 1, y: 1, value: null },
    { x: 1, y: 2, value: null },
    { x: 2, y: 0, value: null },
    { x: 2, y: 1, value: null },
    { x: 2, y: 2, value: null },
  ]);
  const [player, setPlayer] = useState('X')
  let winner = null

  const winnerCombinations = [
    [{ x: 0, y: 0 }, { x: 0, y: 1 }, { x: 0, y: 2 }],
    [{ x: 1, y: 0 }, { x: 1, y: 1 }, { x: 1, y: 2 }]
  ]

  function handleClick(position) {
    const updatedSquares = squares.map((square) => {
      if (square.x === position.x && square.y === position.y) {
        return {
          x: position.x,
          y: position.y,
          value: player
        };
      }
      return square
    });
    setSquares(updatedSquares);
    setPlayer(player === 'X' ? 'O' : 'X')
  }

  const xSquares = squares.filter(({ value }) => value === 'X')
  const oSquares = squares.filter(({ value }) => value === 'O')

  winnerCombinations.forEach((combination) => {
    const areAllInXArray = combination.every(item1 =>
      xSquares.some(item2 => item1.x === item2.x && item1.y === item2.y)
    );
    if (areAllInXArray) {
      winner = 'X'
    }
    const areAllInOArray = combination.every(item1 =>
      oSquares.some(item2 => item1.x === item2.x && item1.y === item2.y)
    );
    if (areAllInOArray) {
      winner = 'O'
    }
  })

  return (
    <>
      <h3>Winner {winner ? winner : '- no winner'}</h3>
      <div className="game-board">
        {squares.map(square => (
          <Square
            key={`${square.x}-${square.y}`}
            position={square}
            handleClick={handleClick}
          />
        ))}
      </div>
    </>
  );
}

export default App;
