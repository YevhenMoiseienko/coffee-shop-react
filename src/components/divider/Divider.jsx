

import './Divider.scss'

export const Divider = ({picture, them}) => {
    return (
        <div className={them}>
            <img src={picture} alt="#"/>
        </div>
    )
}
