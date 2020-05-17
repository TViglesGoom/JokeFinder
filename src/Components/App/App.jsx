import React from 'react';
import styles from './App.module.css';

import SearchMethod from "../SearchMethod/SearchMethodContainer";
import Jokes from "../Jokes/JokesContainer";
import Favourite from "../Favourite/FavouriteContainer";


const App = () => {
    return (
        <div className={styles.AppContainer}>
            <h2 className={styles.Title}>MSI 2020</h2>
            <p className={styles.Greeting}>Hey!</p>
            <p className={styles.Propmting}>Let’s try to find a joke for you:</p>
            <div className={styles.JokesContainer}>
                <SearchMethod/>
                <Jokes/>
            </div>
            <Favourite/>
        </div>
    );
};

export default App;
