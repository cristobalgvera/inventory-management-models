import React from 'react';
import clsx from 'clsx';
import { AppBar as MaterialAppBar, Badge, IconButton, Toolbar, Typography } from '@material-ui/core';
import { Menu as MenuIcon, Notifications as NotificationsIcon } from '@material-ui/icons';
import { useStyles } from '../../../hooks';

interface IProps {
    open: boolean

    handleDrawerOpen(): void
}

export const AppBar = ( { open, handleDrawerOpen }: IProps ) => {
    const classes = useStyles();

    return (
        <MaterialAppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
            <Toolbar className={classes.toolbar}>
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="open drawer"
                    onClick={handleDrawerOpen}
                    className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography
                    component="h1"
                    variant="h6"
                    color="inherit"
                    noWrap
                    className={classes.title}
                >
                    Dashboard
                </Typography>
                <IconButton color="inherit">
                    <Badge badgeContent={1} color="secondary">
                        <NotificationsIcon/>
                    </Badge>
                </IconButton>
            </Toolbar>
        </MaterialAppBar>
    );
};