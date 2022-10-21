import { useMemo } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { NavigateBackRow } from '../components/NavigateBackRow';
import { getHeroById } from '../helpers';
import 'animate.css';


export const HeroPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const hero = useMemo(() => getHeroById(id), [id]);
    const characters = hero.characters.split(', ');

    const onNavigateBack = () => {
        navigate(-1);
    };

    if (!hero) return <Navigate to="/" />;

    return (
        <>
            <NavigateBackRow navigateBack={onNavigateBack} />

            <div className="row g-4">
                <div className="col-sm-3" style={{zIndex: '2'}}>
                    <img
                        src={`/src/heroes/assets/heroes/${id}.jpg`}
                        alt={hero.superhero}
                        className="img-thumbnail animate__animated animate__flip"
                    />
                </div>
                <div className="col-sm-9 animate__animated animate__fadeIn" style={{zIndex: '1'}}>
                    <h3>{hero.superhero}</h3>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            {' '}
                            <span className="fw-semibold">
                                Publisher:{' '}
                            </span>{' '}
                            {hero.publisher}
                        </li>
                        <li className="list-group-item">
                            {' '}
                            <span className="fw-semibold">
                                Alter ego:{' '}
                            </span>{' '}
                            {hero.alter_ego}
                        </li>
                        <li className="list-group-item">
                            {' '}
                            <span className="fw-semibold">
                                First appearance:{' '}
                            </span>{' '}
                            {hero.first_appearance}
                        </li>
                    </ul>

                    <h4 className="my-3">Characters</h4>

                    <div className="d-flex flex-wrap ps-3 gap-2">
                        {characters.map((character) => (
                            <span className="bg-success bg-opacity-25 border border-success border-opacity-25 fw-semibold text-success rounded px-2">
                                {character}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
