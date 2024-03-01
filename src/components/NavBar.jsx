import { useState } from "react"

const ListItems = ({data, clickHandler}) => {

    return (
        <div className="navbar-dropdown is-right">
            {/* <a className="navbar-item" onClick={() => clickHandler('')} >All</a> */}
            {data.map((datum) => {
                return (<a key={datum} className="navbar-item" onClick={() => clickHandler(datum)} >{datum || 'All'}</a>)
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

    const onItemClick = (key, value) => {
        callback(key, value)
        setMenuActive('')
    }

    return (
        <nav className="navbar is-fixed-top is-light" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <h1 className="title m-4">My Bookmark Manager</h1>

                <a onClick={onHamburgerMenuHandler} role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarMenu">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarMenu" className={`navbar-menu ${menuActive}`}>
                
                <div className="navbar-end">

                    {/* Completed */}
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">Status</a>
                        <div className="navbar-dropdown is-right">
                            <a className="navbar-item" onClick={() => onItemClick('completed', '')} >All</a>
                            <a className="navbar-item" onClick={() => onItemClick('completed', true)} >Completed</a>
                            <a className="navbar-item" onClick={() => onItemClick('completed', false)} >Not Completed</a>
                        </div> 
                    </div>

                    {/* subjects */}
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">Subjects</a>
                        <ListItems data={subjects} clickHandler={(value) => onItemClick('subject', value)}/>
                    </div>

                    {/* Categories */}
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">Categories</a>
                        <ListItems data={categories} clickHandler={(value) => onItemClick('category', value)}/>
                    </div>

                    {/* Tags */}
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">Tags</a>
                        <ListItems data={tags} clickHandler={(value) => onItemClick('tag', value)}/>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;