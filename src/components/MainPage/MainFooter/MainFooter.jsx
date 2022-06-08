import {NawBar} from "../../nawBar/NawBar";
import {Divider} from "../../divider/Divider";
import darkFullGrain from "../../../Images/DarkFullGrain.png";

import './MainFooter.scss'

export const MainFooter = () => {
    return (
        <div style={{width: '1440px'}}>
            <div className='container footer'>
                <NawBar them='black' />
                <Divider picture={darkFullGrain} them='dark'/>
            </div>
        </div>
    )
}
