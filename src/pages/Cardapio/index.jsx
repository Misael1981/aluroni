import React, { useEffect, useState } from "react";
import styled from "styled-components";

// Componentes
import InputCardapio from "./components/InputCardapio";
import TagsCardapio from "./components/TagsCardapio";
import DropdownCardapio from "./components/DropdownCardapio";
import CardCardapio from "./components/CardCardapio";

// JSON de dados
import dadosDoCardapio from "@/data/cardapio.json";

const ContainerCardapio = styled.div`
  h1 {
    font-size: 3rem;
  }
`;

const ContainerSerach = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  margin: 2rem 0;

  @media screen and (width > 1024px) {
    align-items: flex-start;
  }
`;

const TagsDrpdownStyled = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;

  @media screen and (width > 1024px) {
    justify-content: space-between;
  }
`;

const Cardapio = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [selectedSortOption, setSelectedSortOption] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [displayedPratos, setDisplayedPratos] = useState([]);
  const sortOptions = [
    { label: "Porção", value: "size" },
    { label: "Qtd. pessoas", value: "serving" },
    { label: "Preço", value: "price" },
  ];

  const sortPratos = (pratosArray, sortValue) => {
    const sortedArray = [...pratosArray];

    switch (sortValue) {
      case "size":
        return sortedArray.sort((a, b) => a.size - b.size);
      case "serving":
        return sortedArray.sort((a, b) => a.serving - b.serving);
      case "price":
        return sortedArray.sort((a, b) => a.price - b.price);
      default:
        return sortedArray;
    }
  };

  useEffect(() => {
    let pratosProcessados = [...dadosDoCardapio];

    if (activeCategory !== "Todos") {
      pratosProcessados = pratosProcessados.filter(
        (prato) => prato.category.label === activeCategory
      );
    }

    if (searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      pratosProcessados = pratosProcessados.filter((prato) =>
        prato.title.toLowerCase().includes(lowerCaseSearchTerm)
      );
    }

    if (selectedSortOption) {
      pratosProcessados = sortPratos(pratosProcessados, selectedSortOption);
    }

    setDisplayedPratos(pratosProcessados);
  }, [activeCategory, selectedSortOption, searchTerm]);
  const handleSortChange = (value) => {
    setSelectedSortOption(value);
  };

  const handleSelectTag = (tag) => {
    setActiveCategory(tag);
  };

  const handleSearchChange = (value) => {
    setSearchTerm(value);
  };

  return (
    <ContainerCardapio>
      <h1>Cardápio</h1>
      <ContainerSerach>
        <InputCardapio value={searchTerm} onChange={handleSearchChange} />
        <TagsDrpdownStyled>
          <TagsCardapio
            onSelectTag={handleSelectTag}
            activeTag={activeCategory}
          />
          <DropdownCardapio
            options={sortOptions}
            onSelect={handleSortChange}
            placeholder="Ordenar Por"
          />
        </TagsDrpdownStyled>
      </ContainerSerach>
      <CardCardapio pratos={displayedPratos} />
    </ContainerCardapio>
  );
};

export default Cardapio;
