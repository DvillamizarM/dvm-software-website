import { Link } from "react-router-dom";
import { Column, ColumnMenu, InfoText, Main, TagText,  BtnText, MenuItem} from "../styledComponents/footer";


export default function Home() {
  return (
    <Main>
      <Column >
          <InfoText>
            <strong>©2022 Daniela Villamizar Mendoza <br/> Desarrolladora de Software <br /> danii.codes@gmail.com <br /> +57
            316 823 6359</strong>
          </InfoText>
      </Column>
      <Column>
        <TagText>
          haz lo que amas <br />
          ama lo que haces
        </TagText>
      </Column>
      <ColumnMenu>
      <MenuItem>
      <Link to="/contactme" style={{
  marginTop: "-10%"}}>
          <BtnText>Contactame</BtnText>
        </Link>
      </MenuItem>
        <MenuItem>
        <Link to="/portfolio" style={{
  marginTop: "-10%"}}>
          <BtnText>Portafolio</BtnText>
        </Link>
        </MenuItem>
        <MenuItem>
        <Link to="/" style={{
  marginTop: "-10%"}}>
          <BtnText>Inicio</BtnText>
        </Link>
        </MenuItem>
      </ColumnMenu>
    </Main>
  );
}

