import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../helpers';
import { HeroItem } from '../components/HeroItem';

export const SearchPage = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const [searchParams, setSearchParams] = useSearchParams();
    const q = searchParams.get("q") || ''

    const heroes = getHeroesByName(q);

    const { searchText, onInputChange } = useForm({
        searchText: q,
    });

    const onSearchSubmit = (e) => {
        e.preventDefault();
        navigate(`?q=${searchText}`);
    };

    return (
        <>
            <div className="d-flex gap-4 align-items-center">
                <h1>Search</h1>
                <form action="" className="w-100" onSubmit={onSearchSubmit}>
                    <div className="input-group">
                        <input
                            type="text"
                            name="searchText"
                            className="form-control"
                            placeholder="Search a hero by name"
                            autoComplete="off"
                            value={searchText}
                            onInput={onInputChange}
                        />
                        <button type="submit" className="btn btn-primary">
                            <i className="bi bi-search"></i>
                        </button>
                    </div>
                </form>
            </div>
            <hr />

            <div className="row row-cols-1 g-4">
                <div className="col">
                    <h3>Results</h3>

                    {heroes.length === 0 && (
                        <div className="alert alert-danger py-2 animate__animated animate__headShake">
                            <i className="bi bi-exclamation-triangle-fill"></i>{' '}
                            There's no match with <b>"{searchText}"</b>
                        </div>
                    )}

                    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
                        {heroes.map((hero) => (
                            <div className="col">
                                <HeroItem {...hero} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};
