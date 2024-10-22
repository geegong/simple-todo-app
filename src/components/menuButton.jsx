import React from 'react';

export default function menuButton({ filter, isClicked, clickEvent, isDarkMode }) {
    const changeCurrentMenu = () => clickEvent(filter);

    return (
        <p className={isDarkMode === 'Y' ? 'filter' : 'day-filter'}>
            <a className={isClicked ? 'checked' : ''} onClick={changeCurrentMenu}>{filter?.title}</a>
        </p>
    );
}