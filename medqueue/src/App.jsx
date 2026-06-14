import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Triagem from "./pages/Triagem";
import Fila from "./pages/Fila";
import Atendimento from "./pages/Atendimento";
import Historico from "./pages/Historico";
import { PatientProvider } from "./context/PatientContext";

function App() {
  return (
    <PatientProvider>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/triagem">Triagem</Link> |{" "}
        <Link to="/fila">Fila</Link> |{" "}
        <Link to="/atendimento">Atendimento</Link> |{" "}
        <Link to="/historico">Histórico</Link>
      </nav>

      <hr />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/triagem" element={<Triagem />} />
        <Route path="/fila" element={<Fila />} />
        <Route path="/atendimento" element={<Atendimento />} />
        <Route path="/historico" element={<Historico />} />
      </Routes>
    </PatientProvider>
  );
}

export default App;