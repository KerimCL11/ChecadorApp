import './assets/css/app.css';
import { useState } from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import { prdAxios } from '../dataConf'
import logoImg from "./assets/LOGO.png"

function App() {
  const [empCode, SetEmpCode] = useState('');
  const [empCode2, SetEmpCode2] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [succes, setSucces] = useState(false);
  const [responseArray, setResposeArray] = useState([
    {
      EmpCode: "",
      EmpName: "",
      ProfilePicture: null,
    }
  ]);

  // Execute de submit
  const submitPunch = async (event) => {
    event.preventDefault();
    if (empCode !== empCode2) {
      withReactContent(Swal).fire({
        title: "Numero de empleado incorrecto?",
        text: "Ambos registros deben ser iguales",
        icon: "question"
      });
      return;

    }

    setIsLoading(true);
    setError(null);
    setSucces(false);

    try {
      const formData = new FormData();
      formData.append("empCode", empCode)
      const res = await prdAxios.post(`punch/${empCode}`);
      setResposeArray(res.data);
      setSucces(true);
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } catch (error) {
      console.error("Error on the submision:", error);
      setError(error);
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoading) {
    return (
      <>
        <div className="content">
          <header>
            Registrando comida
          </header>
          <div className="loader"></div>
        </div>
      </>
    )
  }
  if (error) {
    return (
      <>
        <div className="content">
          <header>
            {error.response.data}
          </header>
        </div>
      </>
    )
  }
  if (succes) {
    return (
      <>
        <div className="content">
          <header>
            {responseArray[0]?.EmpCode}
            <br />
            <br />
            {responseArray[0]?.EmpName}
          </header>
        </div>
      </>
    )
  }



  return (
    <>
      <div className="logo">
        <img src={logoImg}/>
      </div>
      <div className="content">
        <header>Registro para comedor</header>

        <form
          onSubmit={submitPunch}>
          {/* Emp Code 1 */}
          <div className="field">
            <span className="fa fa-user"></span>
            <input
              type="number"
              required
              // onInvalid={e => e.target.setCustomValidity("Code is required")}
              placeholder="Numero de empleado"
              value={empCode}
              onChange={(data) => SetEmpCode(data.target.value)}>
            </input>
          </div>

          {/* Emp Code 2 */}
          <div className="field">
            <span className="fa fa-user"></span>
            <input
              type="number"
              required
              // onInvalid={e => e.target.setCustomValidity("Code is required")}
              placeholder="Confirmar numero de empleado"
              onChange={(data) => SetEmpCode2(data.target.value)}>
            </input>
          </div>

          <div className="field">
            <input type="submit" value="Registrar entrada" >
            </input>
          </div>
        </form>
      </div>
    </>
  )
}

export default App