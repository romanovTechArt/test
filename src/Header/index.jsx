import React from "react";
import './header.css'

const Header = () => {
    return (
        <header className={'header'}>
            <div className={'header__heading'}>
                <h2>Kanban Board Example</h2>
            </div>
            <div className={'header__info'}>
                <div className={'header__info_author'}>
                    Romanov V
                </div>
                <div className={'header__info_date'}>
                    September 06, 2021
                </div>
            </div>
        </header>
    )
}

export default Header;