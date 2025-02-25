import express from 'express';
import dotenv from 'dotenv';



const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () =>{
    console.log(`Serve at http://localhost:${port}`)
})

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Welcome to the Sudoku Solver API! Use POST /solve to solve a Sudoku.");
});


app.post("/solve", (req,res)=>{
    const { board } =req.body;

    const isValid = (i,j,board,c) => {
        for(let k=0;k<9;k++){
            if(board[k][j]==c) return false;
            if(board[i][k]==c) return false;
            if(board[(Math.floor(i/3)*3)+(Math.floor(k/3))][(Math.floor(j/3)*3)+Math.floor(k%3)]==c) return false;
        }
        return true;
    }

    const sudokuSolver = (board) => {
        for(let i=0;i<board.length;i++){
            for(let j=0;j<board[0].length;j++){
                if(board[i][j]==0){
                    for(let c=1;c<=9;c++){
                        if(isValid(i,j,board,c)){
                            board[i][j]=c;
                            if(sudokuSolver(board)){
                                return true;
                            }
                            else{
                                board[i][j]=0;
                            }
                        } 
                    }
                    return false;
                }
            }
        }
        return true;
    }

    const solvedBoard = sudokuSolver(board);

    if(!solvedBoard){
        return res.status(400).json({message: "Unsolvable Sudoku"});
    }

    res.json({ board });
})
