import React from "react"
import { Link, graphql, useStaticQuery } from 'gatsby';
import headerStyles from './header.module.scss';

const Header = () => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <header className={headerStyles.header}>
            <h1><Link className={headerStyles.title} to='/'>{data.site.siteMetadata.title}</Link></h1>
            <nav>
                <ul className={headerStyles.navList}>
                    <li>
                        <Link className={headerStyles.navItem} to='/' activeClassName={headerStyles.activeNavItem}>Home</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} to='/about' activeClassName={headerStyles.activeNavItem}>About</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} to='/capabilities' activeClassName={headerStyles.activeNavItem}>Capabilities</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} to='/projects' activeClassName={headerStyles.activeNavItem}>Projects</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} to='/careers' activeClassName={headerStyles.activeNavItem}>Careers</Link>
                    </li>
                    <li>
                        <Link className={headerStyles.navItem} to='/contact' activeClassName={headerStyles.activeNavItem}>Contact</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;