import * as ReactDOM from "react-dom";
import { BrowserRouter, Link, MemoryRouter } from "react-router-dom";
import { Formik } from 'formik';
import { Component } from "react";
import * as React from "react";
import FormComponent from "./FormComponent";


class App extends Component{
    
    render(){
        return (
            <div>
                <h1>Hello World</h1>
                <Formik 
                    initialValues={{ email: '' }}
                    onSubmit={(value)=>{
                        alert(value);
                    }}
                    component={FormComponent} >
                </Formik>
            </div>            
        )
    }
}

ReactDOM.render(  
    <MemoryRouter>
        <div>
            <App/>
        </div>
    </MemoryRouter>
, document.getElementById("app"));


    
