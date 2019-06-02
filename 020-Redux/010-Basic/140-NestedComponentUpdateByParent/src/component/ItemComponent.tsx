import * as React from "react";


export default class ItemComponent extends React.Component<any, any>{
    
    constructor(props){
        super(props);
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps);
    }

    render(){
        return (
            <div>
                <div>
                    {this.props.item.name}
                </div>
                <div>
                    {this.props.item.id}
                </div>
            </div>
        );
    }
}