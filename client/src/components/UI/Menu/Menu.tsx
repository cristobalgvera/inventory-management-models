import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {
    ShowChart,
    Store,
    RotateRight,
    BarChart,
    Adjust,
    AllInclusive,
} from '@material-ui/icons/';
import { menuData } from './Data/menuData';
import { MODEL_CATEGORY } from '../../../shared/enum';
import { useHistory } from 'react-router-dom';

const reduceIcon = ( modelCategory: MODEL_CATEGORY ) => {
    switch (modelCategory) {
        case MODEL_CATEGORY.EOQ:
            return <ShowChart/>;
        case MODEL_CATEGORY.PURCHASE:
            return <Store/>;
        case MODEL_CATEGORY.PERIODIC:
            return <RotateRight/>;
        case MODEL_CATEGORY.DISCOUNT:
            return <BarChart/>;
        case MODEL_CATEGORY.UNIQUE_PURCHASE:
            return <Adjust/>;
        case MODEL_CATEGORY.OTHER:
            return <AllInclusive/>;
        default:
            return <AllInclusive/>;
    }
};

export const MainMenu = () => {
    const history = useHistory();

    const listItems = () => {
        return menuData.map(( { category, models } ) => {
            return models.map(( { name, route } ) => {
                let itemText: string = name;
                const maxLength = 16;
                if (name.length > maxLength) itemText = `${itemText.slice(0, maxLength)}...`;

                return (
                    <ListItem button key={name} onClick={() => history.push(route)}>
                        <ListItemIcon>
                            {reduceIcon(category)}
                        </ListItemIcon>
                        <ListItemText primary={itemText}/>
                    </ListItem>
                );
            });
        });
    };

    return (
        <>
            {listItems()}
        </>
    );
};