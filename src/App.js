import { Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar";
import "./App.css";

import Edit from "./Pages/Edit.js";
import FourOFours from "./Pages/FourOFours";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";

function App() {
  return (
    <div className="App">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/transactions" element={<Index />} />
          <Route path="/transactions/new" element={<New />} />
          <Route path="/transactions/:index" element={<Show />} />
          <Route path="/transactions/:index/edit" element={<Edit />} />
          <Route path="*" element={<FourOFours />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
