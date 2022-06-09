import {OurCoffeeTop} from "../components/OurCoffeePage/OurCoffeeTop/OurCoffeeTop";
import {OurCoffeeBeans} from "../components/OurCoffeePage/OurCoffeeBeans/OurCoffeeBeans";
import {OurCoffeeSearch} from "../components/OurCoffeePage/OurCoffeeSearch/OurCoffeeSearch";
import {OurCoffeeCards} from "../components/OurCoffeePage/OurCoffeeCards/OurCoffeeCards";


export const OurCoffeePage = () => {
    return (
        <>
            <OurCoffeeTop />
            <OurCoffeeBeans />
            <OurCoffeeSearch />
            <OurCoffeeCards />
        </>
    )
}
