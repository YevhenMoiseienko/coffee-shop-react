import twoCoffee from "../../Images/twoCoffee.png";

import './MainProducts.scss'


export const MainProducts = () => {
    return (
        <div className='brownBg'>
            <div className='container proposition'>
                <h2>Our best</h2>
                <div className='products'>
                    <div className='product'>
                        <img src={twoCoffee} alt="#"/>
                        <p>Solimo Coffee Beans 2 kg</p>
                        <p>10.73$</p>
                    </div>
                    <div className='product'>
                        <img src={twoCoffee} alt="#"/>
                        <p>Solimo Coffee Beans 2 kg</p>
                        <p>10.73$</p>
                    </div>
                    <div className='product'>
                        <img src={twoCoffee} alt="#"/>
                        <p>Solimo Coffee Beans 2 kg</p>
                        <p>10.73$</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
