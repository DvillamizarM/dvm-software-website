import { BtnText } from "../styledComponents/portfolio";

export default function AboutMe() {
  return (
    <main style={{ padding: "1rem 0", height: "60vh" }}>
     <div style={{ width: "70%", height:"40%" }}>
        <div style={{ width: "70%" }}>
        <BtnText
          href="https://drive.google.com/file/d/10SrOqXLDaBGqeMv3BdiPhjh2ol6AgVuF/view?usp=sharing"
          target="_blank"
          style={{ fontSize: "3.5vw" }}
        >
          <span>Descargar CV en Ingles</span>
        </BtnText>
      </div>

      <div style={{ width: "70%" }}>
        <BtnText
          href="https://drive.google.com/file/d/1wf-Q62_QTTisNvCKQuMggazSad2e_l6_/view?usp=sharing"
          target="_blank"
          style={{ fontSize: "3.5vw" }}
        >
          <span>Descargar CV en Español</span>
        </BtnText>
      </div>
     </div>
     

    </main>
  );
}

