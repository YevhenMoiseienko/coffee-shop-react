import {OurCoffeeTop} from "../components/OurCoffeePage/OurCoffeeTop/OurCoffeeTop";
import {OurCoffeeAbout} from "../components/OurCoffeePage/OurCoffeeAbout/OurCoffeeAbout";

export const CoffeeDescriptionPage = () => {
    return (
        <>
            <OurCoffeeTop/>
            <OurCoffeeAbout country='Brazil'
                            description='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam beatae cumque
                             doloremque ea eligendi facere libero minima modi mollitia nam obcaecati odio, officiis quam
                              quasi qui quibusdam recusandae reprehenderit repudiandae suscipit ut, vel vero
                              voluptatibus. A aliquid consectetur doloribus enim ex explicabo hic ipsum minus nam,
                               nesciunt vero voluptatem? Voluptates?'
                            price='16.99'
            />
        </>
    )
}
