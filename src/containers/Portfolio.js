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
import { SmallText,  } from "../styledComponents/home";
import reactimg from "../imgs/react.png";
import firebase from "../imgs/firebase.png";
import redux from "../imgs/redux.png";

export default function Portfolio() {
  return (
    <Main>
      <FormDescription>
        Colección de aplicaciones desarrolladas por Daniela Villamizar Mendoza.
        Las tecnologías utilizadas incluyen React JS, React Native, Java,
        Firebase, PostgreSQL, entre otras.
      </FormDescription>
      <ProjectList>
        <Project>
          <AppLogoDiv>
            <AppLogo src={apptivateLogo} />
          </AppLogoDiv>
          <AppDescriptionDiv>
            <AppTitle>Apptivate</AppTitle>
            <SmallText style={{marginTop:"-2%"}}>Aplicación móvil de apoyo a la rehabilitación 
              física de pacientes amputados de miembro inferior. 
              La app consiste en 5 módulos para los roles de usuario amputado público, paciente, acompañante de paciente, fisioterapeuta y administrador. Ofrece un catalogo de información</SmallText>
            <AppTechs>
              <TechItemImg
                src={reactimg}
                alt="Logo del framework de programación web React JS y programación móvil React Native"
              />
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
          <BtnText>Descargar para Android</BtnText>
          <BtnText>Descargar con Expo (para iOS)</BtnText>
          <BtnText>Abrir en GitHub</BtnText>
          <BtnText>Ver capturas de interfaz</BtnText>
          </AppDownloads>
        </Project>
      </ProjectList>
    </Main>
  );
}
