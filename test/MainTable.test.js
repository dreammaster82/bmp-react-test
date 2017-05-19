/**
 * Created by Denis on 19.05.2017.
 */
require("babel-register")({
    // This will override `node_modules` ignoring - you can alternatively pass
    // an array of strings to be explicitly matched or a regex / glob
    ignore: false
});
import React from 'react';
import renderer from 'react-test-renderer';
import MainTable from './dist/main';
import Editor from './dist/editor';
import {Provider} from 'react-redux';
import {Route} from 'react-router';
import {ConnectedRouter, routerReducer} from 'react-router-redux';
import {createStore, combineReducers} from 'redux';
import createHistory from 'history/createBrowserHistory';
import bmp from '../src/reducers';
import {addItem} from '../src/actions';
import data from '../data.json';

test('Test render', () => {
    const store = createStore(combineReducers({bmp, router: routerReducer}));

    data.forEach(item => store.dispatch(addItem(item)))
    const history = createHistory();

    const dom = renderer.create(<Provider store={store}>
        <ConnectedRouter history={history}>
            <div>
                <h1 style={{margin: 15}}>bmp-react-test</h1>
                <Route exact path="/" component={MainTable} />
                <Route path="/edit" component={Editor} />
            </div>
        </ConnectedRouter>
    </Provider>);

    expect(dom.toJSON()).toMatchSnapshot();
});