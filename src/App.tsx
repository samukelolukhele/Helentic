import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route element={<Home />} path="/" />
      </Routes>
    </Router>
  );
}

export default App;
