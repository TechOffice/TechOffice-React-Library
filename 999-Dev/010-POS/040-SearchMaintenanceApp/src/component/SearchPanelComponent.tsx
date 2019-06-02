import * as React from 'react'
import { Paper } from '@material-ui/core';
import SearchComponent from './SearchComponent';
import ResultComponent from './ResultComponent';

export default class SearchPanelComponent extends React.Component<any, any>{
    
    render(){
        return (
            <Paper>
                <SearchComponent/>
                <ResultComponent/>
            </Paper>
        )
    }
}