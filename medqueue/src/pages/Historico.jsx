import { useContext } from "react";
import { PatientContext } from "../context/PatientContext";

function Historico() {
  const { historico } =
    useContext(PatientContext);

  return (
    <div>
      <h1>Histórico</h1>

      {historico.map((paciente) => (
        <div key={paciente.id}>
          <p>
            {paciente.nome}
          </p>

          <p>
            {paciente.gravidade}
          </p>

          <p>
            Atendido em:
            {" "}
            {paciente.atendidoEm}
          </p>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default Historico;