import * as React from "react";
import * as ReactDOM from "react-dom";
import { connect, Provider, DispatchProp } from "react-redux";
import store from "./store/store";
import ItemComponent from "./component/ItemComponent";

@(connect( 
    (state: any)=> ({
        counter: state.counter,
        items: state.items
    }),
    (dispatch)=> ({
        onClick: function(n){
            dispatch({
                type: "INCREASE_COUNTER",
                n: n
            })
        }   
    })
) as any)
class App extends React.Component<any, any>{
    
    constructor(props){
        super(props);
        this.state = {counter: props.counter};
    }
    
    render(){
        return (
            <div>
                <h1>Hello World</h1>
                <div>
                    <button onClick={this.props.onClick.bind(this, 1)}>Add</button>
                </div>
                <div>Number: {this.props.counter}</div>
                {
                    this.props.items.map((item)=>
                        <ItemComponent item={item} />
                    )
                }
            </div>            
        )
    }

}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('app'));


