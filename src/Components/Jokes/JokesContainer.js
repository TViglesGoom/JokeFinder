import {Jokes} from "./Jokes";
import {connect} from "react-redux";


const mSTP = state => ({
    jokes: state.jokes,
    jokesLoaded: state.jokesLoaded,
});

export default connect(mSTP)(Jokes);