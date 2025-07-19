import casa from "@/assets/sobre/casa.png";
import massa1 from "@/assets/sobre/massa1.png";
import massa2 from "@/assets/sobre/massa2.png";
import SubTitle from "@/components/SubTitle";
import styled from "styled-components";

const CasaStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  @media screen and (width > 1024px) {
    flex-direction: row;
  }

  img {
    width: 40rem;
    max-width: 90vw;
    height: auto;
  }

  .casa-content {
    max-width: 90vw;
    font-family: var(--font-secundaria);
    font-size: 1.5rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 1rem;
  }
`;

const MassasImages = styled.div`
  width: 100%;
  margin-top: 5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  img {
    width: 34rem;
    max-width: 90vw;
    height: auto;
  }
`;

const Sobre = () => {
  return (
    <section>
      <SubTitle>Sobre</SubTitle>
      <CasaStyled>
        <img src={casa} alt="Casa da Aluroni" />
        <div className="casa-content">
          <p>
            Nós do Aluroni oferecemos a vocês, nossos queridos clientes, a Massa
            Italiana Caseira mais saborosa e sofisticada de São Paulo! Prezamos
            pelos ingredientes tradicionais da culinária Italiana, frescos e de
            excelente qualidade para que sua experiência seja ainda mais
            intensa!
          </p>
          <p>
            Também possuímos uma cardápio de carnes com muitas opções de acordo
            com o seu gosto!
          </p>
          <p>
            Para acompanhar as massas italianas, Aluroni possui uma reserva de
            vinhos especiais, que harmonizam perfeitamente com o seu parto, seja
            carne ou massa!
          </p>
        </div>
      </CasaStyled>
      <MassasImages>
        <img src={massa1} alt="" />
        <img src={massa2} alt="" />
      </MassasImages>
    </section>
  );
};

export default Sobre;
