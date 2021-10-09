import "./App.css";
import styled from "styled-components";
import { data } from "./data";
import Card from "./components/Card/card";
import Box from "./components/Box/box";
import Header from "./components/header";

const CardsWrapper = styled.section`
  margin: 2em auto;
  display: grid;
  gap: 20px;
  grid-auto-flow: dense;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  max-width: 1024px;
  justify-items: center;
`;

const App = () => {
  return (
    <div>
      <Header />
      <CardsWrapper>
        <Card card={data} />
        <Box />
      </CardsWrapper>
    </div>
  );
};

export default App;
