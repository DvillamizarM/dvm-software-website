/* eslint-disable no-unused-vars */
import Dropdown from "react-dropdown";
import { useState } from "react";
import {
  BtnText,
  ContactForm,
  DataField,
  DropdownDress,
  FormDescription,
  InputField,
  Main,
} from "../styledComponents/contactme";
import { FadedDiv } from "../styledComponents/menu";
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
    <Main >
      <FormDescription>Para obtener más información sobre el desarrollo de tu próxima página web o aplicación ingresa tus datos de contacto y nos comunicamos contigo.</FormDescription>
      <ContactForm onSubmit={() => {}}>
        <DataField>
          Nombre Completo:
          <InputField
            type="text"
            onChange={(val) => {
              setForm({ nombre: {val} });
            }}
          />
        </DataField>
        <DataField>
          Correo Electrónico:
          <InputField type="email" />
        </DataField>
        <DataField>
          Número telefónico:
          <InputField type="phone-number" />
        </DataField>

        {/* <DataField>
          Que tipo de app estás pensando?
          <DropdownDress>
            <Dropdown
              options={options}
              onChange={(value, index) => {}}
              style={{
                fontFamily: "Murecho",
                fontWeight: "700",
                fontSize: "3.2vh",
              }}
              value={defaultOption}
              placeholder="Select an option"
            />
          </DropdownDress>
        </DataField> */}
          <BtnText type="submit" value="Enviar Datos" />
      </ContactForm>
    </Main>
  );
}
