import {Link} from 'react-router-dom'

function Nav(){

    return(
        <div>
            <nav>

                <Link to="/">Inicio 
                    <img src="/logoAVI.png" alt="AVI Logo" className="logo-img" style={{height:"50px", width: "auto"}}></img>
                </Link>

                <div className='nav-left'>
                    <Link to="/bienvenidatest">Test</Link>
                    <Link to="/programas">Programas</Link>
                    <Link to="/mapa">Mapa</Link>
                </div>

                
                    
            </nav>
        </div>
    )
}



export default Nav