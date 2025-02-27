import "./App.css";
import Board from "./components/Board";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div >
          <h1 className="text-[#D84040] text-4xl font-bold mb-10">
            <br></br>
            SUDOKU
          </h1>
      </div>
    
    <Board />
    </div>

  );
}

export default App;
