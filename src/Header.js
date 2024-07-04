import React from 'react';
import './App.css';

export default function Header(){
    return(

          <header className="weather-app" >
            <form className="search-form" id="search-form">
                <input type="search" placeholder="Enter a city" required id="search-form-input" className="search-form-input" />
                <input type="submit" value="search" className="search-form-button" />
            </form>
           </header>
    );
}

