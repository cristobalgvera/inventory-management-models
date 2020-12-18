import React, { ChangeEvent } from 'react';
import { useEntry } from '../../../hooks';
import {
    Grid,
    TextField,
    Typography,
} from '@material-ui/core';

export const Input = () => {
    const { data: { entry }, logic: { updateEntryValue } } = useEntry();

    const handleChange = ( { target: { value, name: property } }: ChangeEvent<HTMLInputElement> ) => {
        if (+value >= 0)
            updateEntryValue({ [property]: { value: value } });
    };

    const entries = () => {
        return Object.entries(entry)
            .map(( [property, { value, symbology, variableName, measurementUnit }] ) => {
                if (property !== 'entryProperties')
                    return (
                        <Grid item xs={12} md={6} key={property}>
                            <TextField
                                id={property}
                                label={`${variableName}: (${symbology}) [${measurementUnit}]`}
                                name={property}
                                fullWidth
                                value={value || ''}
                                onChange={handleChange}
                            />
                        </Grid>
                    );
                return null;
            });
    };

    return (
        <>
            <Typography variant="h6" gutterBottom>
                Datos de entrada
            </Typography>
            <Grid container spacing={3}>
                {entries()}
            </Grid>
        </>
    );
};