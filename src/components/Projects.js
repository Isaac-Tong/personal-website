import React from 'react';
import { Typography, Grid } from '@material-ui/core';

const Projects = () => {
    return(
        <div style={{backgroundColor: '#F7F9FA'}}>
            <Grid container justify="start">
                <Grid item xl={2}></Grid>
                <Grid item>
                    <Typography variant="h2">
                        About Me
                    </Typography>
                </Grid>
                <Grid item xl={2}></Grid>
            </Grid>
        </div>
    );
}

export default Projects;
