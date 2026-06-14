export const carregarFila = () => {
  return JSON.parse(
    localStorage.getItem("fila")
  ) || [];
};

export const salvarFila = (fila) => {
  localStorage.setItem(
    "fila",
    JSON.stringify(fila)
  );
};

export const carregarHistorico = () => {
  return JSON.parse(
    localStorage.getItem("historico")
  ) || [];
};

export const salvarHistorico = (
  historico
) => {
  localStorage.setItem(
    "historico",
    JSON.stringify(historico)
  );
};