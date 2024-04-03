import './assets/css/app.css'

function App() {
  return (
    <>
      <div className="content">
        <header>Registro para comedor</header>
        <form >
          <div className="field">
            <span className="fa fa-user"></span>
            <input type="text" required placeholder="Numero de empleado"></input>
          </div>
          <div></div>
          <div className="field">
            <span className="fa fa-user"></span>
            <input type="text" required placeholder="Confirmar numero de empleado"></input>
          </div>

          <div className="field">
            <input type="submit" value="Registrar entrada"></input>
          </div>
        </form>
      </div>
    </>
  )
}

export default App