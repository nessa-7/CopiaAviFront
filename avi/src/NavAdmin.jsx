import {Link} from 'react-router-dom'

function NavAdmin(){

    return(
        <div>
            <nav>

                <Link to="/">Inicio 
                    <img src="/logoAVI.png" alt="AVI Logo" className="logo-img" style={{height:"50px", width: "auto"}}></img>
                </Link>

                <div className='nav-left'>
                    <Link to="/estadisticas">Estadisticas</Link>
                    <Link to="/registroadmin">Registrar Admin</Link>
                    <Link to="/mapa">Mapa</Link>
                </div>

                <div className="nav-right">
                </div>
                    
            </nav>
        </div>
    )
}



export default NavAdmin