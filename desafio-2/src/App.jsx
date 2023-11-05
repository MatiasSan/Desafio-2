import { useState } from "react";
import "./App.css";
import Registro from "./Components/Registro";

function App() {
  const [alert, setAlert] = useState(null);

  return (
    <>

    
      <Registro alert={alert} setAlert={setAlert} />
    </>
  );
}

export default App;
