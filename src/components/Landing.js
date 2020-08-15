import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    isaacText: {
        color: "#5EBA00",
        fontWeight: "bold",
    },
    majorText: {
        color: '#038C65',
        fontWeight: 'bold'
    }

});

const Landing = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid container justify="start">
                <Grid item xl={2}></Grid>
                <Grid item>
                    <Typography variant="h2" className={classes.isaacText}>
                        Hi! I'm Isaac Tong
                    </Typography>
                </Grid>
                <Grid item xl={2}></Grid>
            </Grid>

            <Grid container justify="start">
                <Grid item xl={2}></Grid>
                <Grid item>
                    <Typography variant='h6' className={classes.majorText}>
                        Currently majoring in Computer Engineering at the University of Illinois at Urbana-Champaign
                    </Typography>
                </Grid>
                <Grid item xl={2}></Grid>
            </Grid>
        </div>
    );
};

export default Landing;
