import React, {useState} from 'react'

const Navbar = () => {

    const [active, setActive] = useState('About')

    return (
        <div className="navbar">
            <div className="navbar__active">
               {active}
            </div>
            <div className="navbar__items">
                <div className="navbar__item">About</div>
                <div className="navbar__item">Resume</div>
                <div className="navbar__item">Projects</div>
            </div>
        </div>
    )
}

export default Navbar;
