import React from "react";
import styles from "./JokeCard.module.css";
import {FaRegHeart, FaHeart, FaRegCommentAlt} from "react-icons/fa";
import PropTypes from "prop-types";

const JokeCard = ({favouriteJokes, delFJ, addFJ, isInFavourite = false, card}) => {
    const {updated_at, id, url, value, categories} = card;
    const handleChange = () => {
        if (flag) {
            delFJ(id);
        } else {
            addFJ(card);
        }
        flag = !flag;
    };
    let flag = !!favouriteJokes.find(joke => joke.id === id);
    const hoursAgo = Math.floor((Date.now() - Date.parse(updated_at)) / (1000 * 60 * 60));
    return (
        <div className={styles.CardContainer} style={{backgroundColor: (isInFavourite ? "#FFF" : "#F8F8F8")}}>
            <button onClick={handleChange} className={styles.favourBtn}>
                {flag ? <FaHeart className={styles.faHeart}/> : <FaRegHeart className={styles.faHeart}/>}
            </button>
            <div className={styles.ContentContainer}>
                <div className={styles.commentIconWrapper}
                     style={{backgroundColor: (isInFavourite ? "#F8F8F8" : "#FFF")}}>
                    <div className={styles.line}/>
                    <FaRegCommentAlt className={styles.faComment}/>
                </div>
                <div>
                    <div className={styles.jokeId}>ID: <a href={url}>{id}</a></div>
                    <p className={styles.jokeContent}>{value}</p>
                    <div className={styles.BootomContainer}>
                        <span className={styles.lastUpdate}>Last update: {hoursAgo} hours ago</span>
                        {categories.map((category, index) =>
                            <div className={styles.Category} key={index}
                                 style={{backgroundColor: (isInFavourite ? "#F8F8F8" : "#FFF")}}>
                                {category}
                            </div>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

JokeCard.propTypes = {
    favouriteJokes: PropTypes.arrayOf(PropTypes.shape({
        updated_at: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        categories: PropTypes.arrayOf(PropTypes.string),
    })).isRequired,
    delFJ: PropTypes.func.isRequired,
    addFJ: PropTypes.func.isRequired,
    isInFavourite: PropTypes.bool,
    card: PropTypes.shape({
        updated_at: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        value: PropTypes.string.isRequired,
        categories: PropTypes.arrayOf(PropTypes.string),
    }).isRequired,
};

export {JokeCard};