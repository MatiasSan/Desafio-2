import React from "react";

const SocialButton = ({ FaFacebook, AiFillLinkedin, AiFillGithub }) => {
  return (
    <div className=" d-flex  justify-content-center">
      <h1 className=" mx-4 ">
        {" "}
        <FaFacebook />{" "}
      </h1>

      <h1 className=" mx-4">
        {" "}
        <AiFillGithub />{" "}
      </h1>

      <h1 className=" mx-4">
        {" "}
        <AiFillLinkedin />{" "}
      </h1>
    </div>
  );
};

export default SocialButton;
