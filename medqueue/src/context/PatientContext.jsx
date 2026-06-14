import { createContext, useEffect, useState } from "react";

export const PatientContext = createContext();

export function PatientProvider({ children }) {
  const [fila, setFila] = useState([]);
  const [historico, setHistorico] = useState([]);

  useEffect(() => {
    const filaSalva =
      JSON.parse(localStorage.getItem("fila")) || [];

    const historicoSalvo =
      JSON.parse(localStorage.getItem("historico")) || [];

    setFila(filaSalva);
    setHistorico(historicoSalvo);
  }, []);

  useEffect(() => {
    localStorage.setItem("fila", JSON.stringify(fila));
  }, [fila]);

  useEffect(() => {
    localStorage.setItem(
      "historico",
      JSON.stringify(historico)
    );
  }, [historico]);

  const ordenarFila = (lista) => {
    const prioridade = {
      Emergência: 1,
      Urgente: 2,
      "Pouco Urgente": 3,
    };

    return [...lista].sort((a, b) => {
      if (
        prioridade[a.gravidade] !==
        prioridade[b.gravidade]
      ) {
        return (
          prioridade[a.gravidade] -
          prioridade[b.gravidade]
        );
      }

      return a.chegada - b.chegada;
    });
  };

  return (
    <PatientContext.Provider
      value={{
        fila,
        setFila,
        historico,
        setHistorico,
        ordenarFila,
      }}
    >
      {children}
    </PatientContext.Provider>
  );
}