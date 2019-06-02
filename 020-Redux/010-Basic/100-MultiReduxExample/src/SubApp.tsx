import * as React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { SubAppReducer } from './SubAppReducer';
import ConnectedApp from './ConnectedApp';

export default class SubApp extends React.Component<any, any>{

    store: any;

    constructor(props){
        super(props);
        this.store = createStore(SubAppReducer, {counter: 0});

    }

    render(){
        return (
            <Provider store={this.store}>
                <ConnectedApp />
            </Provider>
        );
    }
}