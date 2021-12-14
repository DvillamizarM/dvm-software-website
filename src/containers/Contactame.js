import { useRef } from "react";
import {
  BtnText,
  ContactForm,
  DataField,
  ErrorMsg,
  FormDescription,
  InputField,
  Main,
  TextField,
} from "../styledComponents/contactme";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const schema = yup.object().shape({
  name: yup
    .string()
    .required("El campo es obligatorio")
    .matches(/^[^0-9]+$/, "No puede contener números o símbolos"),
  email: yup
    .string()
    .required("El campo es obligatorio")
    .email("Por favor ingrese un correo válido"),
  cell: yup
    .string()
    .required("El campo es obligatorio")
    .matches(/^\d+$/, "No puede contener letras o símbolos")
    .max(15, "Ingrese un número válido")
    .min(7, "Ingrese un número válido"),
});

export default function Contactame() {
  const PotentialClient = useRef();
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    reValidateMode: "onSubmit",
    resolver: yupResolver(schema),
  });

  const toastifySuccess = () => {
    toast.success(
      "Muchas gracias por contactarte conmigo. Muy pronto te envio respuesta.",
      {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        className: "submit-feedback success",
        toastId: "notifyToast",
      }
    );
  };

  const submit = () => {
    const serviceId = "service_pjiuv43";
    const templateId = "template_82l5ga3";
    const userId = "user_SDTbWwYsl23sqKa9StGdS";
    console.warn("potenition--", PotentialClient.current[0].value);
    const user = {
      name: PotentialClient.current[0].value,
      email: PotentialClient.current[1].value,
      cell: PotentialClient.current[2].value,
      description: PotentialClient.current[3].value,
    };
    emailjs.send(serviceId, templateId, user, userId).then(
      (result) => {
        reset();
        toastifySuccess();
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  // const submitRevamped = ()=>{
  //   toastifySuccess();
  // }

  return (
    <Main>
      <FormDescription>
        Para obtener más información sobre el desarrollo de tu próxima página
        web o aplicación ingresa tus datos de contacto y nos comunicamos
        contigo.
      </FormDescription>

      {/* <button onPress={submitRevamped()}>hi</button> */}
      <ContactForm
        ref={PotentialClient}
        onSubmit={handleSubmit(submit)}
        noValidate
      >
        <DataField>
          Nombre Completo:
          <InputField type="text" name="name" {...register("name")} />
          {errors.name && <ErrorMsg> {errors.name?.message} </ErrorMsg>}
        </DataField>
        <DataField>
          Correo Electrónico:
          <InputField type="email" name="email" {...register("email")} />
          {errors.email && <ErrorMsg> {errors.email?.message} </ErrorMsg>}
        </DataField>
        <DataField>
          Número telefónico:
          <InputField type="phone-number" name="cell" {...register("cell")} />
          {errors.cell && <ErrorMsg> {errors.cell?.message} </ErrorMsg>}
        </DataField>
        <DataField>
          Descripción de tu idea para el software (opcional):
          <TextField name="description" />
        </DataField>
        <BtnText type="submit" value="Enviar Datos" />
      </ContactForm>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover
      />
    </Main>
  );
}
