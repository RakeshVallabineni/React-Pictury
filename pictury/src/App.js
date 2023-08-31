import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomeUI from "./UI/Home";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<HomeUI />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
