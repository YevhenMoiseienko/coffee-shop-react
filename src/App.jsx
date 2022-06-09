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

    const findCards = (str) => {
        str.length === 0 ? setCoffeeCards(dataArrow) :
        setCoffeeCards(coffeeCards.filter(item => item.title.toLowerCase().includes(str.toLowerCase())))
    }

    const filterCards = (arg) => {
        setCoffeeCards(dataArrow.filter(item => item.country === arg));
    }

  return (
    <Router>
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/coffee' element={<OurCoffeePage
                                                data={coffeeCards}
                                                findCards={findCards}
                                                filterCards={filterCards} />}
            />
            <Route path='/pleasure' element={<OurPleasurePage data={coffeeCards}/>}/>
            <Route path='coffee/:coffeeId' element={<CoffeeDescriptionPage />} />
        </Routes>
        <MainFooter />
    </Router>
  );
}

export default App;
