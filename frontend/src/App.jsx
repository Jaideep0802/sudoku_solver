import "./App.css";
import Board from "./components/Board";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div>
        <h1 className="text-[#D84040] text-4xl font-bold mb-10">
          <br />
          SUDOKU
        </h1>
      </div>
      <Board />
      <ToastContainer position="bottom-right" autoClose={2000} />
    </div>
  );
}

export default App;
