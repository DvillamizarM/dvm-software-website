import {
  AboutMeDiv,
  AboutMeText,
  BlipText,
  CarouselItem,
  GroupTitle,
  InnerSloganDiv,
  MainCarouselDiv,
  MainHomeDiv,
  MainSloganDiv,
  ProfilePic,
  ProfilePicDiv,
  SloganStringDiv,
  SmallText,
  TechGroupDiv,
  TechItemDiv,
  TechItemImg,
  TopAboutMe,
  TopDescription,
  TopDiv,
  TopGroupedDiv,
  TopSlogan,
} from "../styledComponents/home";
import daniela from "../imgs/daniela.jpg";
import reactimg from "../imgs/react.png";
import java from "../imgs/java.png";
import javascript from "../imgs/js.png";
import redux from "../imgs/redux.png";
import firebase from "../imgs/firebase.png";
import postgres from "../imgs/postgres.png";
import mysql from "../imgs/mysql.png";
import figma from "../imgs/figma.png";
import nodejs from "../imgs/nodejs.png";
import docker from "../imgs/docker.png";
import github from "../imgs/github.png";
import { useContext } from "react";
import { Context } from "../App";


const InicialSlogan = () => {
  const stringList = [
    "Optimizar procesos",
    "Crear experiencias",
    "Innovar vidas",
  ];
  const sloganAnimated = stringList.map((string, index1) => {
    return (
      <MainSloganDiv>
        <SloganStringDiv style={{ animationDuration: 0.2 * index1 + "s" }}>
          {string.split("").map((char, index2) => {
            return (
              <BlipText
                style={{
                  animationDuration: "10ms",
                  animationDelay: (0.3 + index2) / 10 + index1 * 1 + "s",
                  width: char === " " ? "3vh" : "auto",
                }}
              >
                {char}
              </BlipText>
            );
          })}
        </SloganStringDiv>
      </MainSloganDiv>
    );
  });
  return sloganAnimated;
};

const TechCarousel = () => {
  return (
    <MainCarouselDiv>
      <CarouselItem>
        <TechGroupDiv>
        <TechItemDiv>
            <TechItemImg
              src={javascript}
              alt="Logo del lenguaje de programación Javascript"
            />
          </TechItemDiv>
          <TechItemDiv>
            <TechItemImg
              src={java}
              alt="Logo del lenguaje de programación Java"
            />
          </TechItemDiv>
          <TechItemDiv>
            <TechItemImg
              src={reactimg}
              alt="Logo del framework de programación web React JS y programación móvil React Native"
            />
          </TechItemDiv>
          <TechItemDiv>
            <TechItemImg
              src={redux}
              alt="Logo de gestor de estado Redux para React JS y React Native"
            />
          </TechItemDiv>
          <TechItemDiv>
            <TechItemImg
              src={nodejs}
              alt="Logo del framework de programación Node JS"
            />
          </TechItemDiv>
          <TechItemDiv>
            <TechItemImg
              src={firebase}
              alt="Logo de servicios de Google Firebase como gestor de base de datos NoSQL en la nube."
            />
          </TechItemDiv>
          <TechItemDiv>
            <TechItemImg
              src={postgres}
              alt="Logo de gestor de base de datos relacional Postgres"
            />
          </TechItemDiv>
          <TechItemDiv>
            <TechItemImg
              src={mysql}
              alt="Logo de gestor de base de datos relacional MySQL"
            />
          </TechItemDiv>
          <TechItemDiv>
            <TechItemImg
              src={figma}
              alt="Logo de programa en línea para el diseño de software UI/UX"
            />
          </TechItemDiv>
          <TechItemDiv>
            <TechItemImg
              src={github}
              alt="Logo de programa de control de versiones Github."
            />
          </TechItemDiv>
          <TechItemDiv>
            <TechItemImg
              src={docker}
              alt="Logo de plataforma de visualización Docker"
            />
          </TechItemDiv>
        </TechGroupDiv>
      </CarouselItem>
    </MainCarouselDiv>
  );
};

const AboutMe = () => {
  return (
    <AboutMeDiv style={{}}>
      <ProfilePicDiv>
        <ProfilePic
          src={daniela}
          alt="Desarrolladora de software de pelo castaño sonriendo"
        />
      </ProfilePicDiv>
      <AboutMeText>
        <SmallText>
          ¡Hola! Mi nombre es <strong>Daniela Villamizar Mendoza</strong> y soy
          <strong> desarrolladora de software </strong>. Estudié ingeniería de
          sistemas del 2016 al 2021 en la Universidad de Santander Campus Cúcuta
          en Colombia. A raíz de mi formación profesional encontré mi pasión en
          el desarrollo de software. <br />
          <br /> Mi objetivo siempre es ofrecer las soluciones informaticas más
          óptimas para suplir aquellas necesidades que tienen las personas.
        </SmallText>
      </AboutMeText>
    </AboutMeDiv>
  );
};

export default function Home() {  
  const value = useContext(Context);
  console.log("context----", value)
  return (
    <MainHomeDiv>
      <TopDiv>
        <TopDescription>
          <GroupTitle>
            <strong>
              <i>
                Desarrollo ágil de aplicaciones moviles, web y de escritorio con
                alta calidad y diseño centrado en el usuario para sus proyectos
                personales y empresariales.
              </i>
            </strong>
          </GroupTitle>
          {/* <DescripcionText>
              Soluciones informáticas para las pequeñas y grandes partes de tú
              día.
            </DescripcionText> */}
        </TopDescription>
        <TopGroupedDiv>
          <TopAboutMe>
            <AboutMe />
          </TopAboutMe>
          <TopSlogan>
            <InnerSloganDiv>
            <InicialSlogan />
            </InnerSloganDiv>
          </TopSlogan>
        </TopGroupedDiv>
          <TechCarousel />
      </TopDiv>
    </MainHomeDiv>
  );
}
