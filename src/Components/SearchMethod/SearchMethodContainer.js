import {SearchMethod} from "./SearchMethod";
import {connect} from "react-redux";
import {resetJokes, jokesLoaded} from "../../redux/actions";

const mDTP = dispatch => ({
    reset: jokes => dispatch(resetJokes(jokes)),
    load: isLoaded => dispatch(jokesLoaded(isLoaded)),
});

export default connect(null, mDTP)(SearchMethod);