import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  50% {height:15%}
 100% {height:40%;}
`;

export const Main = styled.div`
  width: 100%;
  height:100%;
  
`;
export const Slidey = styled.div`
  animation-duration: 5s;
  display:flex;
  align-items:center;
  animation-iteration-count: 1;
  display: grid;
  animation-name: ${fadeIn};

  @media (min-width: 40em) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 25em) {
    font-size: 3.3vw;
  }
`;

export const BtnDiv = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
`;

export const BtnText = styled.h5`
  
  @media (max-width: 40em) {
    padding-top: 0.3vh;
    font-size: 3.3vw;
  }@media (max-width: 23em) {
    padding-top: 0.3vh;
    font-size: 5vw;
  }
  font-size: 1.2em;
  font-family: "Murecho";
  font-weight: 1000;
  color: #120a24;
  margin:auto;
  text-align: center;
  transition: 0.5s all;
`;

export const FadedDiv = styled.div`
  &:hover {
    background-size: 100% 100%;
    ${BtnText} {
      color: #ffffff;
    }
  }
  background: linear-gradient(
    180deg,
    rgba(137, 90, 235, 0.5) 21%,
    rgba(44, 24, 87, 1) 86%
  );
  position: relative;
  background-repeat: no-repeat;
  background-size: 300% 300%;
  width: 100%;
  display:grid;
  cursor: pointer;
  transition: 0.4s all;
  border-radius: 10vh 10vh 0vh 10vh;
  z-index: 1;
`;


export const MenuDiv = styled.div`
  gap: 4px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  width: 100%;
  border-radius: 10vh 0% 0% 10vh;
  @media (max-width: 25em) {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 4px;
  height: 100%;
  margin-top: 1vh;
}
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  height: 9vh;
  border-bottom: 2px solid #120a24;
`;

export const LogoImgDiv = styled.div`
  padding-right: vmin(1);
  max-width: 9vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LogoImg = styled.img`
  width: 100%;
  height: 100%;
`;

export const LogoText = styled.h3`
  @media (max-width: 40em) {
    font-size: 6vw;
  }
  color: #120a24;
  overflow: hidden;
  font-family: "Murecho";
  font-weight: 560;
  padding-right: 5px;
  font-size: 1.5em;
`;

const glowAnimate = keyframes`
from{text-shadow:0px 0px 0px #614ad3,0px 0px 0px #2C1857;}
to{text-shadow:0px 0px 2px #614ad3,0px 0px 2px #2C1857;}
`;

const slideAnimate = keyframes`
20%, 100% {
  transform: translate(200px, 0);
}
0% {
  margin-left: -100%;
    width: 300%; 
}20%{
  margin-left: 0%;
    width: 100%;
}
`;

export const GlowSpan = styled.span`
  animation-name: ${glowAnimate};
  animation-duration: 1.5s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
`;

export const SlideSpan = styled.span`
  animation-name: ${slideAnimate};
  animation-duration: 20s;
  animation-iteration-count: infinite;
`;
