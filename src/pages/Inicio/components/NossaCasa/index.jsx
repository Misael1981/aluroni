import SubTitle from "@/components/SubTitle";
import styled from "styled-components";
import nossaCasaImg from "@/assets/nossa_casa.png";

const NossaCasaContainer = styled.section`
  position: relative;

  .nossa-casa-Img {
    width: 100%;
    height: auto;
    img {
      width: 100%;
    }
  }
  .nossa-casa-content {
    position: absolute;
    left: 0;
    right: 0;
    bottom: -45px;
    width: 200px;
    height: 100px;
    margin: 0 auto;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #242536;
    color: #ccc;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 5px;
  }
`;

const NossaCasa = () => {
  return (
    <NossaCasaContainer>
      <SubTitle>Nossa Casa</SubTitle>
      <div className="nossa-casa-Img">
        <img src={nossaCasaImg} alt="" />
      </div>
      <div className="nossa-casa-content">
        <p>Rua Vergueiro, 3185</p>
        <p>Vila Mariana - SP</p>
      </div>
    </NossaCasaContainer>
  );
};

export default NossaCasa;
