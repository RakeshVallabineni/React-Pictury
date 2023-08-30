import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomeUI from "./UI/Home";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route >
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomeUI />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
