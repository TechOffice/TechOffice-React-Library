import * as React from "react";
import * as ReactDOM from "react-dom";
import { Form, Field } from 'react-final-form'

class App extends React.Component{
    
    onSubmit(values){
        alert("submitted" + JSON.stringify(values));
    }

    render(){
        return (
            <div>
                <h1>Hello World</h1>
                <Form onSubmit={this.onSubmit}
                    render={({ handleSubmit, pristine, invalid }) => (
                        <form onSubmit={handleSubmit}>
                            <Field name="firstName" component="input" placeholder="First Name" />
                            <button type="submit" disabled={pristine || invalid}>
                                Submit
                            </button>
                        </form>
                    )}>
                </Form>
            </div>            
        )
    }

}

ReactDOM.render(<App />, document.getElementById('app'));

    
