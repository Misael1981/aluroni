import styled from "styled-components";

const SubTitleContainer = styled.div`
  padding: 3rem 0;

  h3 {
    color: #242536;
    font-size: 3rem;
  }
`;

const SubTitle = ({ children }) => {
  return (
    <SubTitleContainer>
      <h3>{children}</h3>
    </SubTitleContainer>
  );
};

export default SubTitle;
