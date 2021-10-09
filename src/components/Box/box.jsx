import { BoxWrapper, Image, TextWrapper } from "./styles";

const Box = () => {
  return (
    <BoxWrapper>
      <Image />
      <TextWrapper>
        <h2>Bekijk hier het aanbod van de woongebouwen</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
          cumque sapiente saepe?
        </p>
        <button>Bekijk het aanbod</button>
      </TextWrapper>
    </BoxWrapper>
  );
};

export default Box;
