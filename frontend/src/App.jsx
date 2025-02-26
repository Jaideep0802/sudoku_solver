import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Board from "./components/Board";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
    <h1 className="text-[#D84040] text-4xl font-bold mb-4">
        SUDOKU
    </h1>
    <Board />
    </div>

  );
}

export default App;
