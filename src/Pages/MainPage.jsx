import {MainTopView} from "../components/MainPage/MainTopView/MainTopView";
import {MainAbout} from "../components/MainPage/MainAbout/MainAbout";
import {MainProducts} from "../components/MainPage/MainProducts/MainProducts";

export const MainPage = () => {
    return (
        <>
            <MainTopView />
            <MainAbout />
            <MainProducts />
        </>
    )
}
