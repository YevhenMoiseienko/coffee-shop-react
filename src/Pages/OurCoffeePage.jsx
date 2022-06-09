import {OurCoffeeTop} from "../components/OurCoffeePage/OurCoffeeTop/OurCoffeeTop";
import {OurCoffeeBeans} from "../components/OurCoffeePage/OurCoffeeBeans/OurCoffeeBeans";
import {OurCoffeeSearch} from "../components/OurCoffeePage/OurCoffeeSearch/OurCoffeeSearch";
import {OurCoffeeCards} from "../components/OurCoffeePage/OurCoffeeCards/OurCoffeeCards";
import {useEffect} from "react";
import {dataArrow} from "../data";


export const OurCoffeePage = ({data, findCards, filterCards, setCoffeeCards}) => {

    useEffect(() => {
        setCoffeeCards(dataArrow)
    }, []);

    return (
        <>
            <OurCoffeeTop/>
            <OurCoffeeBeans/>
            <OurCoffeeSearch findCards={findCards} filterCards={filterCards} />
            <OurCoffeeCards data={data}/>
        </>
    )
}
