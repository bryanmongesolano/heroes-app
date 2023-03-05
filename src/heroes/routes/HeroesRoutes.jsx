import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from '../../ui/components';
import { DCPage, HeroPage, MarvelPage, SearchPage, MainPage } from '../pages';

export const HeroesRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container my-4">
                <Routes>
                    <Route path="*" element={<Navigate to="/all" />} />

                    <Route path="all" element={<MainPage />} />
                    <Route path="marvel" element={<MarvelPage />} />
                    <Route path="dc" element={<DCPage />} />
                    <Route path="search" element={<SearchPage />} />
                    <Route path="hero/:id" element={<HeroPage />} />
                </Routes>
            </div>
        </>
    );
};
