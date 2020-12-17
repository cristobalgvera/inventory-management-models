import React, { ChangeEvent } from 'react';
import { useEntry, useOrder } from '../../hooks';
import styles from './DeterministicEoq.module.scss';

export const DeterministicEoq = () => {
    const { data: { entry }, logic: { update } } = useEntry();

    const {
        resupplyPoint,
        annualAverageDemand,
        orderSize,
        inventoryRotation,
        totalOrders,
        revisionInterval,
        averageOrderCost,
    } = useOrder();

    const handleChange = ( { target: { value, name: property } }: ChangeEvent<HTMLInputElement> ) => {
        update({ [property]: { value } });
    };

    const entryInputs = () => {
        return Object.entries(entry).map(( [property, { value, symbology, variableName }] ) => {
            return (
                <div key={property}>
                    <label htmlFor={property}>
                        {variableName}: ({symbology})
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
            <h2>Valores</h2>
            <p>{annualAverageDemand.variableName} {annualAverageDemand.value} {annualAverageDemand.measurementUnit}</p>
            <p>{orderSize.variableName} {orderSize.value} {orderSize.measurementUnit}</p>
            <p>{averageOrderCost.variableName} {averageOrderCost.value} {averageOrderCost.measurementUnit}</p>
            <p>{resupplyPoint.variableName} {resupplyPoint.value} {resupplyPoint.measurementUnit}</p>
            <p>{revisionInterval.variableName} {revisionInterval.value} {revisionInterval.measurementUnit}</p>
            <p>{totalOrders.variableName} {totalOrders.value} {totalOrders.measurementUnit}</p>
            <p>{inventoryRotation.variableName} {inventoryRotation.value} {inventoryRotation.measurementUnit}</p>
        </div>
    );
};