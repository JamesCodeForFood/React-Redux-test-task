import React, { Component } from 'react';
import { Provider } from 'react-redux';
import initStore from './config/store';

import './App.css';

import { MainPage } from "./containers/MainPage";

const store = initStore();

export class App extends Component {
    render(): React.ReactElement  {
        return (
            <Provider store={store}>
                <div className="App">
                    <MainPage />
                </div>
            </Provider>
        )
    }
}

export default App;
