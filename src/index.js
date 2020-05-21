import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './normalize.css';
import App from './Components/App/App';
import store from './redux/store';
import {Provider} from "react-redux";
import 'react-notifications/lib/notifications.css'

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
