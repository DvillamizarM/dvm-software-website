import { Link } from "react-router-dom";
import {
  Column,
  ColumnMenu,
  InfoText,
  Main,
  BtnText,
  MenuItem,
} from "../styledComponents/footer";
import trasparentDVM from "../imgs/transparentDVM.png"

export default function Home() {
  return (
    <Main>
      <Column>
        <InfoText>
          <strong>
            ©2022 Daniela Villamizar Mendoza <br /> Desarrolladora de Software{" "}
            <br /> dvmsoftech@gmail.com <br /> +57 316 823 6359
          </strong>
        </InfoText>
      </Column>
      <Column>
        <img style={{maxWidth:"30%", margin:"auto", padding:"10%"}} src= {trasparentDVM} alt="DVM SOftware Logo" />
      </Column>
      <ColumnMenu>
            <MenuItem>
              <Link
                to="/"
                // style={{
                //   marginTop: "-10%",
                // }}
              >
                <BtnText>Inicio</BtnText>
              </Link>
            </MenuItem>
        <MenuItem>
          <Link
            to="/portfolio"
            // style={{
            //   marginTop: "-10%",
            // }}
          >
            <BtnText>Portafolio</BtnText>
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            to="/contactme"
            // style={{
            //   marginTop: "-10%",
            // }}
          >
            <BtnText>Contactame</BtnText>
          </Link>
        </MenuItem>
      </ColumnMenu>
    </Main>
  );
}
