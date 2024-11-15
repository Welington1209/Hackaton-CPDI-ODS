import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { QuizProvider } from "./context/QuizContext";
import "./App.css"

function App() {
  return (
    <QuizProvider>
      <div className="App">
        <Header />

        <Outlet />
      </div>
    </QuizProvider>
  );
}

export default App;
