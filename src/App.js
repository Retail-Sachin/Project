import React from 'react';
import logo from './logo.png';
//import {link} from 'react-router';


function App() {
  return (
    //<div className="App">
    <div className="container center">
        <nav className="menu">

            <div className="menu__right">
                <ul className="menu__list">
                    <li className="menu__list-item"><a class="menu__link menu__link--active" href="#">Home</a></li>
                    <li className="menu__list-item"><a class="menu__link" href="#">Features</a></li>
                    <li className="menu__list-item"><a class="menu__link" href="#">About Us</a></li>
                    <li className="menu__list-item"><a class="menu__link" href="#">Pricing</a></li>
                    <li className="menu__list-item"><a class="menu__link" href="#">Community</a></li>
                    <li className="menu__list-item"><a class="menu__link" href="#">Resource</a></li>
                    <li className="menu__list-item"><a class="menu__link" href="#">Login</a></li>
                    <li className="menu__list-item"><a class="menu__link" href="#">Sign Up</a></li>

                </ul>
                <form className="menu__search-form hide" method="POST">
                    <input className="menu__search-input" placeholder="Type and hit enter" />
                </form>
            </div>
        </nav>

    </div>

  );
}

export default App;
