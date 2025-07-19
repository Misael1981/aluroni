import SubTitle from "@/components/SubTitle";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const RecomendacoesStyled = styled.section``;

const RecomendacoesContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 5rem;

  .recomendacoes-card {
    width: 20rem;
    max-width: 90vw;

    .card-image {
      width: 100%;

      img {
        width: 100%;
        height: auto;
        border-radius: 0.5rem;
        margin-bottom: 0.5rem;
      }
    }
    .btn-recomendacoes {
      width: 100%;
      background-color: #d73b3b;
      color: #ccc;
      font-size: 1.2rem;
      font-weight: 600;
      padding: 0.8rem 0;
      border: 0;
      border-radius: 0.5rem;
      cursor: pointer;
      transition: all 0.3s;

      &:hover {
        background-color: #b40f0f;
        color: #fff;
      }
    }
  }
`;

const Recomendacoes = ({ pratos }) => {
  const navigate = useNavigate();

  function redirecionarParaDetalhes(prato) {
    navigate(`/prato/${prato.id}`, { state: { ...prato } });
  }

  return (
    <RecomendacoesStyled>
      <SubTitle>Recomendações da cozinha</SubTitle>
      <RecomendacoesContent>
        {pratos.map((prato) => (
          <div className="recomendacoes-card" key={prato.id}>
            <div className="card-image">
              <img src={prato.photo} alt={prato.title} />
            </div>
            <button
              onClick={() => redirecionarParaDetalhes(prato)}
              className="btn-recomendacoes"
            >
              Ver mais
            </button>
          </div>
        ))}
      </RecomendacoesContent>
    </RecomendacoesStyled>
  );
};

export default Recomendacoes;
