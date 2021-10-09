import styled from "styled-components";

export const BoxWrapper = styled.div`
  display: flex;
  padding: 16px;
  background-color: #3cc6891c;
  max-width: 650px;
  grid-column-end: span 2;
`;

export const Image = styled.div`
  background-image: url("https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  width: 100%;
  height: 300px;
`;

export const TextWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px;
`;
