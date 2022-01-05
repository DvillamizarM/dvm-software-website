import { Link } from "react-router-dom";
import {
  BtnDiv,
  Main,
  MenuDiv,
  FadedDiv,
  BtnText,
  Logo,
  Slidey,
  LogoText,
  SlideSpan,
  LogoImgDiv,
  LogoImg,
} from "../styledComponents/menu";
import DVM from "../imgs/DVM.png";
// import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

export default function Menu() {
  return (
    <Main>
      <Slidey>
        <Logo>
          {/* <LogoText>
            <GlowSpan>DVM</GlowSpan>
          </LogoText> */}

          <LogoImgDiv>
            <LogoImg
              src={DVM}
              alt="Logo de Danienla Villamizar Mendoza Software"
            />
          </LogoImgDiv>

          <LogoText>
            <SlideSpan>Software</SlideSpan>
          </LogoText>
        </Logo>
        <MenuDiv>
          <BtnDiv style={{ borderRadius: "10vh 0% 0% 10vh" }}>
            <FadedDiv>
              <Link to="/" style={styles.menuBtn}>
                <BtnText>Inicio</BtnText>
              </Link>
            </FadedDiv>
          </BtnDiv>
          <BtnDiv>
            <FadedDiv>
              <Link to="/aboutme" style={styles.menuBtn}>
                <BtnText>Sobre Mi</BtnText>
              </Link>
            </FadedDiv>
          </BtnDiv>
          <BtnDiv>
            <FadedDiv>
              <Link to="/portfolio" style={styles.menuBtn}>
                <BtnText>Portafolio</BtnText>
              </Link>
            </FadedDiv>
          </BtnDiv>
          <BtnDiv>
            <FadedDiv>
              <Link to="/contactme" style={styles.menuBtn}>
                <BtnText>Contáctame</BtnText>
              </Link>
            </FadedDiv>
          </BtnDiv>
        </MenuDiv>
      </Slidey>
    </Main>
  );
}

const styles = {
  menuBtn: {
    textDecoration: "none",
    color: "#000000",
    display:"grid",
    margin:"auto",
  },
};
