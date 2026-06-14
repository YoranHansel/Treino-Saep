import { useContext } from "react";
import { PatientContext } from "../context/PatientContext";

function Atendimento() {
  const {
    fila,
    setFila,
    historico,
    setHistorico,
    ordenarFila,
  } = useContext(PatientContext);

  const filaOrdenada =
    ordenarFila(fila);

  const proximo =
    filaOrdenada[0];

  const chamarProximo = () => {
    if (!proximo) return;

    const novaFila =
      fila.filter(
        (p) => p.id !== proximo.id
      );

    const pacienteAtendido = {
      ...proximo,
      atendidoEm:
        new Date().toLocaleString(),
    };

    setHistorico([
      ...historico,
      pacienteAtendido,
    ]);

    setFila(novaFila);
  };

  return (
    <div>
      <h1>Atendimento</h1>

      {!proximo ? (
        <p>Nenhum paciente na fila.</p>
      ) : (
        <>
          <h3>
            {proximo.nome}
          </h3>

          <p>
            Idade:
            {" "}
            {proximo.idade}
          </p>

          <p>
            Gravidade:
            {" "}
            {proximo.gravidade}
          </p>

          <button
            onClick={chamarProximo}
          >
            Chamar Próximo
          </button>
        </>
      )}
    </div>
  );
}

export default Atendimento;