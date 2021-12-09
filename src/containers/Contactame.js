import Dropdown from "react-dropdown";
import { useState } from "react";
export default function Contactame() {
  const [form, setForm] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    whatsapp: "",
  });
  const options = ["one", "two", "three"];
  const defaultOption = options[0];
  return (
    <main style={{ padding: "1rem 0", height: "65vh" }}>
      <h2>Contact me</h2>
      <form onSubmit={() => {}}>
        <label>
          Nombre Completo:
          <input
            type="text"
            value={""}
            onChange={(val) => {
              setForm({ nombre: val });
            }}
          />
        </label>
        <label>
          Correo Electrónico:
          <input type="text"  />
        </label>
        <label>
          Número telefónico:
          <input type="text"  />
        </label>
        <Dropdown
          options={options}
          onChange={(value, index) => {}}
          value={defaultOption}
          placeholder="Select an option"
        />
        ;
        <input type="submit" value="Submit" />
      </form>
    </main>
  );
}
