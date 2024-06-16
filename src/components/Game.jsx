import * as React from 'react';
import { Button } from '@chakra-ui/react'

function Board() {
    // default square kosong
    const [squares, setSquares]= React.useState(Array(9).fill(null));
    // default x true
    const [xIsNext, setXIsNext]= React.useState(true);
  
    function selectSquare(square) {
      // jika squares sudah terisi maka akan langsung return 
      if(squares[square] || calculateWinner(squares)){
        return;
      }
      const nextSquares=squares.slice();
      // validasi x or not
      if(xIsNext){
        nextSquares[square]="X";
      } else{
        nextSquares[square]="O";
      }
      // set squares berdasarkan isian dari nextsquare
      setSquares(nextSquares);
      // set xIsnext menjadi kebalikan dari nilai yg saat ini. misal saat ini true maka akan di set menjadi false
      setXIsNext(!xIsNext);
    }
    const nextPlay = calculateNextValue(squares);
    const winner = calculateWinner(squares);
    const status = calculateStatus(winner,squares, nextPlay);
  
    function restart() {  
      // untuk set squares menjadi kosong semua
      setSquares(Array(9).fill(null));
    }
  
    function renderSquare(i) {
      return (
        <Button className="square" onClick={() => selectSquare(i)}>
          {squares[i]}
        </Button>
      );
    }
  
    return (
      <div>
        <div className='status' >{status}</div>
        <div className='board' >
          <div >
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
          </div>
          <div >
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
          </div>
          <div >
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
          </div>
        </div>
        <Button onClick={restart} mt={2} className='button-restart'>
          restart
        </Button>
      </div>
    );
  }
  
  function Game() {
    return (
      <div >
        <div >
          <Board />
        </div>
      </div>
    );
  }
  
  // eslint-disable-next-line no-unused-vars
  function calculateStatus(winner, squares, nextValue) {
    return winner
      ? `Winner: ${winner}`
      : squares.every(Boolean)
        ? `Scratch: Cat's game`
        : `Next player: ${nextValue}`;
  }
  
  // eslint-disable-next-line no-unused-vars
  function calculateNextValue(squares) {
    return squares.filter(Boolean).length % 2 === 0 ? 'X' : 'O';
  }
  
  // eslint-disable-next-line no-unused-vars
  function calculateWinner(squares) {
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
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  export default Game;