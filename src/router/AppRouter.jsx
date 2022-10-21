import { Route, Routes } from 'react-router';
import { AuthRoutes } from '../auth/routes';
import { HeroesRoutes } from '../heroes';
import { PrivateRoute, PublicRoute } from './';

export const AppRouter = () => {
    return (
        <Routes>
            {/* Publicas */}
            <Route
                path="auth/*"
                element={
                    <PublicRoute>
                        <AuthRoutes />
                    </PublicRoute>
                }
            />

            {/* Privadas */}
            <Route
                path="*"
                element={
                    <PrivateRoute>
                        <HeroesRoutes />
                    </PrivateRoute>
                }
            />
        </Routes>
    );
};
