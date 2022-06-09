import {Divider} from "../../divider/Divider";
import aromisticoBig from '../../../Images/aromisticoBig.jpg'

import './OurCoffeeAbout.scss';
import darkFullGrain from "../../../Images/DarkFullGrain.png";

export const OurCoffeeAbout = ({country, description, price}) => {
    return (
        <div className='container'>
            <div className='aboutIt'>
                <div>
                    <img src={aromisticoBig} alt="aromistico main"/>
                </div>
                <div className='aboutIt-right'>
                    <h2>About it</h2>
                    <Divider picture={darkFullGrain} them='dark-short'/>
                    <p><span>Country: </span>{country}</p>
                    <p><span>Description: </span>{description}</p>
                    <p><span>Price: </span><span className='big'>{price}$</span></p>
                </div>
            </div>
        </div>
    )
}
