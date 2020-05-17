import {Favourite} from "./Favourite";
import {connect} from "react-redux";

const mSTP = state => ({
    favouriteJokes: state.favouriteJokes,
});

export default connect(mSTP)(Favourite);