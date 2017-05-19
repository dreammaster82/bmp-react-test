/**
 * Created by Denis on 18.05.2017.
 */
import React from 'react';
import {render} from 'react-dom';
import {createStore, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import {Route} from 'react-router';
import {ConnectedRouter, routerReducer} from 'react-router-redux';
import bmp from './reducers';
import {addItem} from './actions';

import MainTable from './MainTable';
import Editor from './Editor';

import data from '../data.json';

const store = createStore(combineReducers({bmp, router: routerReducer}));

data.forEach(item => store.dispatch(addItem(item)))
const history = createHistory();

function renderApp() {
    render(<Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <h1 style={{margin: 15}}>bmp-react-test</h1>
                <Route exact path="/" component={MainTable} />
                <Route path="/edit" component={Editor} />
            </div>
        </ConnectedRouter>
    </Provider>, document.getElementById('app'));
}
if(['interactive', 'complete'].indexOf(document.readyState) != -1) renderApp();
else {
    document.addEventListener('DOMContentLoaded', () => {
        renderApp()
    });
}
