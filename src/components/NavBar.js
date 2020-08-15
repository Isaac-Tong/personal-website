import React from "react";
import { AppBar, Toolbar, Typography, Grid, makeStyles} from "@material-ui/core";

const useStyles = makeStyles({
    navbarText: {
        color: '#15103d',
        fontSize: '15px',
        fontWeight: 'bold'
    }
});

const NavBar = () => {
    const classes = useStyles();
    return (
        <AppBar color="transparent" position="static" elevation={0}>
            <Toolbar>
                <Grid container direction="row" justify="center" spacing={4}>
                    <Grid item xl={4} xs={0}></Grid>
                    <Grid item>
                        <Typography className={classes.navbarText}>Projects</Typography>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.navbarText}>Design</Typography>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.navbarText}>About</Typography>
                    </Grid>
                    <Grid item>
                        <Typography className={classes.navbarText}>Resume</Typography>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
