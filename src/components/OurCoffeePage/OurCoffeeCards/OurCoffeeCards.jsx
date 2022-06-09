import {Card} from "../../Card/Card";
import './OurCoffeeCards.scss'
import {Link} from "react-router-dom";


export const OurCoffeeCards = ({data}) => {

    const list = () => {
        return data.map(({id, page, title, country, price}) => {
            return (
                <Link key={id} to={`../coffee/${id}`}>
                    <Card img={page} title={title} country={country} price={price} />
                </Link>
            )
        })
    }
    return (
        <div className='container'>
            <div className='grid'>
                {list()}
            </div>
        </div>
    )
}
