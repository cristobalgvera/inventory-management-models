import React from 'react';
import {
    Grid,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@material-ui/core';
import { IOutput } from '../../../shared/interfaces/IOutput';
import { Title } from './Title/Title';
import { useStyles } from '../../../hooks';

interface IProps {
    title: string
    outputs: IOutput[]
}

export const Output = ( { title, outputs }: IProps ) => {
    const classes = useStyles();
    return (
        <Grid item xs={12}>
            <Paper className={classes.paper}>
                <Title>{title}</Title>
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
                        {outputs.map((
                            {
                                variableName,
                                measurementUnit,
                                value,
                                formula,
                                symbology,
                            },
                        ) => (
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