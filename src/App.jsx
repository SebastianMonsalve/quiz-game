import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcome from "../src/Pages/Welcome/Welcome";
import Questions from "../src/Pages/Questions/Questions";
import Instructions from "../src/Pages/Instructions/Instructions";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="questions" element={<Questions />} />
          <Route path="instructions" element={<Instructions />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
