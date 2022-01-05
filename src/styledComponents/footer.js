import styled from "styled-components";

export const Main = styled.div`
  @media (max-width: 40em) {
    grid-template-row: 1fr 1fr 1fr;
  }
  @media (min-width: 40em) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  display: grid;
  padding: 1rem 0;
  background: linear-gradient(
    180deg,
    #ffffff 30%,
    rgba(137, 90, 235, 0.35) 95%,
    rgba(137, 90, 235, 0.35) 100%
  );
`;

export const Column = styled.div`
  margin: auto;
  display:grid;
`;

export const ColumnMenu = styled.div`
  display: flex;
  flex-direction: column;
  margin:auto;
  justify-content: space-evenly;
  align-items: center;
  justify-content:center;
  height:60%;
  @media (max-width: 40em) {
    margin-top: -3vh;
    padding-top: 4vh;
    padding-bottom: 5vh;
    flex-direction: row;

  }
`;

export const MenuItem = styled.div`
  height: 8vh;
  @media (max-width: 40em) {
    padding:2vh;
    
  }
`;

export const InfoText = styled.p`
  white-space: nowrap;
  font-family: "Murecho";
  font-size: 1.5vw;
  font-weight: 500;
  @media (max-width: 40em) {
    font-size: 2.7vw;
    text-align: center;
  }
  @media (max-width: 25em) {
    font-size: 4vw;
    text-align: center;
  }
`;

export const BtnText = styled.h5`
  font-family: "Murecho";
  font-weight: 800;
  font-size: 1em;
  @media (max-width: 25em) {
    font-size: 5vw;
  }
  color: #120a24;
  text-align: center;
`;

export const TagText = styled.h5`
  text-align: center;
  font-family: "Murecho";
  font-weight: 800;
  font-size: 2vw;
  @media (max-width: 40em) {
    font-size: 2.7vw;
  }
  @media (max-width: 25em) {
    font-size: 5vw;
  }
`;
