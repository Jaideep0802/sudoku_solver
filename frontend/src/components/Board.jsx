import { useState, useEffect } from "react";
import Cell from "./Cell";
import axios from "axios";
import { toast } from "react-toastify";

function Board() {
  const initialBoard = Array(9)
    .fill(0)
    .map(() => Array(9).fill(0));

  const [board, setBoard] = useState(initialBoard);

  // Use environment variable or fallback to local
  const API_BASE =
    import.meta.env.VITE_API_URL || "https://sudoku-api-gold.vercel.app";

  useEffect(() => {
    setBoard(initialBoard);
  }, []);

  const handleChange = (row, col, value) => {
    if (value === "" || /^[1-9]$/.test(value)) {
      const newBoard = board.map((r, i) =>
        r.map((cell, j) =>
          i === row && j === col ? (value ? parseInt(value) : 0) : cell
        )
      );
      setBoard(newBoard);
    }
  };

  const refreshBoard = () => {
    setBoard(initialBoard);
    toast.info("Board cleared");
  };


  const getBoard = async () => {
  try {
    const response = await axios.post(`${API_BASE}/api/solve`, { board });

    if (!response.data || !Array.isArray(response.data.board)) {
      throw new Error("Invalid board data from API");
    }

    setBoard(response.data.board);
  } catch (error) {
    if (error.response) {
      toast.error(error.response.data.message || "Something went wrong");
    } else {
      toast.error("Network error");
    }
    console.error("Error fetching API:", error);
  }
};

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="flex flex-col justify-center w-[90vw] h-[90vw] max-w-[600px] max-h-[600px] p-2 gap-2">
        {board.map((row, rowIndex) => (
          <div key={rowIndex} className="flex w-full h-full gap-2">
            {row.map((cell, colIndex) => (
              <Cell
                key={`${rowIndex}-${colIndex}`}
                value={cell === 0 ? "" : cell}
                onChange={(value) => handleChange(rowIndex, colIndex, value)}
              />
            ))}
          </div>
        ))}
        <br />
        <div className="flex justify-center gap-6">
          <button
            type="button"
            className="flex px-6 py-2 bg-[#FF8989] items-center justify-center w-30 text-white font-bold rounded-md hover:bg-[#e67777] transition-all duration-200"
            onClick={refreshBoard}
          >
            Refresh
          </button>

          <button
            type="submit"
            className="flex px-6 py-2 bg-[#FF8989] items-center justify-center w-30 text-white font-bold rounded-md hover:bg-[#e67777] transition-all duration-200"
            onClick={getBoard}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Board;
