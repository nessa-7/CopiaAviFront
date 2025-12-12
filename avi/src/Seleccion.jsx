import {useNavigate} from "react-router-dom"

function Seleccion(){

    const navigate = useNavigate();
    
    
      function loginadmin() {
        navigate("/loginadmin");
      }

      function loginasp() {
        navigate("/login");
      }


    return(
        <div >
            <div className="cards-login">
                <div className="cardlogin" onClick={loginasp}>
                    <h2>Ingresar como Aspirante</h2>
                    <p className="card-text">
                        Ingresa como aspirante para conocer las recomendaciones que nuestro
                        test vocacional tiene para ti.
                    </p>
                </div>

                <div className="cardlogin" onClick={loginadmin}>
                    <h2>Ingresar como Admin</h2>
                    <p className="card-text">
                        Ingresa como administrador para visualizar estadísticas, gestionar
                        usuarios y administrar la plataforma.
                    </p>
                </div>
            </div>

        </div>
    )
}

export default Seleccion