import { useMemo } from 'react';
import { getHeroesByPublishers } from '../helpers';
import { HeroItem } from './HeroItem';


export const HeroList = ({ publisher }) => {
    const heroes = useMemo(() => getHeroesByPublishers(publisher), [publisher]);

    return (
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-3">
            {heroes.map((hero) => (
                <HeroItem key={hero.id} {...hero} />
            ))}
        </div>
    );
};
