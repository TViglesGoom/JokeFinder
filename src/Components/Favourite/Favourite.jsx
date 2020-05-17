import React, {useState} from "react";
import styles from "./Favourite.module.css";
import JokeCard from "../JokeCard/JokeCardContainer";
import {CSSTransition} from "react-transition-group";
import slideLeft from "../../transitions/slideLeft.module.css";
import PropTypes from "prop-types";

const Favourite = ({favouriteJokes}) => {
    const [isOpen, setOpen] = useState(false);
    const desktopSize = window.innerWidth >= 1440;
    return (
        favouriteJokes.length ?
            <div className={styles.Favourite}>
                <CSSTransition in={!desktopSize && isOpen} unmountOnExit timeout={400} classNames={slideLeft}>
                    <div className={styles.overlay} onClick={e => {
                        e.target.className === styles.overlay && setOpen(!isOpen);
                    }}/>
                </CSSTransition>

                <div className={styles.underOverlay}>
                    <div className={styles.HeaderContainer}
                         style={desktopSize || isOpen ? {backgroundColor: "#F8F8F8"} : {}}>
                        <button className={`${styles.Burger} ${isOpen ? styles.BurgerOpen : ""}`}
                                type="button" onClick={() => setOpen(!isOpen)}/>
                        <h3 className={styles.Header}>Favourite</h3>
                    </div>
                    <CSSTransition in={isOpen || desktopSize} unmountOnExit timeout={400} classNames={slideLeft}>
                        <div className={styles.JokesContainer}>
                            {favouriteJokes.map((joke, index) => <JokeCard key={index} isInFavourite card={joke}/>)}
                        </div>
                    </CSSTransition>
                </div>
            </div> :
            <span/>
    );
};

Favourite.propTypes = {
    favouriteJokes: PropTypes.arrayOf(PropTypes.shape({
        updated_at: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        categories: PropTypes.arrayOf(PropTypes.string),
    })).isRequired,
};

export {Favourite};