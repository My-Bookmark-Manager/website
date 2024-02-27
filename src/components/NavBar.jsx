import { useState } from "react"

const ListItems = ({data, clickHandler}) => {

    return (
        <div className="navbar-dropdown">
            <a className="navbar-item" onClick={() => clickHandler('')} >All</a>
            {data.map((datum) => {
                return (<a key={datum} className="navbar-item" onClick={() => clickHandler(datum)} >{datum}</a>)
            })}
        </div>
    )
}

const NavBar = ({subjects, categories, tags, callback}) => {

    const [menuActive, setMenuActive] = useState('');

    const onHamburgerMenuHandler = () => {
        const status = menuActive === '' ? 'is-active' : '';
        setMenuActive(status);
    }

    return (
        <nav className="navbar is-fixed-top is-light" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <h1 className="title">My Bookmark Manager</h1>

                <a onClick={onHamburgerMenuHandler} role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarMenu">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarMenu" className={`navbar-menu ${menuActive}`}>
                {/* subjects */}
                <div className="navbar-start">
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">subjects</a>
                        <ListItems data={subjects} clickHandler={(value) => callback('subject', value)}/>
                    </div>
                </div>

                {/* Categories */}
                <div className="navbar-start">
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">Categories</a>
                        <ListItems data={categories} clickHandler={(value) => callback('category', value)}/>
                    </div>
                </div>

                {/* Tags */}
                <div className="navbar-start">
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">Tags</a>
                        <ListItems data={tags} clickHandler={(value) => callback('tag', value)}/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;