import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../auth/context';

export const PublicRoute = ({ children }) => {
    //comprobar si está loggeado
    const {
        authState: { logged },
    } = useContext(AuthContext);

    return logged ? <Navigate to="/" /> : children;
};
