import React, { ChangeEvent } from 'react';
import { useEntry, useOrder } from '../../hooks';
import styles from './DeterministicEoq.module.scss';

export const DeterministicEoq = () => {
    const { data: { entry }, logic: { update } } = useEntry();

    const {
        resupplyPoint,
        annualAverageDemand,
        orderSize,
    } = useOrder();

    const handleChange = ( { target: { value, name: property } }: ChangeEvent<HTMLInputElement> ) => {
        update({ [property]: value });
    };

    const entryInputs = () => {
        return Object.entries(entry).map(( [property, value] ) => {
            return (
                <div key={property}>
                    <label htmlFor={property}>
                        {property}
                    </label>
                    <input
                        type='number'
                        name={property}
                        value={value}
                        min={0}
                        onChange={handleChange}
                    />
                </div>
            );
        });
    };

    return (
        <div>
            <div className={styles.FormContainer}>
                <form className={styles.Form}>
                    {entryInputs()}
                </form>
            </div>
            <p>{resupplyPoint.value}</p>
        </div>
    );
};