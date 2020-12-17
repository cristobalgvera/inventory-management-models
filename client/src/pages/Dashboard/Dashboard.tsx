import React, { useState } from 'react';
import {
    CssBaseline,
    Box,
    Container,
    Grid,
    Paper,
} from '@material-ui/core';
import { Input } from '../../components/UI';
import { Routes } from '../../components';
import { useStyles } from '../../hooks';
import { Copyright } from '../../components/UI/Copyright/Copyright';
import { AppBar } from '../../components/UI/AppBar/AppBar';
import { Drawer } from '../../components/UI/Drawer/Drawer';

export default function Dashboard() {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar open={open} handleDrawerOpen={handleDrawerOpen}/>
            <Drawer open={open} handleDrawerClose={handleDrawerClose}/>
            <main className={classes.content}>
                <div className={classes.appBarSpacer}/>
                <Container maxWidth='lg' className={classes.container}>
                    <Grid container spacing={3}>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <Input/>
                            </Paper>
                        </Grid>
                        {/* Recent Orders */}
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <Routes/>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Box pt={4}>
                        <Copyright/>
                    </Box>
                </Container>
            </main>
        </div>
    );
}