import * as React from "react";
import { Paper, Grid } from "@material-ui/core";
import CheckoutMaintenanceComponent from "./maintenance/CheckoutMaintenanceComponent";
import ProductListComponent from "./product/ProductListComponent";
import CheckoutMockDataService from "../../service/mock/CheckoutMockDataService";
import ProductSearchComponent from "./product/ProductSearchComponent";

export default class CheckoutComponent extends React.Component<any, any>{

    constructor(props){
        super(props);
        this.state = {
            productList: [],
            serviceList: []
        }
    }

    componentWillMount(){
        fetch("/api/productsAndServices").then(res => {
            return res.json();
        }).then(data => {
            this.setState({
                productList: data.products,
                serviceList: data.services
            });
        });
    }

    render(){
        return (
            <Paper>
                <Grid container spacing={40}>
                    <Grid item md={7}>
                        <Grid container spacing={8}>
                            <Grid item xs={12}>
                                <ProductSearchComponent/>
                            </Grid>
                            <Grid item>
                                <ProductListComponent 
                                    productList={this.state.productList}
                                    serviceList={this.state.serviceList}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md={5}>
                        <CheckoutMaintenanceComponent />
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}