import React, { useState } from "react";
import styled from "styled-components";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md"; // Importe os ícones de seta

const DropdownContainer = styled.div`
  position: relative;
  width: 10rem;
  font-family: var(--font-primary);
`;

const SelectedOption = styled.button`
  width: 100%;
  padding: 0.8rem 1rem;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-family: var(--font-primary);
  font-size: 1rem;
  color: #333;
  font-weight: 500;

  &:hover {
    background-color: #e0e0e0;
  }

  svg {
    font-size: 1.2rem;
  }
`;

const OptionsList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #fff;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 0.5rem 0.5rem;
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 100;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const OptionItem = styled.li`
  padding: 0.8rem 1rem;
  cursor: pointer;
  font-size: 1rem;
  color: #555;

  &:hover {
    background-color: #f9f9f9;
  }
`;

const DropdownCardapio = ({
  options,
  onSelect,
  placeholder = "Ordenar Por",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState(placeholder);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedLabel(option.label);
    onSelect(option.value);
    setIsOpen(false);
  };

  return (
    <DropdownContainer>
      <SelectedOption onClick={handleToggle}>
        {selectedLabel}
        {isOpen ? <MdKeyboardArrowUp /> : <MdKeyboardArrowDown />}
      </SelectedOption>

      {isOpen && (
        <OptionsList>
          {options.map((option) => (
            <OptionItem
              key={option.value}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </OptionItem>
          ))}
        </OptionsList>
      )}
    </DropdownContainer>
  );
};

export default DropdownCardapio;
