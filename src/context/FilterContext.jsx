import React, { createContext, useState } from 'react';

export const FilterContext = createContext();

export default function FilterProvider({ children }) {
    const [ALL, REMAINED, COMPLETED] = [{
        func: 'ALL',
        title: 'All',
    }, {
        func: 'REMAINED',
        title: 'Active',
    }, {
        func: 'COMPLETED',
        title: 'Completed',
    }];
    const filters = [ALL, REMAINED, COMPLETED];
    const [currentFilter, setCurrentFilter] = useState(ALL);

    return (
        <FilterContext.Provider value={{ filters, currentFilter, setCurrentFilter }}>{children}</FilterContext.Provider>
    );
}

