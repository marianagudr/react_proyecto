import logo from './assets/peppermint_deco_logo_pag.png'
import CartWidget from './CartWidget'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light navDetails">
                <div className="container-fluid d-flex justify-content-between">
                    <div className= "ms-3">
                        <a className="navbar-brand" href="#">
                            <img className="img-fluid logoDetails" src={logo} width="200" height="auto"/>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse d-flex justify-content-center me-3" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Nosotros</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Productos</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contacto</a>
                            </li>
                        </ul>
                    </div>
                    <div className="me-5">
                        <CartWidget />
                    </div>
                </div>
            </nav>
        </>

    )
}

export default Navbar;