import React from 'react';
import './App.css';

function Main(){
    return(
        <main>
            <div className="weather-app-data">
                <div>
                    <h1 className="weather-app-city" id="city">Sydney</h1>
                    <p className="weather-app-details">
                        <span id="time">Thursday 11:37am</span>,
                        <span id="description">Drizzle</span>
                        <br />
                        Humidity: <strong id="humidity">70°C</strong>,wind:
                        <strong id="wind-speed">4.45km</strong>
                    </p>
                </div>

                <div className="weather-app-temperature-container">
                    <div id="icon"></div>
                    <div className="weather-app-temperature" id="temperature">27</div>
                    <div className="weather-app-unit">°C</div>
                </div>
            </div>
            <div className="weather-forecast" id="forecast">
            </div>
            
        </main>
    );
}

export default Main;