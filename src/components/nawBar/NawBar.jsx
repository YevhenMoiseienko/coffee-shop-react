import './NawBar.scss'

export const NawBar = ({them}) => {
    return (
        <nav className='nav'>
            <ul className={them}>
                <li>Coffee house</li>
                <li>Our coffee</li>
                <li>For your pleasure</li>
            </ul>
        </nav>
    )
}
