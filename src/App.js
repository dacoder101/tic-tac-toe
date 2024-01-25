import { useState } from "react";

function Square({ value, squareClick }) {
    return (
        <>
            <button onClick={squareClick} className="square">
                {value}
            </button>
        </>
    );
}

export default function Board() {
    const [squares, setSquare] = useState(Array(9).fill(null));
    const [turn, setTurn] = useState(1);

    function handleClick(i) {
        if (squares[i] || calculateWinner(squares)) {
            return;
        }

        const newSquares = squares.slice();
        newSquares[i] = turn % 2 === 0 ? "O" : "X";
        setTurn(turn + 1);
        setSquare(newSquares);
    }

    const winner = calculateWinner(squares);
    let status;

    if (winner) {
        status = "Winner: " + winner;
    } else {
        status = "Next player: " + (turn % 2 === 0 ? "O" : "X");
    }

    return (
        <>
            <div className="status">{status}</div>
            <div className="board-row">
                <Square value={squares[0]} squareClick={() => handleClick(0)} />
                <Square value={squares[1]} squareClick={() => handleClick(1)} />
                <Square value={squares[2]} squareClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
                <Square value={squares[3]} squareClick={() => handleClick(3)} />
                <Square value={squares[4]} squareClick={() => handleClick(4)} />
                <Square value={squares[5]} squareClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
                <Square value={squares[6]} squareClick={() => handleClick(6)} />
                <Square value={squares[7]} squareClick={() => handleClick(7)} />
                <Square value={squares[8]} squareClick={() => handleClick(8)} />
            </div>
        </>
    );
}

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
        if (
            squares[a] &&
            squares[a] === squares[b] &&
            squares[a] === squares[c]
        ) {
            return squares[a];
        }
    }
    return null;
}
