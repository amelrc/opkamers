import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 300px;
  max-width: 400px;
  border: 1px solid #3cc689;
  // margin: 8px;
`;

export const Image = styled.div`
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  height: 200px;
`;

export const Title = styled.h2`
  color: #3cc689;
  margin: 8px auto;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  color: #073d34;
  i {
    svg {
      width: 20px;
      height: 20px;
    }
  }
  span {
    font-style: italic;
    margin: 0 4px;
    font-weight: 700;
  }
`;
