import {ForPleasureTop} from "../components/ForPleasure/ForPleasureTop/ForPleasureTop";
import {ForPleasureDescr} from "../components/ForPleasure/ForPleasureDesrc/ForPleasureDescr";
import {OurCoffeeCards} from "../components/OurCoffeePage/OurCoffeeCards/OurCoffeeCards";


export const OurPleasurePage = ({data}) => {
    return (
        <>
            <ForPleasureTop />
            <ForPleasureDescr />
            <OurCoffeeCards data={data} />
        </>
    )
}
