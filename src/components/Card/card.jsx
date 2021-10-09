import { GiFamilyHouse } from "react-icons/gi";
import { MdBedroomChild } from "react-icons/md";
import { GiSandsOfTime } from "react-icons/gi";
import { CardWrapper, Title, Image, IconWrapper } from "./styles";

const Card = ({ card }) => {
  return (
    <>
      {card.map((el) => (
        <CardWrapper>
          <Image bgImage={el.image} />
          <div style={{ padding: 8 }}>
            <Title>{el.title}</Title>
            <IconWrapper>
              <i>
                <GiFamilyHouse />
              </i>
              <p>
                <span>{el.houses}</span>kamers
              </p>
            </IconWrapper>
            {el.studios && (
              <IconWrapper>
                <i>
                  <MdBedroomChild />
                </i>
                <p>
                  <span>{el.studios}</span>studios
                </p>
              </IconWrapper>
            )}
            <IconWrapper>
              <i>
                <GiSandsOfTime />
              </i>
              <p>
                <span>{el.stay}</span>maanden inschrijftijd
              </p>
            </IconWrapper>
          </div>
        </CardWrapper>
      ))}
    </>
  );
};

export default Card;
