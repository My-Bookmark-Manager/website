import { useState } from "react"

const ListItems = ({data}) => {
    return (
        <div className="navbar-dropdown">
            {data.map((datum) => {
                return (<a key={datum} className="navbar-item">{datum}</a>)
            })}
        </div>
    )
}

const NavBar = ({contexts, categories, tags}) => {

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
                {/* Contexts */}
                <div className="navbar-start">
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">Context</a>
                        <ListItems data={contexts} />
                    </div>
                </div>

                {/* Categories */}
                <div className="navbar-start">
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">Categories</a>
                        <ListItems data={categories} />
                    </div>
                </div>

                {/* Tags */}
                <div className="navbar-start">
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">Tags</a>
                        <ListItems data={tags} />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;