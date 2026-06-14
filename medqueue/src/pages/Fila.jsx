import { useContext } from "react";
import { PatientContext } from "../context/PatientContext";

function Fila() {
  const { fila, ordenarFila } =
    useContext(PatientContext);

  const filaOrdenada =
    ordenarFila(fila);

  return (
    <div>
      <h1>Fila de Espera</h1>

      {filaOrdenada.map((paciente) => (
        <div key={paciente.id}>
          <p>
            {paciente.nome} -
            {" "}
            {paciente.idade} anos -
            {" "}
            {paciente.gravidade}
          </p>
        </div>
      ))}
    </div>
  );
}

export default Fila;