import styled from "styled-components";

const ListTagsStyled = styled.ul`
  width: 40rem;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  li {
    button {
      font-size: 1.2rem;
      padding: 0.5rem 1rem;
      border: 0;
      border-radius: 0.3rem;
      background-color: aliceblue;
      font-family: var(--font-principal);
      font-weight: 600;
      color: #242536;
      cursor: pointer; /* Adicionei cursor pointer para indicar que é clicável */
      transition: background-color 0.2s, color 0.2s; /* Para um efeito visual ao mudar */

      &.active {
        /* Classe para o botão ativo */
        background-color: #d73b3b; /* Cor de destaque para a tag ativa */
        color: #fff;
      }

      &:hover:not(.active) {
        /* Hover apenas se não estiver ativo */
        background-color: #c0d9e8; /* Um tom diferente no hover */
      }
    }
  }
`;

const TagsCardapio = ({ onSelectTag, activeTag }) => {
  const tags = ["Todos", "Massas", "Carnes", "Combos", "Veganos"];
  return (
    <ListTagsStyled>
      {tags.map((tag) => (
        <li key={tag}>
          <button
            onClick={() => onSelectTag(tag)} // Chama a função passada via props
            className={tag === activeTag ? "active" : ""} // Aplica a classe 'active' se for a tag selecionada
          >
            {tag}
          </button>
        </li>
      ))}
    </ListTagsStyled>
  );
};

export default TagsCardapio;
