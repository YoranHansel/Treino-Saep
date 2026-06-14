import { useContext, useState } from "react";
import { PatientContext } from "../context/PatientContext";

function Triagem() {
  const { fila, setFila } =
    useContext(PatientContext);

  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [gravidade, setGravidade] =
    useState("Urgente");

  const cadastrar = (e) => {
    e.preventDefault();

    const novoPaciente = {
      id: Date.now(),
      nome,
      idade,
      gravidade,
      chegada: Date.now(),
    };

    setFila([...fila, novoPaciente]);

    setNome("");
    setIdade("");
    setGravidade("Urgente");
  };

  return (
    <div>
      <h1>Triagem</h1>

      <form onSubmit={cadastrar}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) =>
            setNome(e.target.value)
          }
          required
        />

        <br />
        <br />

        <input
          type="number"
          placeholder="Idade"
          value={idade}
          onChange={(e) =>
            setIdade(e.target.value)
          }
          required
        />

        <br />
        <br />

        <select
          value={gravidade}
          onChange={(e) =>
            setGravidade(e.target.value)
          }
        >
          <option>Emergência</option>
          <option>Urgente</option>
          <option>Pouco Urgente</option>
        </select>

        <br />
        <br />

        <button type="submit">
          Cadastrar
        </button>
      </form>
    </div>
  );
}

export default Triagem;