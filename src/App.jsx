import { Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Machines from "./pages/Machines";
import AddMachine from "./pages/AddMachine";
import Kanban from "./pages/Kanban";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar/>

      <main>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/machines" element={<Machines />} />
          <Route path="/machines/new" element={<AddMachine />} />
          <Route path="/kanban" element={<Kanban />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
