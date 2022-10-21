import { Link } from 'react-router-dom';
import 'animate.css';

export const HeroItem = ({
    id,
    superhero,
    alter_ego,
    first_appearance,
}) => {
    const heroImageUrl = `./src/heroes/assets/heroes/${id}.jpg`;

    return (
        <div className="col">
            <div className="card mb-3 shadow-sm animate__animated animate__fadeIn">
                <div className="row g-0">
                    <div className="col-5">
                        <img
                            src={heroImageUrl}
                            className="img-fluid rounded-start"
                            style={{ height: '100%', zIndex: '2' }}
                            alt={superhero}
                        />
                    </div>
                    <div className="col-7">
                        <div
                            className="h-100 d-flex flex-column justify-content-between"
                            style={{ zIndex: '1' }}
                        >
                            <div
                                className="card-body"
                                style={{ height: 'fit-content' }}
                            >
                                <h3 className="card-title mb-1">{superhero}</h3>
                                <h6 className="card-subtitle fw-semibold text-muted mb-2">
                                    {alter_ego}
                                </h6>
                                <Link
                                    to={`/hero/${id}`}
                                    className="stretched-link"
                                >
                                    Ver más
                                </Link>
                            </div>
                            <div className="card-footer text-muted">
                                {first_appearance}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
