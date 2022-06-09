import {Card} from "../../Card/Card";
import aromistico from '../../../Images/aromistico.png'
import './OurCoffeeCards.scss'


export const OurCoffeeCards = () => {
    return (
        <div className='container'>
            <div className='grid'>
                <Card img={aromistico} title='AROMISTICO Coffee 1 kg' country='Brazil' price='6.99' />
                <Card img={aromistico} title='AROMISTICO Coffee 1 kg' country='Brazil' price='6.99' />
                <Card img={aromistico} title='AROMISTICO Coffee 1 kg' country='Brazil' price='6.99' />
                <Card img={aromistico} title='AROMISTICO Coffee 1 kg' country='Brazil' price='6.99' />
                <Card img={aromistico} title='AROMISTICO Coffee 1 kg' country='Brazil' price='6.99' />
                <Card img={aromistico} title='AROMISTICO Coffee 1 kg' country='Brazil' price='6.99' />
            </div>
        </div>
    )
}
