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
        height:100%;
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
  align-items: start;
`;

export const SloganStringDiv = styled.div`
  animation-name: ${stirngAnimate};
  animation-iteration-count: 1;
  display: flex;
  justify-content: center;
  align-items: top;
`;

export const BlipText = styled.h2`
  font-family: "Murecho";
  font-weight: 700;
  font-size: 7vh;

  height: 40vh;
  animation-name: ${introAnimate};
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
  animation-timing-function: cubic-bezier(0.165, 0.44, 0.64, 1);
  opacity: 0;

  @media (max-width: 40em) {
    font-weight: 700;
    font-size: 5vh;
  }
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
  animation-name: ${animateMainTop};
  animation-iteration-count: 1;
  animation-delay: 4s;
  animation-duration: 500ms;
  animation-fill-mode: forwards;
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
  height: 70vh;
  @media (max-width: 50em) {
    flex-direction: column;
    min-height: 100vh;
    justify-content: space-bettween;
  }
`;

export const TopSlogan = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  @media (max-width: 45em) {
    margin-top: -100%;
  }
  animation-name: ${animateShowAllSlogan};
  animation-delay: 4s;
  animation-duration: 500ms;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
`;

export const InnerSloganDiv = styled.div`
  margin: auto;
  background-color: pink;
`;

export const TopDescription = styled.div`
  animation-name: ${animateShowAll};
  animation-delay: 4s;
  animation-iteration-count: 1;
  animation-duration: 500ms;
  animation-fill-mode: forwards;
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
  margin-bottom: 1.5vw;
`;

export const DescripcionText = styled.h3`
  margin-top: 1.5%;
  font-family: "Murecho";
  font-weight: 500;
  text-align: center;
  font-size: 7vh;
`;

export const TopAboutMe = styled.div`
  width: 0%;
  overflow: hidden;
  animation-name: ${animateAboutMe};
  animation-iteration-count: 1;
  animation-delay: 4s;
  animation-duration: 500ms;
  animation-fill-mode: forwards;

  @media (max-width: 60em) {
    display: flex;
    justify-content: center;
    animation-name: ${animateAboutMeSmall};
  }
`;

//------about me area

export const AboutMeDiv = styled.div`
  display: flex;
  margin: auto;
  flex-direction: reverse-column;
  justify-content: space-evenly;
  align-items: center;
  border-right: 2px solid #120a24;
  width: 100%;
  height: 80%;
  @media (max-width: 25em) {
    flex-direction: column;
  }
`;

export const ProfilePicDiv = styled.div`
  max-height: 100%;
  max-width: 25%;
  display: grid;
  @media (max-width: 40em) {
    max-width: 40%;
    margin-bottom: 5vh;
  }
`;

export const ProfilePic = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10%;
  margin: auto;
  @media (max-width: 40em) {
    margin-top: 12vh;
    width: 80%;
    height: 80%;
  }
`;

export const AboutMeText = styled.div`
  max-height: 100%;
  max-width: 60%;
  @media (max-width: 40em) {
    max-width: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const SmallText = styled.p`
  font-family: "Murecho";
  font-weight: 500;
  font-size: 3.3vh;
  @media (max-width: 50em) {
    font-size: 2.6vh;
  }
`;

//------tech Carousel

export const MainCarouselDiv = styled.div`
  width: 80vw;
  animation-name: ${animateShowAll};
  animation-iteration-count: 1;
  animation-delay: 4s;
  animation-duration: 500ms;
  animation-fill-mode: forwards;
  opacity: 0;
  overflow-y: hidden;
  @media (max-width: 60em) {
    padding-top: 8vh;
    padding-bottom: 8vh;
  }
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
  border-bottom: 2px solid #120a24;
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
