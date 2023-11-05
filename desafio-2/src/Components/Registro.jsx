import React from "react";
import Alert from "./Alert";
import SocialButton from "./SocialButton";
import Formulario from "./Formulario";

// iconos
import { FaFacebook } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";

const Registro = ({ alert, setAlert }) => {
  return (
    <div className="card container w-25  my-5" >
      <div>

        <div className="d-flex justify-content-center">
        <h3>Crea tu cuenta</h3>

        </div>
     

        <div className="card-header">
        <SocialButton
          FaFacebook={FaFacebook}
          AiFillLinkedin={AiFillLinkedin}
          AiFillGithub={AiFillGithub}
        />


        </div>
     

        <Formulario setAlert={setAlert} />

        <Alert alert={alert} />
      </div>
    </div>
  );
};

export default Registro;
