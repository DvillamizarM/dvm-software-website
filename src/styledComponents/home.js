/* eslint-disable no-unused-vars */
import styled, { keyframes } from "styled-components";
//---------- keyframes-----------

const stirngAnimate = keyframes`
    0%, 50%{
        opacity:0;
        margin-top:-100%;
    } 60%{
        opacity:1;
        margin-top:0%
    }
`;
const introAnimate = keyframes`
    0%,80%{
        opacity:0;
        margin-top:-100%;
        font-weight:600;
    }
    80% {
        margin-top:0%;
        opacity:0.2;
    }
    85% {
        opacity:0.4;
    }
    90% {
        opacity:0.6;
        font-weight:500;
    }
    95% {
        opacity:0.8;
    }
    100% {
        opacity:1;
        font-weight:400;
    }
  
`;

const animateMainTop = keyframes`
grid-template-rows: 30%, 70%;
`;

const animateShowAll = keyframes`
  50% {
    opacity:0;
  }100%{
    opacity: 1;
    margin:auto;
  };
`;

const animateShowAllSlogan = keyframes`
  50% {
    opacity:0;
  }100%{
    width: 50%;
    height: 50vh;
    opacity: 1;
    margin:auto;
    justify-content: center;
    align-items: center;
  };
`;

// const meImg = keyframes`
//     100%{
//         opacity: 1;
//         width: 50%;
//         height: 50%;
//     }
// `;

const animateAboutMe = keyframes`
    20%{
      width:20%;
    }40%{
      width: 30% ;
    }
    60%{
      width:40%;
    }80%{
      width: 50% ;
    }100%{
      width: 60% ;
    }
`;


const appearAnimation = keyframes`
0%,80%{
  opacity:1;
}
80% {
  opacity:0.8;
}
85% {
  opacity:0.6;
}
90% {
  opacity:0.4;
  font-weight:500;
}
95% {
  opacity:0.2;
}
100% {
  opacity:0;
}
`;

const animateAboutMeSmall = keyframes`
20%{
  width:20%;
}40%{
  width: 40% ;
}
    60%{
      width:60%;
    }80%{
      width: 80% ;
    }100%{
      width: 95%;
    }
`;
//---------styles------------

//-------intro animation

export const MainSloganDiv = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SloganStringDiv = styled.div`
  animation-name: ${stirngAnimate};
  animation-iteration-count: 1;
  animation-delay: 6s;
  display: flex;
  height: 10vh;
  align-items: center;
`;

export const BlipText = styled.h2`
  font-family: "Murecho";
  font-weight: 700;
  font-size: 7vh;
  height: 100%;
  animation-name: ${introAnimate};
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  animation-delay: 6s;
  animation-timing-function: cubic-bezier(0.165, 0.44, 0.64, 1);
  opacity: 0;
  @media (max-width: 40em) {
    font-weight: 700;
    font-size: 5vh;
  }
`;

export const IntroDiv = styled.div`

animation-name: ${appearAnimation};
animation-fill-mode: forwards;
animation-iteration-count: 1;
animation-duration: 1s;
animation-delay: 3s;
height: 100vh; 
margin:0%;
width: 100vw;
display:flex;
justify-content:center;
align-items:center;
background: linear-gradient(
  180deg,
  rgba(240, 240, 240, 1) 30%,
  rgba(137, 90, 235, 0.5) 50%,
  rgba(240, 240, 240, 1) 70%
);

`;

//----- higher level div styles - animations

export const MainHomeDiv = styled.div`
  position: relative;
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

export const TopDiv = styled.div`
  display: grid;
  position: relative;
  background: linear-gradient(
    180deg,
    rgba(240, 240, 240, 1) 40%,
    rgba(137, 90, 235, 0.5) 70%,
    rgba(240, 240, 240, 1) 100%
  );
  grid-template-rows: 30%, 70%;
  @media (max-width: 40em) {
    flex-direction: column;
    justify-content: space-bettween;
  }
`;

export const TopGroupedDiv = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: 26vw;
  @media (max-width: 60em) {
    flex-direction: column;
    height: 100vh;
    justify-content: start;
    
  }
  @media (max-width: 40em) {
    height: 140vh;
  }
`;

export const TopSlogan = styled.div`
  height: 50vh;
  opacity: 1;
  margin:auto;
`;

export const InnerSloganDiv = styled.div`
  height: 33.3%;
  margin-top: 2.5em;
`;

export const TopDescription = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-bottom: 2px solid #120a24;
  padding-bottom:3vw;
  align-items: center;
  overflow-y: hidden;
  margin-bottom: 2vh;
`;

export const TopAboutMe = styled.div`
  overflow: auto;
  width: 60%;
  @media (max-width: 60em) {
    display: flex;
    justify-content: center;
    align-items:center;
    width: 95%;
  }
`;

//------about me area

export const AboutMeDiv = styled.div`
  display: flex;
  flex-direction: row;
  overflow:hidden;
  justify-content: space-evenly;
  align-items: center;
  border-right: 2px solid #120a24;
  width: 98%;
  height: 100%;
  @media (max-width: 40em) {
    height: 100%;
    display:grid;
    grid-template-rows: 1fr 1fr;
    border-right: 0px solid #120a24;
  }
`;

export const ProfilePicDiv = styled.div`
  max-height: 100%;
  max-width: 25%;
  display: grid;
  margin:auto;
  @media (max-width: 40em) {
    max-width: 40%;
    display:flex;
  }
`;

export const ProfilePic = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10%;
  margin: auto;
  @media (max-width: 40em) {
  }
`;

export const AboutMeText = styled.div`
  max-height: 100%;
  max-width: 70%;
    padding-right:2%;
  @media (max-width: 40em) {
    max-width: 100%;
  }
`;

export const SmallText = styled.p`
  font-family: "Murecho";
  font-weight: 500;
  font-size: 1em;
  text-align:justify;
  @media (max-width: 50em) {
    font-size: 0.85em;
  }
`;

//------tech Carousel

export const MainCarouselDiv = styled.div`
  width: 80vw;
  margin: auto;
  overflow-y: hidden;
  padding-top: 3vh;
  padding-bottom: 8vh;
`;

// const white-gradient = styled.mixin`
// 	background: linear-gradient(to right,  rgba(255,255,255,1) 0%,rgba(255,255,255,0) 100%);
// `;
// Animation
const scroll = keyframes`
	0% { transform: translateX(0); }
	100% { transform: translateX(calc(-200px * 7))}
`;

export const CarouselItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  width: 100%;
  position: relative;
  &::before,
  &::after {
    content: "";
    height: 100px;
    position: absolute;
    width: 200px;
    z-index: 1;
  }
  &::after {
    right: 0;
    top: 0;
    transform: rotateZ(180deg);
  }
  &::before {
    left: 0;
    top: 0;
  }
`;
export const GroupTitle = styled.p`
  text-align: center;
  display: flex;
  align-items: center;
  width: 90%;
  font-family: "Murecho";
  font-weight: 340;
  font-size: 5.2vh;
  @media (max-width: 40em) {
    font-size: 3vh;
    text-align: justify;
  }
`;
export const TechGroupDiv = styled.div`
  height: 70%;
  width: 100%;
  display: flex;
  padding-left: 70vw;
  animation: ${scroll} 20s linear 3s infinite;
  justify-content: center;
  align-items: center;
`;
export const TechItemDiv = styled.div`
  height: 100%;
  padding-left: 4vw;
  display: flex;
  justify-content: center;
`;
export const TechItemImg = styled.img`
  max-width: 15vh;
`;

export const TechText = styled.h6``;
