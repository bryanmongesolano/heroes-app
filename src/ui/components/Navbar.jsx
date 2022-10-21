import { Link, NavLink, useNavigate } from 'react-router-dom';

export const Navbar = () => {
    const navigate = useNavigate();

    const onLogout = () => {
        navigate('/login', {
            replace:true
        })
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom shadow-sm">
                <div className="container-fluid">
                    <Link className="navbar-brand fw-semibold" to="/">
                        Heroes APP
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div
                        className="collapse navbar-collapse"
                        id="navbarSupportedContent"
                    >
                        <ul className="navbar-nav me-auto">
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-item nav-link ${
                                        isActive ? 'active' : ''
                                    }`
                                }
                                to="/marvel"
                            >
                                Marvel
                            </NavLink>
                            <NavLink
                                className={({ isActive }) =>
                                    `nav-item nav-link ${
                                        isActive ? 'active' : ''
                                    }`
                                }
                                to="/dc"
                            >
                                DC
                            </NavLink>
                        </ul>
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item nav-link">
                                <button
                                    className="btn btn-link text-info text-decoration-none p-0 fw-semibold td-none"
                                    onClick={onLogout}
                                >
                                    Cerrar sesión
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};
