import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Triagem from "../pages/Triagem";
import Fila from "../pages/Fila";
import Atendimento from "../pages/Atendimento";
import Historico from "../pages/Historico";

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />

      <Route
        path="/triagem"
        element={<Triagem />}
      />

      <Route
        path="/fila"
        element={<Fila />}
      />

      <Route
        path="/atendimento"
        element={<Atendimento />}
      />

      <Route
        path="/historico"
        element={<Historico />}
      />
    </Routes>
  );
}

export default AppRoutes;