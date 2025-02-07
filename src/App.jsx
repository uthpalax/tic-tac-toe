import { useState } from "react";
import "./App.css";

function Square({ clickedSqaures, position, setClickedSquares }) {
  function handleClick() {
    setClickedSquares([...clickedSqaures, position]);
  }

  function checkIfMarked() {
    const clicked = clickedSqaures.find((square) => {
      if (square.x === position.x && square.y === position.y) {
        return true;
      }
      return false;
    });
    if (clicked) {
      return "X";
    }
  }

  return <span onClick={handleClick}> {checkIfMarked()}</span>;
}

function App() {
  const [clickedSqaures, setClickedSquares] = useState([]);
  console.log("clickedSqaures", clickedSqaures);

  return (
    <>
      <div className="row">
        <Square
          position={{ x: 0, y: 2 }}
          setClickedSquares={setClickedSquares}
          clickedSqaures={clickedSqaures}
        />
        <Square
          position={{ x: 1, y: 2 }}
          setClickedSquares={setClickedSquares}
          clickedSqaures={clickedSqaures}
        />
        <Square
          position={{ x: 2, y: 2 }}
          setClickedSquares={setClickedSquares}
          clickedSqaures={clickedSqaures}
        />
      </div>
      <div className="row">
        <Square
          position={{ x: 0, y: 1 }}
          setClickedSquares={setClickedSquares}
          clickedSqaures={clickedSqaures}
        />
        <Square
          position={{ x: 1, y: 1 }}
          setClickedSquares={setClickedSquares}
          clickedSqaures={clickedSqaures}
        />
        <Square
          position={{ x: 2, y: 1 }}
          setClickedSquares={setClickedSquares}
          clickedSqaures={clickedSqaures}
        />
      </div>
      <div className="row">
        <Square
          position={{ x: 0, y: 0 }}
          setClickedSquares={setClickedSquares}
          clickedSqaures={clickedSqaures}
        />
        <Square
          position={{ x: 1, y: 0 }}
          setClickedSquares={setClickedSquares}
          clickedSqaures={clickedSqaures}
        />
        <Square
          position={{ x: 2, y: 0 }}
          setClickedSquares={setClickedSquares}
          clickedSqaures={clickedSqaures}
        />
      </div>
    </>
  );
}

export default App;
