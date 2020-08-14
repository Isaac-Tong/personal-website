import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { Paper } from "@material-ui/core";

const Grids = () => {
    return (
        <Grid container spacing={1}>
            <Grid item xs={6} md={12}>
                <Paper>
                    <Typography>Hello World</Typography>
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper>xs=12</Paper>
            </Grid>
        </Grid>
    );
};

export default Grids;
