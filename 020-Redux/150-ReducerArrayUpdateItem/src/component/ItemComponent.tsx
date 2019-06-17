import * as React from "react";
import { connect } from "react-redux";
import * as _ from "lodash";

@(connect(
    (state: any, ownProps: any) => {
        return _.find(state.items, {id: ownProps.id});
    },
    (dispatch) => ({})
) as any)
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
                    {this.props.name}
                </div>
                <div>
                    {this.props.id}
                </div>
            </div>
        );
    }
}