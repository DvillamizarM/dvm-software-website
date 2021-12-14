/* eslint-disable no-unused-vars */
import { FormDescription, Main } from "../styledComponents/contactme";
import {
  AppDownloads,
  AppDescriptionDiv,
  AppLogo,
  AppLogoDiv,
  AppTechs,
  AppTitle,
  Project,
  TechItemImg,
  ProjectList,
  BtnText,
} from "../styledComponents/portfolio";
import apptivateLogo from "../imgs/apptivateLogo.png";
import alertaCucuta from "../imgs/alertaCucuta.png";
import { SmallText } from "../styledComponents/home";
import reactimg from "../imgs/react.png";
import firebase from "../imgs/firebase.png";
import redux from "../imgs/redux.png";
import expologo from "../imgs/expologo.png";
import java from "../imgs/java.png";

function Apptivate() {
  return (
    <Project>
      <AppLogoDiv>
        <AppLogo src={apptivateLogo} />
      </AppLogoDiv>
      <AppDescriptionDiv>
        <AppTitle>Apptivate</AppTitle>
        <SmallText style={{ marginTop: "-2%" }}>
          Aplicación móvil de apoyo a la rehabilitación física de pacientes
          amputados de miembro inferior. La app consiste en 5 módulos para los
          roles de usuario amputado público, paciente, acompañante de paciente,
          fisioterapeuta y administrador. Ofrece un catalogo de información,
          plan de ejercicios, control para el progreso del plan acorde a lo
          registrado en la plataforma.{" "}
        </SmallText>
        <AppTechs>
          <TechItemImg
            src={reactimg}
            alt="Logo del framework de programación web React JS y programación móvil React Native"
          />
          <TechItemImg src={expologo} alt="Logo de herramienta Expo Go." />
          <TechItemImg
            src={redux}
            alt="Logo de gestor de estado Redux para React JS y React Native"
          />
          <TechItemImg
            src={firebase}
            alt="Logo de servicios de Google Firebase como gestor de base de datos NoSQL en la nube."
          />
        </AppTechs>
      </AppDescriptionDiv>
      <AppDownloads>
        <BtnText
          href="https://drive.google.com/file/d/1GSZ5mm-CIpbnQ-1xWQn_PXku-n0T-aiO/view?usp=sharing"
          target="_blank"
        >
          Descargar para Android (APK)
        </BtnText>
        {/* <BtnText>Descargar con Expo (para iOS)</BtnText> */}
        <BtnText
          href="https://github.com/DvillamizarM/apptivate"
          target="_blank"
        >
          Abrir en GitHub
        </BtnText>
        {/* <BtnText>Ver video</BtnText> */}
      </AppDownloads>
    </Project>
  );
}

function Alerta() {
  return (
    <Project>
      <AppLogoDiv>
        <AppLogo src={alertaCucuta} />
      </AppLogoDiv>
      <AppDescriptionDiv>
        <AppTitle>Alerta Cúcuta</AppTitle>
        <SmallText style={{ marginTop: "-2%" }}>
          Aplicación móvil de alertas de incidentes en una ciudad de Colombia.
          Utiliza los servicios de Google Places API para ubicar los reportes en
          las ubicaciones que fueron registrados.{" "}
        </SmallText>
        <AppTechs>
          <TechItemImg
            src={java}
            alt="Logo del lenguaje de programación Java"
          />
          <TechItemImg
            src={firebase}
            alt="Logo de servicios de Google Firebase como gestor de base de datos NoSQL en la nube."
          />
        </AppTechs>
      </AppDescriptionDiv>
      <AppDownloads>
        <BtnText
          href="https://drive.google.com/file/d/1GSZ5mm-CIpbnQ-1xWQn_PXku-n0T-aiO/view?usp=sharing"
          target="_blank"
        >
          Descargar para Android (APK)
        </BtnText>
        {/* <BtnText>Descargar con Expo (para iOS)</BtnText> */}
        <BtnText
          href="https://github.com/DvillamizarM/AlertaCucuta"
          target="_blank"
        >
          Abrir en GitHub
        </BtnText>
        {/* <BtnText>Ver video</BtnText> */}
      </AppDownloads>
    </Project>
  );
}

export default function Portfolio() {
  return (
    <Main style={{background:"#fff"}}>
      <FormDescription>
        Colección de aplicaciones desarrolladas por Daniela Villamizar Mendoza.
        Las tecnologías utilizadas incluyen React JS, React Native, Java,
        Firebase, PostgreSQL, entre otras.
      </FormDescription>
      <ProjectList>
        <Apptivate />
        <Alerta/>
      </ProjectList>
    </Main>
  );
}
