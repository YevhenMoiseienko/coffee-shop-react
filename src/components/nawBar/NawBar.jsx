import {NavLink} from "react-router-dom";

import './NawBar.scss'

export const NawBar = ({them}) => {
    return (
        <nav className='nav'>
            <ul className={them}>
                <li><NavLink
                    style={({isActive}) => ({color: isActive ? 'orange' : 'inherit'})}
                    to='/'
                >Coffee house</NavLink></li>
                <li><NavLink
                    style={({isActive}) => ({color: isActive ? 'orange' : 'inherit'})}
                    to='/coffee'
                >Our coffee</NavLink></li>
                <li><NavLink
                    style={({isActive}) => ({color: isActive ? 'orange' : 'inherit'})}
                    to='/pleasure'
                >For your pleasure</NavLink></li>
            </ul>
        </nav>
    )
}
