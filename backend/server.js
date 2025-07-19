import express from 'express';
import cors from 'cors';


const app = express();

app.use(cors());

const port = process.env.PORT || 3000;

app.listen(port, () =>{
    console.log(`Serve at http://localhost:${port}`)
})


app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to the Sudoku Solver API! Use POST /solve to solve a Sudoku.");
});

app.post("/solve", (req, res) => {
    const { board } = req.body;

    if (!board || !Array.isArray(board) || board.length !== 9 || board.some(row => !Array.isArray(row) || row.length !== 9)) {
        return res.status(400).json({ message: "Invalid board format" });
    }

    const boardCopy = board.map(row => row.slice());

    const isValid = (i, j, board, c) => {
        for (let k = 0; k < 9; k++) {
            if (board[k][j] == c) return false;
            if (board[i][k] == c) return false;
            if (board[3 * Math.floor(i / 3) + Math.floor(k / 3)][3 * Math.floor(j / 3) + k % 3] == c) return false;
        }
        return true;
    };

    const sudokuSolver = (board) => {
        for (let i = 0; i < 9; i++) {
            for (let j = 0; j < 9; j++) {
                if (board[i][j] == 0) {
                    for (let c = 1; c <= 9; c++) {
                        if (isValid(i, j, board, c)) {
                            board[i][j] = c;
                            if (sudokuSolver(board)) {
                                return true;
                            }
                            board[i][j] = 0;
                        }
                    }
                    return false; 
                }
            }
        }
        return true; 
    };

    const solvable = sudokuSolver(boardCopy);

    if (!solvable) {
        return res.status(400).json({ message: "Unsolvable Sudoku" });
    }

    return res.json({ board: boardCopy });
});
