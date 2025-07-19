import cardapio from "../../data/cardapio.json";
import NossaCasa from "./components/NossaCasa";
import Recomendacoes from "./components/Recomendacoes";

const Inicio = () => {
  let pratosRecemendados = [...cardapio];
  pratosRecemendados = pratosRecemendados
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);
  return (
    <>
      <Recomendacoes pratos={pratosRecemendados} />
      <NossaCasa />
    </>
  );
};

export default Inicio;
