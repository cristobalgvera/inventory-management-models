import React from 'react';
import { makeStyles, Grid, Paper, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { IOutput } from '../../../shared/interfaces/IOutput';
import { Title } from './Title/Title';

interface IProps {
    outputs: IOutput[]
}

const useStyles = makeStyles(( theme ) => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
}));

export const Output = ( { outputs }: IProps ) => {
    const classes = useStyles();
    return (
        <Grid item xs={12}>
            <Paper className={classes.paper}>
                <Title>Valores</Title>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Variable</TableCell>
                            <TableCell>Simbología</TableCell>
                            <TableCell>Fórmula</TableCell>
                            <TableCell>Unidad</TableCell>
                            <TableCell align="right">Valor</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {outputs.map(( { variableName, measurementUnit, value, formula, symbology } ) => (
                            <TableRow key={variableName}>
                                <TableCell>{variableName}</TableCell>
                                <TableCell>{symbology}</TableCell>
                                <TableCell>{formula}</TableCell>
                                <TableCell>{measurementUnit}</TableCell>
                                <TableCell align="right">{value}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </Grid>
    );
};