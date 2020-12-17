import React from 'react';
import clsx from 'clsx';
import { Drawer as MaterialDrawer, Divider, IconButton, List } from '@material-ui/core';
import { ChevronLeft as ChevronLeftIcon } from '@material-ui/icons';
import { mainMenu } from '../Menu/Menu';
import { useStyles } from '../../../hooks';

interface IProps {
    open: boolean

    handleDrawerClose(): void
}

export const Drawer = ( { open, handleDrawerClose }: IProps ) => {
    const classes = useStyles();

    return (
        <MaterialDrawer
            variant='permanent'
            classes={{
                paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
            }}
            open={open}
        >
            <div className={classes.toolbarIcon}>
                <IconButton onClick={handleDrawerClose}>
                    <ChevronLeftIcon/>
                </IconButton>
            </div>
            <Divider/>
            <List>{mainMenu}</List>
            <Divider/>
        </MaterialDrawer>
    );
};