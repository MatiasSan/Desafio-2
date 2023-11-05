import React, { useState } from "react";

const Formulario = ({ setAlert }) => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    password: "",
    confirmPassword: "",
  });



  const validarDatos = (e) => {
    e.preventDefault(); // para que el formulario no se envíe automáticamente
    const { nombre, email, password, confirmPassword } = formData;

    const datosValidar = !nombre || !email || !password || !confirmPassword;
    const validarPassword = password === confirmPassword;

    if (datosValidar) {
      setAlert({
        error: true,
        msg: "Completa todos los campos.",
        color: "warning",
      });
    } else {
      if (!validarPassword) {
        setAlert({
          error: true,
          msg: "Las contraseñas no coinciden.",
          color: "danger",
        });
      } else {
        setAlert({
          error: true,
          msg: "¡Todo perfecto!",
          color: "success",
        });

        setTimeout(() => {
          setFormData({
            nombre: "",
            email: "",
            password: "",
            confirmPassword: "",
          });

          setAlert(null);



        }, 1000);

        console.log("mostrando mensaje correcto");

      }
    }
  };

  return (
    <div >
      <form onSubmit={validarDatos} className=" d-flex flex-column" >
        <input
          type="text"
          placeholder="Nombre"
          name="nombre"
          className="mx-4 my-2"
          value={formData.nombre}
          onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
        />

        <input
          type="email"
          placeholder="Email"
          name="email"
          className="mx-4 my-2"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Contraseña"
          name="password"
          className="mx-4 my-2"
          value={formData.password}
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
        />

        <input
          type="password"
          placeholder="Confirmar Contraseña"
          name="confirmPassword"
          className="mx-4 my-2"
          value={formData.confirmPassword}
          onChange={(e) =>
            setFormData({ ...formData, confirmPassword: e.target.value })
          }
        />

        <button 
        
        className="mx-4 my-2  bg-success  text-white"
        type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default Formulario;
