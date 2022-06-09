import {Button} from "../../Button/Button";
import './OurCoffeeSearch.scss'

export const OurCoffeeSearch = () => {
    return (
        <div className='container ocsFlex'>
            <div className='input'>
                <label htmlFor='search'>Looking for</label>
                <input id='search' placeholder='start typing here...' type="text"/>
            </div>
            <div>
                <label htmlFor="filter">Our filter</label>
                <ul id='filter' className='filter'>
                    <li><Button title='Brazil' theme='btn-shadow start' /></li>
                    <li><Button title='Kenya' theme='btn-shadow' /></li>
                    <li><Button title='Columbia' theme='btn-shadow end' /></li>
                </ul>
            </div>
        </div>
    )
}
