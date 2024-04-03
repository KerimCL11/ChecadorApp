import './assets/css/app.css';
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';

function App() {
  const [empCode, SetEmpCode] = useState('');
  const [empCode2, SetEmpCode2] = useState('');

  // Execute de mutation
  const submitPunch = (event) => {
    event.preventDefault();

    // Mutation
    if (empCode === empCode2) {
      mutation.mutate({ empCode });
    } else {
      alert('Employee codes do not match. Please try again.');
    }
  };

  // Mutating
  const mutation = useMutation(empCode => {
    return axios.post('http://localhost:8099/punch/', { empCode });
  });
  if (mutation.isLoading) {
    return <span>Registrando...</span>;
  }
  if (mutation.isError) {
    return <span>Error: {mutation.error.message}</span>;
  }
  if (mutation.isSuccess) {
    return <span>Punch submitted!</span>;
  }

  return (
    <>
      <div className="content">
        <header>Registro para comedor</header>

        <form 
        onSubmit={submitPunch}>

          {/* Emp Code 1 */}
          <div className="field">
            <span className="fa fa-user"></span>
            <input
              type="text"
              required
              placeholder="Numero de empleado"
              value={empCode}
              onChange={(data) => SetEmpCode(data.target.value)}>
            </input>
          </div>

          {/* Emp Code 2 */}
          <div className="field">
            <span className="fa fa-user"></span>
            <input
              type="text"
              required placeholder="Confirmar numero de empleado"
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