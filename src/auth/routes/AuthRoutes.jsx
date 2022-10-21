import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../pages';

export const AuthRoutes = () => {
    return (
        <div className="container my-4">
            <Routes>
                <Route path="*" element={<Navigate to="/login"/>} />

                <Route path="login" element={<LoginPage />} />
            </Routes>
        </div>
    );
};