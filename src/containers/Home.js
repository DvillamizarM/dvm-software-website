import {
  AboutMeDiv,
  AboutMeText,
  BlipText,
  CarouselItem,
  GroupTitle,
  InnerSloganDiv,
  IntroDiv,
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
import { useEffect, useContext } from "react";
import { BtnText, FadedDiv } from "../styledComponents/menu";
import { Link } from "react-router-dom";
import { Context } from "../Context.js";

const InicialSlogan = () => {
  const stringList = [
    "Optimizar procesos",
    "Crear experiencias",
    "Innovar vidas",
  ];

  const sloganAnimated = stringList.map((string, index1) => {
    return (
      <MainSloganDiv>
        <SloganStringDiv style={{ animationDuration: 0.3 * index1 + "s" }}>
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
              alt="Logo del lenguaje de programaci??n Javascript"
            />
          </TechItemDiv>
          <TechItemDiv>
            <TechItemImg
              src={java}
              alt="Logo del lenguaje de programaci??n Java"
            />
          </TechItemDiv>
          <TechItemDiv>
            <TechItemImg
              src={reactimg}
              alt="Logo del framework de programaci??n web React JS y programaci??n m??vil React Native"
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
              alt="Logo del framework de programaci??n Node JS"
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
              alt="Logo de programa en l??nea para el dise??o de software UI/UX"
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
              alt="Logo de plataforma de visualizaci??n Docker"
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
          alt="Desarrolladora de software de pelo casta??o sonriendo"
        />
      </ProfilePicDiv>
      <AboutMeText>
        <SmallText>
          ??Hola! Mi nombre es <strong>Daniela Villamizar Mendoza</strong> y soy
          <strong> desarrolladora de software </strong>. Estudi?? ingenier??a de
          sistemas del 2016 al 2021 en la Universidad de Santander Campus C??cuta
          en Colombia. A ra??z de mi formaci??n profesional encontr?? mi pasi??n en
          el desarrollo de software. <br />
          <br /> Mi objetivo siempre es ofrecer las soluciones inform??ticas m??s
          ??ptimas para suplir aquellas necesidades que tienen las personas.
        </SmallText>
      </AboutMeText>
    </AboutMeDiv>
  );
};

export default function Home() {
  const [context, setContext] = useContext(Context);

  useEffect(() => {
      window.scrollTo(0, 0);
    if (context) {
      const timer = setTimeout(() => {
        setContext(false);
        clearTimeout(timer);
      }, 4000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (context)
    return (
      <IntroDiv>
        <InnerSloganDiv>
          <InicialSlogan />
        </InnerSloganDiv>
      </IntroDiv>
    );
  else
    return (
      <MainHomeDiv>
        <TopDiv>
          <TopDescription>
            <GroupTitle>
              <strong>
                <i>
                  Desarrollo ??gil de aplicaciones moviles, web y de escritorio
                  con alta calidad y dise??o centrado en el usuario para sus
                  proyectos personales y empresariales.
                </i>
              </strong>
            </GroupTitle>
            {/* <DescripcionText>
              Soluciones inform??ticas para las peque??as y grandes partes de t??
              d??a.
            </DescripcionText> */}
            <div style={{ width: "40%" }}>
              <FadedDiv style={{ padding: "0.1em" }}>
                <Link to="/contactme" style={styles.menuBtn}>
                  <BtnText style={{ fontSize: "3.5vw" }}>
                    <span>M??s informaci??n</span>
                  </BtnText>
                </Link>
              </FadedDiv>
            </div>
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

const styles = {
  menuBtn: {
    textDecoration: "none",
    color: "#000000",
    display: "grid",
    margin: "auto",
  },
};
