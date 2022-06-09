import {OurCoffeeTop} from "../components/OurCoffeePage/OurCoffeeTop/OurCoffeeTop";
import {OurCoffeeBeans} from "../components/OurCoffeePage/OurCoffeeBeans/OurCoffeeBeans";
import {OurCoffeeSearch} from "../components/OurCoffeePage/OurCoffeeSearch/OurCoffeeSearch";
import {OurCoffeeCards} from "../components/OurCoffeePage/OurCoffeeCards/OurCoffeeCards";


export const OurCoffeePage = ({data, findCards, filterCards}) => {
    return (
        <>
            <OurCoffeeTop/>
            <OurCoffeeBeans/>
            <OurCoffeeSearch findCards={findCards} filterCards={filterCards} />
            <OurCoffeeCards data={data}/>
        </>
    )
}
