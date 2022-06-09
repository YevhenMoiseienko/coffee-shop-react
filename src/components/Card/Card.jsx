import './Card.scss'

export const Card = ({img, title, country, price}) => {
    return (
       <div className='card'>
           <img src={img} alt={title}/>
           <p>{title}</p>
           <p>{country}</p>
           <p>{price}$</p>
       </div>
    )
}
