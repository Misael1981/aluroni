import logo from "@/assets/logo.svg";
import styled from "styled-components";

const FooterStyled = styled.footer`
  background-color: #d73b3b;
  box-sizing: border-box;
  padding: 0 10rem;
  text-align: center;
  margin-top: 5rem;

  @media screen and (width > 758px) {
    text-align: end;
  }
`;

const Footer = () => {
  return (
    <FooterStyled>
      <img src={logo} alt="Logo da Aluroni" />
    </FooterStyled>
  );
};

export default Footer;
