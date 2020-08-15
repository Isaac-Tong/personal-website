import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import { Paper } from "@material-ui/core";

const useStyles = makeStyles({
    sampleStyle: {
        fontStyle: 'oblique',
        color: 'red',
        fontSize: '30px',
    }
});

const Grids = () => {
    const classes = useStyles();
    return (
        <Grid container spacing={1}>
            <Grid item xs={6} md={12}>
                <Paper>
                    <Typography className={classes.sampleStyle}>Hello World</Typography>
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper>xs=12</Paper>
            </Grid>
        </Grid>
    );
};

export default Grids;
