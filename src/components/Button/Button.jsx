import './Button.scss'

export const Button = ({title, theme, filterCards}) => {
    return <button onClick={() => filterCards(title)} className={theme}>{title}</button>
}
