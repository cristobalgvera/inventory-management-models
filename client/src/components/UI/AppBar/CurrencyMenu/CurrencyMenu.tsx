import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Menu, { MenuProps } from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import { useEntry } from '../../../../hooks';
import { CURRENCY } from '../../../../shared/enum/currency';
import { IEntry } from '../../../../store/common/interfaces/IEntry';

const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',
    },
})(( props: MenuProps ) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));

const StyledMenuItem = withStyles(( theme ) => ({
    root: {
        '&:focus': {
            backgroundColor: theme.palette.primary.main,
            '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
                color: theme.palette.common.white,
            },
        },
    },
}))(MenuItem);

const listCurrencies = ( updateEntryCurrency: ( entry: Partial<IEntry> ) => void ) => {
    const updateCurrency = ( currency: CURRENCY ) => {
        updateEntryCurrency({ entryProperties: { currency } });
    };

    return Object.entries(CURRENCY).map(( [currency, value] ) => (
        <StyledMenuItem
            key={currency}
            onClick={() => updateCurrency(value)}
        >
            <ListItemText primary={currency}/>
        </StyledMenuItem>
    ));
};

export function CurrencyMenu() {
    const {
        data: { entry: { entryProperties: { currency } } },
        logic: { updateEntryCurrency },
    } = useEntry();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = ( event: React.MouseEvent<HTMLElement> ) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                aria-controls="customized-menu"
                aria-haspopup="true"
                variant="contained"
                color="primary"
                onClick={handleClick}
            >
                {currency}
            </Button>
            <StyledMenu
                id="customized-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                {listCurrencies(updateEntryCurrency)}
            </StyledMenu>
        </div>
    );
}