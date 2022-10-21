import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth';

export const Navbar = () => {
    const navigate = useNavigate();

    //permite acceder a los  estados del contexto
    const {
        authState: { user },
        logout,
    } = useContext(AuthContext);

    const onLogout = () => {
        logout();

        navigate('/auth/login', {
            replace: true, //remplaza la ultima entrada del historial
        });
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark border-bottom shadow-sm">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand fw-semibold">
                    Heroes APP - {user?.name}
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
                            to="/marvel"
                            className={({ isActive }) =>
                                `${isActive ? 'active' : ''} nav-item nav-link`
                            }
                        >
                            Marvel
                        </NavLink>
                        <NavLink
                            to="/dc"
                            className={({ isActive }) =>
                                `${isActive ? 'active' : ''} nav-item nav-link`
                            }
                        >
                            DC
                        </NavLink>
                        <NavLink
                            to="/search"
                            className={({ isActive }) =>
                                `${isActive ? 'active' : ''} nav-item nav-link`
                            }
                        >
                            Search
                        </NavLink>
                    </ul>
                    <ul className="navbar-nav mb-2 mb-lg-0">
                        <li className="nav-item nav-link">
                            <button
                                className="btn btn-link text-info text-decoration-none p-0 fw-semibold td-none"
                                onClick={onLogout}
                            >
                                Log out
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
