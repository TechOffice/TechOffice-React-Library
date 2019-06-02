import { MemoryRouter } from "react-router";
import * as React from "react";
import Paper from "@material-ui/core/Paper";
import * as ReactDOM from "react-dom";
import Product from "./component/Product";
import axios from 'axios';
import ProductList from "./component/ProductList";

class App extends React.Component<any, any>{
    
    constructor(props){
        super(props);
        this.state = {
            productList: null
        }
    }

    componentWillMount() {
        axios.get("./static/data/productList.json").then((repsonse) =>{
            console.log(repsonse.data);
            this.setState({productList: repsonse.data});
        });
    }

    render(){
        return (
            <Paper>
                {this.state.productList && <ProductList productList={this.state.productList}/>}
            </Paper>            
        )
    }

}

ReactDOM.render(
    <MemoryRouter>
        <App />
    </MemoryRouter>, 
document.getElementById('app'));

    
