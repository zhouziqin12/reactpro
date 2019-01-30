import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter , Route} from 'react-router-dom'
import store from './store/index'
import {Provider} from 'react-redux'
import App from './components/App';
import './assets/css/base.css'

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Route component={App}/>
        </BrowserRouter>
    </Provider>,

document.getElementById('root'));


