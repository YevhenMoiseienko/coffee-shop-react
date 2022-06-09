import './Button.scss'

export const Button = ({title, theme}) => {
    return <button className={theme}>{title}</button>
}
