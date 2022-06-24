import styled from "styled-components";

export const Box = styled.div`
  border-radius: 10px;
  border: 1px solid var(--border);
  width: 100%;
  height: 100%;
  grid-area: 1 / 1 / 4 / 2;
  box-shadow: 0 0 4px rgba(0,0,0,0.8);
  background: linear-gradient(150deg, var(--background), var(--background2));
`;
