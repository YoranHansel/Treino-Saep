import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/triagem">Triagem</Link> |{" "}
      <Link to="/fila">Fila</Link> |{" "}
      <Link to="/atendimento">Atendimento</Link> |{" "}
      <Link to="/historico">Histórico</Link>

      <hr />
    </nav>
  );
}

export default Navbar;