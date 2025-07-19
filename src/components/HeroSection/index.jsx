import styled from "styled-components";
import heroImage from "../../assets/heroImage.png";
import { Outlet } from "react-router-dom";
import Footer from "../Footer";
import Header from "../Header";

const HeroSectionStyled = styled.section`
  width: 100%;
  height: 40vh;
  margin: 0 0 2rem;
  background-image: url(${heroImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (width > 1024px) {
    justify-content: flex-start;
  }
`;

const HeroText = styled.div`
  max-width: 70vw;
  @media screen and (width > 1024px) {
    padding-left: 10rem;
    width: 30rem;
  }
  h1 {
    color: #ccc;
    font-size: 4rem;
    font-weight: 500;
  }
`;

const MainStyled = styled.main`
  width: 70rem;
  max-width: 90vw;
  margin: 0 auto 1rem;
`;

const HeroSection = () => {
  return (
    <>
      <Header />
      <HeroSectionStyled>
        <HeroText>
          <h1>A casa do código e da massa</h1>
        </HeroText>
      </HeroSectionStyled>
      <MainStyled>
        <Outlet />
      </MainStyled>
      <Footer />
    </>
  );
};

export default HeroSection;
