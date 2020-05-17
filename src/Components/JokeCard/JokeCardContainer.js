import {JokeCard} from "./JokeCard";
import {deleteJoke, addJoke} from "../../redux/actions";
import {connect} from "react-redux";

const mSTP = state => ({
    favouriteJokes: state.favouriteJokes,
})

const mDTP = dispatch => ({
    addFJ: joke => dispatch(addJoke(joke)),
    delFJ: id => dispatch(deleteJoke(id)),
})

export default connect(mSTP, mDTP)(JokeCard);