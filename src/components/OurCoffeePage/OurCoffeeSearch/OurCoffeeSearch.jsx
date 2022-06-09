import {Button} from "../../Button/Button";
import './OurCoffeeSearch.scss'

export const OurCoffeeSearch = ({findCards, filterCards}) => {

    return (
        <div className='container ocsFlex'>
            <div className='input'>
                <label htmlFor='search'>Looking for</label>
                <input
                    id='search'
                    type="text"
                    placeholder='start typing here...'
                    onChange={(e) => findCards(e.target.value)} />
            </div>
            <div>
                <label htmlFor="filter">Our filter</label>
                <ul id='filter' className='filter'>
                    <li><Button filterCards={filterCards} title='Brazil' theme='btn-shadow start' /></li>
                    <li><Button filterCards={filterCards} title='Kenya' theme='btn-shadow' /></li>
                    <li><Button filterCards={filterCards} title='Columbia' theme='btn-shadow end' /></li>
                </ul>
            </div>
        </div>
    )
}
