import {Divider} from "../../divider/Divider";
import darkFullGrain from "../../../Images/DarkFullGrain.png";
import coffeeGirl from '../../../Images/coffeeGirl.jpg'

import './OurCoffeeBeans.scss'

export const OurCoffeeBeans = () => {
    return (
        <div className='container'>
            <div className='ocb-flex'>
                <div>
                    <img src={coffeeGirl} alt=""/>
                </div>
                <div style={{width: '50%'}}>
                    <h2>About our beans</h2>
                    <Divider picture={darkFullGrain} them='dark-short'/>
                    <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.

                        Afraid at highly months do things on at. Situation recommend objection do intention
                        so questions.
                        As greatly removed calling pleased improve an. Last ask him cold feel
                        met spot shy want. Children me laughing we prospect answered followed. At it went
                        is song that held help face.</p>
                </div>
            </div>
            <div className='bottomLine' />
        </div>
    )
}
