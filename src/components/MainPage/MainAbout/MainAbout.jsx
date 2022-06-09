import {Divider} from "../../divider/Divider";
import darkFullGrain from "../../../Images/DarkFullGrain.png";

import './MainAbout.scss'


export const MainAbout = () => {
    return (
       <div style={{width: '1440px', margin: '0 auto'}}>
           <div className='about container'>
               <h2>About Us</h2>
               <Divider picture={darkFullGrain} them='dark'/>
               <div className='description'>
                   <p>Extremity sweetness difficult behaviour he of. On disposal of as landlord horrible.
                       Afraid at highly months do things on at. Situation recommend objection do intention
                       so questions. As greatly removed calling pleased improve an. Last ask him cold feel
                       met spot shy want. Children me laughing we prospect answered followed. At it went
                       is song that held help face.
                   </p> <br/>
                   <p>
                       Now residence dashwoods she excellent you. Shade being under his bed her, Much
                       read on as draw. Blessing for ignorant exercise any yourself unpacked. Pleasant
                       horrible but confined day end marriage. Eagerness furniture set preserved far
                       recommend. Did even but nor are most gave hope. Secure active living depend son
                       repair day ladies now.
                   </p>
               </div>
           </div>
       </div>
    )
}
