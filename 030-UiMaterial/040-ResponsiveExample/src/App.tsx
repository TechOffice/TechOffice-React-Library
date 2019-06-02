import * as React from "react";
import * as ReactDOM from "react-dom";
import Button from '@material-ui/core/Button';
import { unstable_useMediaQuery as useMediaQuery } from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/styles';
import {  withWidth, Hidden } from "@material-ui/core";

@(withWidth() as any)
class App extends React.Component<any, any>{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <div>{`Current width: ${this.props.width}`}</div>
                <Hidden smUp>
                    123
                </Hidden>
                <Button variant="contained" color="primary">
                Hello World
                </Button>
            </div>            
        )
    }

}

ReactDOM.render(<App />, document.getElementById('app'));

    
