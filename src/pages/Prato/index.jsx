import SubTitle from "@/components/SubTitle";
import { useParams, useNavigate } from "react-router-dom";
import cardapio from "@/data/cardapio.json";
import styled from "styled-components";

const ContentPrato = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  background-color: aliceblue;
  box-sizing: border-box;
  padding: 1rem;
  border-radius: 1rem;
  margin-top: 2rem;

  p {
    font-size: 1.8rem;
    color: #444444;
  }
`;

const PhotoPrato = styled.img`
  width: 40rem;
  max-width: 90vw;
  border-radius: 0.5rem;
`;

const ListaDetalhesPrato = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  font-size: 1.5rem;
  color: #111;
  font-weight: 600;

  li {
    padding: 0;
  }

  .tag {
    padding: 0.3rem 0.8rem;
    background-color: #d73b3b;
    border-radius: 0.5rem;
    color: #ccc;
  }

  .price {
    color: #d73b3b;
    font-size: 2rem;
  }
`;

const SubListaPrato = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  li {
    padding: 0;
  }
`;

const BtnVoltar = styled.button`
  color: #d73b3b;
  background-color: transparent;
  font-size: 2rem;
  border: 0;
  font-weight: 600;
  font-family: var(--font-primary);
  margin-bottom: 2rem;
`;

const Prato = () => {
  const { id } = useParams();
  const pratoCompleto = cardapio.find((item) => item.id === Number(id));

  const navigate = useNavigate();

  return (
    <>
      <BtnVoltar onClick={() => navigate(-1)}>{"< Voltar"}</BtnVoltar>
      <h1>Detalhes do Prato</h1>
      <ContentPrato>
        <SubTitle>{pratoCompleto.title}</SubTitle>
        <PhotoPrato src={pratoCompleto.photo} alt={pratoCompleto.title} />
        <p>{pratoCompleto.description}</p>
        <ListaDetalhesPrato>
          <li>
            <span className="tag">{pratoCompleto.category.label}</span>
          </li>
          <li>
            <SubListaPrato>
              <li>{pratoCompleto.size}</li>
              <li>
                {pratoCompleto.serving} pessoa
                {pratoCompleto.serving === 1 ? "" : "s"}
              </li>
            </SubListaPrato>
          </li>
          <li className="price">R$ {pratoCompleto.price}</li>
        </ListaDetalhesPrato>
      </ContentPrato>
    </>
  );
};

export default Prato;
