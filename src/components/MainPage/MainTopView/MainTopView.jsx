import {NawBar} from "../../nawBar/NawBar";
import {Divider} from "../../divider/Divider";
import whiteFullGrain from "../../../Images/WhiteFullGrain.png";
import {Button} from "../../Button/Button";

import './MainTopView.scss'


export const MainTopView = () => {
    return (
        <div className='content'>
            <div className="container">
                <NawBar them='white' />
                <h1>Everything You Love About Coffee</h1>
                <Divider picture={whiteFullGrain} them='light' />
                <h2>We makes every day full of energy and taste</h2>
                <h2>Want to try our beans?</h2>
                <Button title='More' theme='btn' />
            </div>
        </div>
    )
}
