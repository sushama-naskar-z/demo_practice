import React from 'react';
import { ReactComponent as Search } from '../images/search.svg';
import { ReactComponent as Filters } from '../images/filters.svg';

export default function AdminNav() {
    return (
        <div>
            <Filters />
            <Search />
        </div>
    )
}
