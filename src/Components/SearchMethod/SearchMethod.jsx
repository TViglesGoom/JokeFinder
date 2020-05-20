import React, {useState} from "react";
import {Radio, RadioGroup, FormControlLabel, Tabs, Tab} from "@material-ui/core";
import PropTypes from "prop-types";
import {makeStyles} from '@material-ui/core/styles';
import {CSSTransition} from "react-transition-group";
import styles from "./SearchMethod.module.css";
import SlideDown from "../../transitions/slideDown.module.css";
import fetches from "../../Api/ChuckNorris.api";
import {NotificationContainer, NotificationManager} from 'react-notifications';


const Methods = {
    random: "Random",
    fromCategories: "From categories",
    search: "Search",
};

const useStyles = makeStyles(() => ({
    tabsRoot: {
        minHeight: "auto",
        display: "flex",
    },
    flexContainer: {
        flexWrap: "wrap",
    },
    indicator: {
        display: "none",
    },
    root: {
        color: "#ABABAB",
        border: "2px solid #F8F8F8",
        borderRadius: 6,
        marginRight: 10,
        padding: "6px 15px",
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: 500,
        fontSize: 12,
        minHeight: "inherit",
        minWidth: "auto !important",
        lineHeight: "16px",
        marginBottom: 10,
        letterSpacing: 2,
        transition: "background-color 500ms",
    },
    selected: {
        backgroundColor: "#F8F8F8",
    },
}));

const SearchMethod = ({reset, load}) => {
    const [method, setMethod] = useState(Methods.random);
    const [activeCategory, setActiveCategory] = useState(0);
    const [inputValue, setInputValue] = useState("");
    const [categories, setCategories] = useState([]);
    const classes = useStyles();
    const handleMethodChange = async event => {
        setMethod(event.target.value);
        if (event.target.value === Methods.fromCategories) {
            setCategories(await fetches.getCategories());
        }
    };

    const handleCategoryChange = (event, newValue) => {
        setActiveCategory(newValue);
    };

    const handleSubmit = async e => {
        e.preventDefault();
        load(false);
        let jokes = [];
        if (navigator.onLine) {
            switch (method) {
                case Methods.random:
                    jokes = await fetches.getRandom();
                    break;
                case Methods.fromCategories:
                    jokes = await fetches.getByCategory(categories[activeCategory]);
                    break;
                case Methods.search:
                    jokes = await fetches.getByQuery(inputValue);
                    break;
                default:
                    return;
            }
            if (!jokes.length) {
                NotificationManager.error('Try another query', 'There is no results', 3000);
            }
        } else {
            NotificationManager.error('Connection error', 'You have no connection to the internet.', 3000);
        }

        reset(jokes);
        load(true);
    };
    return (
        <form className={styles.Form}>
            <RadioGroup aria-label="method" value={method} onChange={handleMethodChange}>
                <FormControlLabel value={Methods.random} control={<Radio/>} label={Methods.random}/>
                <FormControlLabel value={Methods.fromCategories} control={<Radio/>} label={Methods.fromCategories}/>
                <CSSTransition in={method === Methods.fromCategories} unmountOnExit timeout={200}
                               classNames={SlideDown}>
                    <Tabs value={activeCategory} color="primary"
                          onChange={handleCategoryChange} classes={{
                        root: classes.tabsRoot,
                        flexContainer: classes.flexContainer,
                        indicator: classes.indicator,
                    }}>
                        {categories.map((category, index) =>
                            <Tab key={index} label={category} classes={{
                                root: classes.root,
                                selected: classes.selected,
                            }}/>)}
                    </Tabs>
                </CSSTransition>
                <FormControlLabel value={Methods.search} control={<Radio/>} label={Methods.search}/>
            </RadioGroup>
            <CSSTransition in={method === Methods.search} unmountOnExit timeout={200} classNames={SlideDown}>
                <input className={styles.inputField} placeholder="Free text search..."
                       onInput={e => setInputValue(e.target.value)}/>
            </CSSTransition>
            <button type="submit" onClick={handleSubmit} className={styles.submitBtn}>
                Get a joke
            </button>
            <NotificationContainer enterTimeout={250} leaveTimeout={250}/>
        </form>
    );
};

SearchMethod.propTypes = {
    reset: PropTypes.func.isRequired,
    load: PropTypes.func.isRequired,
};

export {SearchMethod};