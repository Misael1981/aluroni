import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import styled from "styled-components";

const HeaderStyled = styled.header`
  width: 100%;
  height: auto;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 0.5rem 0;
  border-bottom: 5px solid #d73b3b;
  background-color: #faf7f7;

  nav {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    @media screen and (width > 728px) {
      flex-direction: row;
      justify-content: flex-start;
      gap: 5rem;
    }

    img {
      width: 7rem;
    }

    ul {
      list-style: none;
      display: flex;
      gap: 2rem;
    }
  }
`;

const LinkStyled = styled(Link)`
  text-decoration: none;
  color: #000;
  font-weight: 700;
  font-size: 1.2rem;
  transition: color 0.3s;

  &:hover {
    color: #ff6347; /* Tomato color on hover */
  }
`;

const Header = () => {
  const rotas = [
    {
      label: "Início",
      to: "/",
    },
    {
      label: "Cardápio",
      to: "/cardapio",
    },
    {
      label: "Sobre",
      to: "/sobre",
    },
  ];
  return (
    <HeaderStyled>
      <nav>
        <img src={logo} alt="Logo da Aluroni" />
        <ul>
          {rotas.map((rota) => (
            <li key={rota.label}>
              <LinkStyled to={rota.to}>{rota.label}</LinkStyled>
            </li>
          ))}
        </ul>
      </nav>
    </HeaderStyled>
  );
};

export default Header;
