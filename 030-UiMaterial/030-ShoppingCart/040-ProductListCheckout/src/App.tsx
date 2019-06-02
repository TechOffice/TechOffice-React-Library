import { MemoryRouter } from "react-router";
import * as React from "react";
import Paper from "@material-ui/core/Paper";
import * as ReactDOM from "react-dom";
import { createStore } from "redux";
import axios from 'axios';
import ProductList from "./component/ProductList";
import appReducer from "./reducer/appReducer";
import { Grid } from "@material-ui/core";
import Checkout from "./component/Checkout";
import { Provider } from "react-redux";


class App extends React.Component<any, any>{
    
    store: any

    constructor(props){
        super(props);
        this.state = {
            productList: null
        };
        this.store = createStore(
            appReducer, {}
        );
    }

    componentWillMount() {
        axios.get("./static/data/productList.json").then((repsonse) =>{
            console.log(repsonse.data);
            this.setState({productList: repsonse.data});
        });
    }

    render(){
        return (
            <Provider store={this.store}>
                <Paper>
                    <Grid container spacing={40}>
                        <Grid item md={7}>
                            <Paper>
                                {this.state.productList && <ProductList productList={this.state.productList}/>}
                            </Paper>
                        </Grid>
                        <Grid item md={5}>
                            <Checkout />
                        </Grid>
                    </Grid>
                </Paper>
            </Provider>
                        
        )
    }

}

ReactDOM.render(
    <MemoryRouter>
        <App />
    </MemoryRouter>, 
document.getElementById('app'));

    
