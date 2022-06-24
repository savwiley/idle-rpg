import styled from "styled-components";

export const Box = styled.div`
  border-radius: 10px;
  border: 1px solid var(--border);
  width: 100%;
  height: 100%;
  grid-area: 2 / 2 / 4 / 4;
  box-shadow: 0 0 4px rgba(0,0,0,0.8);
  background: linear-gradient(150deg, var(--background), var(--background2));
  overflow: hidden;
`;

export const Numbers = styled.div`
  background: linear-gradient(90deg, var(--gradient), var(--gradient2));
  text-align: center;
  font-size: 30px;
  padding: 10px 0;
  border-bottom: 1px solid var(--border);
  cursor: default;
  box-shadow: 0 5px 4px rgba(0,0,0,0.3);
`;