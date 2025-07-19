// src/components/InputCardapio/index.jsx
import React from "react"; // Importe React
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";

const ContainerInput = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 20rem;
  max-width: 90vw;
  height: 2.3rem;
  padding: 0.5rem 1rem;
  background-color: aliceblue;
  border-radius: 0.3rem;
  color: #242536;

  input {
    flex-grow: 1; /* Faz o input ocupar o espaço disponível */
    font-size: 1.2rem;
    color: #242536;
    border: none;
    outline: none;
    background-color: transparent;
    padding-right: 0.5rem; /* Um pequeno padding para não colar no ícone */
  }

  svg {
    font-size: 1.1rem; /* Ajuste o tamanho do ícone se necessário */
    color: #555; /* Cor para o ícone */
  }
`;

// O InputCardapio agora vai receber props para o valor e para a função onChange
const InputCardapio = ({ value, onChange }) => {
  return (
    <ContainerInput>
      <input
        type="text"
        placeholder="Buscar" // Alterei de "Buscas" para "Buscar" (plural geralmente não usado para placeholder de busca)
        value={value} // O valor do input será controlado pelo estado do componente pai
        onChange={(e) => onChange(e.target.value)} // Chama a função onChange passada via props
      />
      <FaSearch />
    </ContainerInput>
  );
};

export default InputCardapio;
