import { Route, Routes } from "react-router-dom";
import Figma from "./Pages/Figma";
import CreatePrd from "./Pages/Create";
import UpdatePrd from "./Pages/Update";
import Navbar from "./Components/Navbar";
import Products from "./Pages/Products";
import Navigation from "./Components/Navigation";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Figma />} />
        <Route path="/news" element={<Products />} />
        <Route path="/add" element={<CreatePrd />} />
        <Route path="/update/:id" element={<UpdatePrd />} />
      </Routes>
      <Navigation/>
    </div>
  );
}

export default App;
