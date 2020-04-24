import React from 'react'
import SearchInput from './SearchInput';

const Header = ({ serachText }) => {

    return (
        <React.Fragment>
            <div className="o-header">
                <div className="o-header__brand">LOGO</div>
                <div className="o-header__search">
                    <SearchInput inputText={text => serachText(text)}/>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Header
