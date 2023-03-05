import { useMemo } from 'react';
import { getHeroesByPublishers, getAllHeroes } from '../helpers';
import { HeroItem } from './HeroItem';


export const HeroList = ({ publisher }) => {
    let heroes = []
    if (publisher) heroes = useMemo(() => getHeroesByPublishers(publisher), [publisher]);
    else heroes = useMemo(() => getAllHeroes(), [publisher]);

    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
            {heroes.map((hero) => (
                <HeroItem key={hero.id} {...hero} />
            ))}
        </div>
    );
};
