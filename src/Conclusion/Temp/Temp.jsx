import { useState } from 'react';
import Vali from '../Vali/Vali';
import './Temp.css';

function Temp() {
    const [celcius, setCelcius] = useState(25); 

    const convertToFahrenheit = (c) => (c * 9 / 5) + 32;
    const convertToKelvin = (c) => c + 273.15;

    const handleCelciusChange = (newCelcius) => {
        setCelcius(newCelcius);
    };

    const handleFahrenheitChange = (newFahrenheit) => {
        const newCelcius = (newFahrenheit - 32) * (5 / 9);
        setCelcius(parseFloat(newCelcius.toFixed(2))); 
    };

    const handleKelvinChange = (newKelvin) => {
        const newCelcius = newKelvin - 273.15;
        setCelcius(parseFloat(newCelcius.toFixed(2)));
    };

    return (
        <div className='villla-collage'>
            <h3 className='Temp-allen'>Temp</h3>
            <h3 className='temperature-badge'>
                <span className='badge bg-primary'>{celcius.toFixed(2)}°C</span>
                <span className='badge bg-primary'>{convertToFahrenheit(celcius).toFixed(2)}°F</span>
                <span className='badge bg-primary'>{convertToKelvin(celcius).toFixed(2)}°K</span>
            </h3>
            <div className='vila'>
                <Vali name={'Celsius'} value={parseFloat(celcius.toFixed(2))} setValue={handleCelciusChange} />
                <Vali name={'Fahrenheit'} value={parseFloat(convertToFahrenheit(celcius).toFixed(2))} setValue={handleFahrenheitChange} />
                <Vali name={'Kelvin'} value={parseFloat(convertToKelvin(celcius).toFixed(2))} setValue={handleKelvinChange} />
            </div>
        </div>
    );
}

export default Temp;


// import { useState } from 'react';
// import Vali from '../Vali/Vali';
// import './Temp.css';

// function Temp() {
//     const [celcius, setCelcius] = useState(25); 

    
//     const convertToFahrenheit = (c) => (c * 9 / 5) + 32;
//     const convertToKelvin = (c) => c + 273.15;

    
//     const handleCelciusChange = (newCelcius) => {
//         setCelcius(newCelcius);
//     };

//     const handleFahrenheitChange = (newFahrenheit) => {
//         const newCelcius = (newFahrenheit - 32) * (5 / 9);
//         setCelcius(parseFloat(newCelcius.toFixed(2))); 
//     };

//     const handleKelvinChange = (newKelvin) => {
//         const newCelcius = newKelvin - 273.15;
//         setCelcius(parseFloat(newCelcius.toFixed(2)));
//     };

//     return (
//         <div className='villla-collage'>
//             <h3>Temp</h3>
//             <h3 className='temperature-badge'>
//                 <span className='badge bg-primary'>{celcius.toFixed(2)}°C</span>
//                 <span className='badge bg-primary'>{convertToFahrenheit(celcius).toFixed(2)}°F</span>
//                 <span className='badge bg-primary'>{convertToKelvin(celcius).toFixed(2)}°K</span>
//             </h3>
//             <div className='vila'>
//                 <Vali name={'Celsius'} value={parseFloat(celcius.toFixed(2))} setValue={handleCelciusChange} />
//                 <Vali name={'Fahrenheit'} value={parseFloat(convertToFahrenheit(celcius).toFixed(2))} setValue={handleFahrenheitChange} />
//                 <Vali name={'Kelvin'} value={parseFloat(convertToKelvin(celcius).toFixed(2))} setValue={handleKelvinChange} />
//             </div>
//         </div>
//     );
// }

// export default Temp;
