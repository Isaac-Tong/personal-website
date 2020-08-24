import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    isaacText: {
        color: "#5EBA00",
        fontWeight: "bold",
    },
    majorText: {
        color: '#038C65',
    }

});

const Landing = () => {
    const classes = useStyles();
    return (
        <div style={{marginTop: '50px', marginBottom: '50px'}}>
            <Grid container justify="start">
                <Grid item xl={2} lg={1}></Grid>
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
                        I'm currently majoring in Computer Engineering at the University of Illinois at Urbana-Champaign
                    </Typography>
                </Grid>
                <Grid item xl={2}></Grid>
            </Grid>
            <Grid container justify="start">
                <Grid item xl={2}></Grid>
                <Grid item>
                    <Typography className={classes.majorText}>
                        I enjoy programming, producing films and cooking
                    </Typography>
                </Grid>
                <Grid item xl={2}></Grid>
            </Grid>
        
        </div>
    );
};

export default Landing;
