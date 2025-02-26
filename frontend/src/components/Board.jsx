import { useState } from "react";
import Square from "./Square";
import Cell from "./Cell";

function Board() {
    const [board,setBoard] = useState(
        Array(9).fill().map(() => Array(9).fill(null))
    );

    const handleChange = (row, col, value) => {
        if (value === "" || /^[1-9]$/.test(value)) { 
            const newBoard = board.map((r, i) =>
                r.map((cell, j) => (i === row && j === col ? (value || null) : cell))
            );
            setBoard(newBoard);
        }
    };

    const getBoard = () => {
        console.log("User Input Board:", board);
    };

    
    return (
        <div className="flex items-center justify-center w-screen h-screen">
            <div className="flex flex-col justify-center w-[90vw] h-[90vw] max-w-[600px] max-h-[600px] p-2 gap-2">
                <div className="flex w-full h-full gap-2">
                    <Cell /><Cell /><Cell />
                    <Cell /><Cell /><Cell />
                    <Cell /><Cell /><Cell />
                </div>
                <div className="flex w-full h-full gap-2">
                    <Cell /><Cell /><Cell />
                    <Cell /><Cell /><Cell />
                    <Cell /><Cell /><Cell />
                </div><div className="flex w-full h-full gap-2">
                    <Cell /><Cell /><Cell />
                    <Cell /><Cell /><Cell />
                    <Cell /><Cell /><Cell />
                </div>
                <div className="flex w-full h-full gap-2">
                    <Cell /><Cell /><Cell />
                    <Cell /><Cell /><Cell />
                    <Cell /><Cell /><Cell />
                </div>
                <div className="flex w-full h-full gap-2">
                    <Cell /><Cell /><Cell />
                    <Cell /><Cell /><Cell />
                    <Cell /><Cell /><Cell />
                </div><div className="flex w-full h-full gap-2">
                    <Cell /><Cell /><Cell />
                    <Cell /><Cell /><Cell />
                    <Cell /><Cell /><Cell />
                </div><div className="flex w-full h-full gap-2">
                    <Cell /><Cell /><Cell />
                    <Cell /><Cell /><Cell />
                    <Cell /><Cell /><Cell />
                </div>
                <div className="flex w-full h-full gap-2">
                    <Cell /><Cell /><Cell />
                    <Cell /><Cell /><Cell />
                    <Cell /><Cell /><Cell />
                </div><div className="flex w-full h-full gap-2">
                    <Cell /><Cell /><Cell />
                    <Cell /><Cell /><Cell />
                    <Cell /><Cell /><Cell />
                </div>
                <div className="flex justify-center"><button 
                type="submit" 
                className="flex px-6 py-2 bg-[#FF8989] items-center justify-center w-30 text-white font-bold rounded-md 
                            hover:bg-[#e67777] transition-all duration-200"
                
                >
                Submit
                </button></div>
            </div>
            
        </div>

    );
}

export default Board;
