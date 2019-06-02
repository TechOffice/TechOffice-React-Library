import * as React from "react";
import { Paper, Grid, TextField, Button } from "@material-ui/core";


export default class extends React.Component<any, any>{

    render(){
        return (
            <Paper>
                <Grid container direction="column">
                    <Grid item>
                        <Grid container>
                            <Grid item xs={3}>Username</Grid>
                            <Grid item xs={9}>
                                <TextField variant="outlined" style={{height:35}}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container>
                            <Grid item xs={3}>Password</Grid>
                            <Grid item xs={9}>
                                <TextField type="password" variant="outlined" style={{height:35}}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container>
                            <Grid item >
                                <Button variant="contained" onClick={() => {this.props.login()}}>
                                    Login
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        );
    }
}