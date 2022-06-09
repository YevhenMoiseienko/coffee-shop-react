import {ForPleasureTop} from "../components/ForPleasure/ForPleasureTop/ForPleasureTop";
import {ForPleasureDescr} from "../components/ForPleasure/ForPleasureDesrc/ForPleasureDescr";
import {OurCoffeeCards} from "../components/OurCoffeePage/OurCoffeeCards/OurCoffeeCards";
import {useEffect} from "react";
import {dataArrow} from "../data";


export const OurPleasurePage = ({data, setCoffeeCards}) => {
    useEffect(() => {
        setCoffeeCards(dataArrow)
    }, [])
    return (
        <>
            <ForPleasureTop />
            <ForPleasureDescr />
            <OurCoffeeCards data={data} />
        </>
    )
}
