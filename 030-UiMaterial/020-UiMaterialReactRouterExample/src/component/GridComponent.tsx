import * as React from "react";
import { Paper, Grid, Typography } from "@material-ui/core";


export default class extends React.Component<any, any>{

    render(){
        return (
            <Paper>
                <Grid container justify="center">
                    <Grid item xs={4}>
                        <Typography>Testing Item 1</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography>Testing Item 1</Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography>Testing Item 3</Typography>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}