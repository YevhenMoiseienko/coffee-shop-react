import {useState} from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

import {MainPage} from "./Pages/MainPage";
import {OurCoffeePage} from "./Pages/OurCoffeePage";
import {MainFooter} from "./components/MainPage/MainFooter/MainFooter";
import {OurPleasurePage} from "./Pages/OurPleasurePage";
import {dataArrow} from "./data";
import {CoffeeDescriptionPage} from "./Pages/CoffeeDescriptionPage";

import './App.scss';

function App() {
    const [coffeeCards, setCoffeeCards] = useState(dataArrow);

    console.log(coffeeCards)

  return (
    <Router>
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/coffee' element={<OurCoffeePage />}/>
            <Route path='/pleasure' element={<OurPleasurePage />}/>
            {/*<CoffeeDescriptionPage />*/}
        </Routes>
        <MainFooter />
    </Router>
  );
}

export default App;
