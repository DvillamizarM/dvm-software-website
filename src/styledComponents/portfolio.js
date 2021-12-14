import styled from "styled-components";

export const ProjectList = styled.div`
  width: 80%;
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 4vh;
  @media (max-width: 40em) {
    width: 90%;
  }
`;

export const Project = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  gap: 4vh;
  padding: 1%;
  @media (max-width: 40em) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const AppTitle = styled.h3`
  font-family: "Murecho";
  font-weight: 600;
  font-size: 4vh;
  width:100%;
  text-align:center;
  @media (max-width: 25em) {
      margin-top:-2%;
  }
  @media (max-width: 25em) {
      margin-top:-5%;
  }
`;

export const AppLogoDiv = styled.div`
  max-width: 100%;
  display: grid;
  @media (max-width: 40em) {
    max-width: 45%;
  }
`;
export const AppLogo = styled.img`
  width: 100%;
  border-radius: 10%;
  margin: auto;
`;

export const AppDescriptionDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const AppTechs = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
  justify-content:space-evenly;
`;

export const TechItemImg = styled.img`
  max-width: 8vh;
  margin: auto;
`;

export const AppDownloads = styled.div`
  display: grid;
  height:60%;
  margin:auto;
  @media (max-width: 40em) {
      width:80%;
      height:auto;
  }
`;

export const BtnText = styled.a`
  margin: auto;
  appearance: none;
  &:hover {
    background-size: 100% 100%;
    color: #ffffff;
  }
  background: linear-gradient(
    180deg,
    rgba(137, 90, 235, 0.4) 21%,
    rgba(44, 24, 87, 1) 86%
  );
  border:0px solid black;
  position: relative;
  background-repeat: no-repeat;
  background-size: 300% 300%;
  width: 100%;
  display: grid;
  cursor: pointer;
  padding:0.5em;
  transition: 0.4s all;
  border-radius: 10vh 10vh 0vh 10vh;
  z-index: 1;
  @media (max-width: 40em) {
    margin-bottom: 3vh;
    font-size:0.8em;
  }
  text-decoration: none;
  font-size: 1em;
  font-family: "Murecho";
  text-align:center;
  font-weight: 1000;
  color: #120a24;
`;
