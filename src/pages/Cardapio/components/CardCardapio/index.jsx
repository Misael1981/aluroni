import { Link } from "react-router-dom";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const CardCardapioContainer = styled.section`
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const LinkCardapioStyled = styled.div`
  cursor: pointer;
  width: 70rem;
  max-width: 90vw;
  box-sizing: border-box;
  padding: 1rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: inherit;
  background-color: #ccc;
  transition: all 0.3s;

  &:hover {
    background-color: #a8a8a8;
  }

  @media screen and (width > 1024px) {
    flex-direction: row;
    align-items: stretch;
  }

  h2 {
    font-size: 2rem;
    font-weight: 700;
  }

  p {
    display: block;
    max-width: 90vw;
    font-size: 1.5rem;
    text-align: center;
  }
`;

const CardCardCardapioImage = styled.div`
  width: 15rem;
  height: 15rem;
  max-width: 90vw;
  border-radius: 1rem;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const CardCardapioContent = styled.div`
  width: 50rem;
  max-width: 90vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
`;

const ListCardCardCardapio = styled.ul`
  list-style-type: none;
  width: 80%;
  max-width: 90vw;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  font-size: 1.5rem;
  font-weight: 600;

  .tag-card {
    background-color: #d73b3b;
    color: #ccc;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
  }
  .price-card {
    color: #d73b3b;
  }
`;

const CardCardapio = ({ pratos }) => {
  const navigate = useNavigate();
  return (
    <CardCardapioContainer>
      {pratos.map((prato) => (
        <LinkCardapioStyled
          key={prato.id}
          onClick={() => navigate(`/prato/${prato.id}`)}
        >
          <CardCardCardapioImage>
            <img src={prato.photo} alt={prato.title} />
          </CardCardCardapioImage>
          <CardCardapioContent>
            <h2>{prato.title}</h2>
            <p>{prato.description}</p>
            <ListCardCardCardapio>
              <li className="tag-card">{prato.category.label}</li>
              <li>{prato.size}g</li>
              <li>
                {prato.serving} pessoa{prato.serving === 1 ? "" : "s"}
              </li>
              <li className="price-card">R$ {prato.price}</li>
            </ListCardCardCardapio>
          </CardCardapioContent>
        </LinkCardapioStyled>
      ))}
    </CardCardapioContainer>
  );
};

export default CardCardapio;
