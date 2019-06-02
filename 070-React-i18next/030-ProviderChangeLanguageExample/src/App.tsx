import * as React from "react";
import * as ReactDOM from "react-dom";
import i18n from "./i18n";


class App extends React.Component<any, any>{
    
    constructor(props){
        super(props);
        this.state = {logined: false};
    }

    render(){
        const {t} = this.props;
        if (this.state.logined){
            return (
                <div>
                    <h1>{i18n.t('name.label')}</h1>
                    <h1>{i18n.t('no transalate')}</h1>
                </div>     
            );
        }else {
            return (
                <div>
                    <select onChange={(event)=>{
                        i18n.changeLanguage(event.target.value);
                    }}>
                        <option>en</option>
                        <option>es</option>
                    </select>
                    <button onClick={(event)=>{this.setState({logined: true})}}>login</button>
                </div>       
            )
        }

    }

}


ReactDOM.render(
    <App/>
, document.getElementById('app'));

    
