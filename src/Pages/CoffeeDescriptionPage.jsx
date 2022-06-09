import {useParams} from "react-router-dom";
import {OurCoffeeTop} from "../components/OurCoffeePage/OurCoffeeTop/OurCoffeeTop";
import {OurCoffeeAbout} from "../components/OurCoffeePage/OurCoffeeAbout/OurCoffeeAbout";
import {dataArrow} from "../data";
import {useEffect, useState} from "react";

export const CoffeeDescriptionPage = () => {
    const [card, setCard] = useState({});
    const {coffeeId} = useParams();

    useEffect(() => {
        setCard(dataArrow.find(item => item.id === coffeeId))
    }, [coffeeId]);

    return (
        <>
            <OurCoffeeTop/>
            <OurCoffeeAbout country={card.country}
                            description={card.description}
                            price={card.price}
            />
        </>
    )
}
