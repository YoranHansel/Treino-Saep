function PatientCard({ paciente }) {
  return (
    <div>
      <p>
        <strong>Nome:</strong> {paciente.nome}
      </p>

      <p>
        <strong>Idade:</strong> {paciente.idade}
      </p>

      <p>
        <strong>Gravidade:</strong> {paciente.gravidade}
      </p>

      <hr />
    </div>
  );
}

export default PatientCard;