import NotFoundImage from "@/assets/not_found.svg";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const NotFoundStyled = styled.div`
  width: 100%;
  height: 100vh;

  .image-notFound {
    margin: 5rem auto;
    width: fit-content;

    img {
      max-width: 90vw;
    }
  }
`;

const BtnNotFound = styled.button`
  color: #d73b3b;
  font-size: 3rem;
  font-weight: 600;
  cursor: pointer;
  background-color: transparent;
  border: 0;
  font-family: var(--font-principal);
  margin: 2rem 0 0 3rem;
`;

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <NotFoundStyled>
      <BtnNotFound onClick={() => navigate(-1)}>{"< Voltar"}</BtnNotFound>
      <div className="image-notFound">
        <img src={NotFoundImage} alt="NotFoundImage" />
      </div>
    </NotFoundStyled>
  );
};

export default NotFound;
