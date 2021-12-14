import styled from "styled-components";

export const Main = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(
    180deg,
    rgba(240, 240, 240, 1) 30%,
    rgba(137, 90, 235, 0.5) 60%,
    rgba(240, 240, 240, 1) 100%
  );
`;

export const FormDescription = styled.h4`
  font-size: 1em;
  font-family: "Murecho";
  font-weight: 600;
  text-align: justify;
  width: 80%;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
  margin-bottom: 2em;
`;

export const DataField = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Murecho";
  font-weight: 700;
  font-size: 1em;
  width: 50%;
  margin-bottom: 1em;

  @media (max-width: 40em) {
    width: 80%;
  }
  @media (max-width: 25em) {
    width: 100%;
  }
`;

export const DropdownDress = styled.div`
  background-color: #ffffff;
  width: 70%;
  margin-top: 0.3em;
  border-radius: 10vh 10vh 0vh 10vh;
  border: 1px solid #120a24;
  height: 5.5vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TextField = styled.textarea`
  margin-top: 0.3em;
  border-radius: 2vh;
  border: 1px solid #120a24;
  width: 70%;
  height: 25vh;
  font-family: "Murecho";
  font-weight: 400;
  font-size: 1.2em;
  @media (max-width: 25em) {
    width: 80%;
  }
`;

export const InputField = styled.input`
  margin-top: 0.3em;
  border-radius: 10vh 10vh 0vh 10vh;
  border: 1px solid #120a24;
  width: 70%;
  height: 5.5vh;
  font-family: "Murecho";
  font-weight: 400;
  font-size: 3.2vh;
  text-align: center;
  @media (max-width: 25em) {
    width: 80%;
  }
`;

export const BtnText = styled.input`
  appearance: none;
  &:hover {
    background-size: 100% 100%;
    color: #ffffff;
  }
  background: linear-gradient(
    180deg,
    rgba(137, 90, 235, 0.5) 21%,
    rgba(44, 24, 87, 1) 86%
  );
  position: relative;
  background-repeat: no-repeat;
  background-size: 300% 300%;
  width: 30%;
  border: 0px solid black;
  margin-top: 1em;
  display: grid;
  cursor: pointer;
  transition: 0.4s all;
  border-radius: 10vh 10vh 0vh 10vh;
  z-index: 1;
  font-size: 1em;
  @media (max-width: 40em) {
    padding-top: 0.3vh;
    width: 50%;
  }
  @media (max-width: 23em) {
    padding-top: 0.3vh;
  }
  font-size: 1.2em;
  font-family: "Murecho";
  font-weight: 1000;
  color: #120a24;
`;

export const ErrorMsg = styled.p`
  font-family: "Murecho";
  font-weight: 500;
  font-size: 0.7em;
  color: red;
  margin-bottom:-1%;
  margin-top:-0.2%;
`;
