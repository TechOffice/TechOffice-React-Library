import { MemoryRouter } from "react-router";
import * as React from "react";
import Paper from "@material-ui/core/Paper";
import * as ReactDOM from "react-dom";
import Product from "./component/Product";
import axios from 'axios';

class App extends React.Component<any, any>{
    
    constructor(props){
        super(props);
        this.state = {
            product: null
        }
       
    }

    componentWillMount() {
        axios.get("./static/data/product.json").then((repsonse) =>{
            console.log(repsonse.data);
            this.setState({product: repsonse.data});
        });
    }

    render(){
        return (
            <Paper>
                {this.state.product && <Product product={this.state.product}/>}
            </Paper>            
        )
    }

}

ReactDOM.render(
    <MemoryRouter>
        <App />
    </MemoryRouter>, 
document.getElementById('app'));

    
