import { useContext } from "react";
import { PatientContext } from "../context/PatientContext";

function Home() {
  const { fila } = useContext(PatientContext);

  const emergencia = fila.filter(
    (p) => p.gravidade === "Emergência"
  ).length;

  const urgente = fila.filter(
    (p) => p.gravidade === "Urgente"
  ).length;

  const poucoUrgente = fila.filter(
    (p) => p.gravidade === "Pouco Urgente"
  ).length;

  return (
    <div>
      <h1>Dashboard</h1>

      <p>Emergência: {emergencia}</p>
      <p>Urgente: {urgente}</p>
      <p>Pouco Urgente: {poucoUrgente}</p>

      <h3>Total: {fila.length}</h3>
    </div>
  );
}

export default Home;