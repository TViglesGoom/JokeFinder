import React from "react";
import {CSSTransition} from "react-transition-group";
import slideRight from "../../transitions/slideRight.module.css";
import JokeCard from "../JokeCard/JokeCardContainer";
import PropTypes from "prop-types";

const Jokes = ({jokes, jokesLoaded}) => {
    return (
        <CSSTransition in={jokesLoaded} timeout={400} classNames={slideRight}>
            <div>
                {jokes.map((joke, index) =>
                    <JokeCard key={index} card={joke}/>
                )}
            </div>
        </CSSTransition>
    );
};

Jokes.propTypes = {
    jokes: PropTypes.arrayOf(PropTypes.shape({
        updated_at: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        categories: PropTypes.string,
    })),
};

export {Jokes};