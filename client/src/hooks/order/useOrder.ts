import { Output } from '../../shared/interfaces';
import { useContext, useEffect, useState } from 'react';
import { updateState } from '../../lib';
import { EntryContext } from '../../context';
import { useOrderFormula } from './useOrderFormula';

export const useOrder = () => {
    const {
        entry: {
            averageDemand,
            periodsNumber,
            orderCost,
            resupplyDuration,
            itemCost,
            annualStorageCostPercentage,
        },
    } = useContext(EntryContext);

    const {
        annualAverageDemandFormula,
        orderSizeFormula,
        resupplyPointFormula,
        revisionIntervalFormula,
    } = useOrderFormula();

    const [annualAverageDemand, setAnnualAverageDemand] = useState<Output>({
        variableName: 'Demanda anual promedio',
        symbology: 'D',
        formula: 'd * número de periodos',
        measurementUnit: 'unidades / año',
        value: 0,
    });

    useEffect(() => {
        setAnnualAverageDemand(prevState => updateState(prevState, {
            value: annualAverageDemandFormula(averageDemand, periodsNumber),
        }));
    }, [annualAverageDemandFormula, averageDemand, periodsNumber]);

    const [orderSize, setOrderSize] = useState<Output>({
        variableName: 'Tamaño del pedido',
        symbology: 'Q*',
        formula: '√[(2 * D * S)/(i * C)]',
        measurementUnit: 'unidades',
        value: 0,
    });

    useEffect(() => {
        const value = orderSizeFormula(annualAverageDemand.value, orderCost, annualStorageCostPercentage, itemCost);

        if (!isNaN(value)) setOrderSize(prevState => updateState(prevState, { value }));
        else setOrderSize(prevState => updateState(prevState, { value: 0 }));
    }, [annualAverageDemand.value, annualStorageCostPercentage, itemCost, orderCost, orderSizeFormula]);

    const [resupplyPoint, setResupplyPoint] = useState<Output>({
        variableName: 'Punto de reordenamiento',
        symbology: 'ROP',
        formula: 'd * LT',
        measurementUnit: 'unidades',
        value: 0,
    });

    useEffect(() => {
        setResupplyPoint(prevState => updateState(prevState, {
            value: resupplyPointFormula(averageDemand, resupplyDuration),
        }));
    }, [averageDemand, resupplyDuration, resupplyPointFormula]);

    const [revisionInterval, setRevisionInterval] = useState<Output>({
        variableName: 'Intervalo de revisión',
        symbology: 'T',
        formula: 'Q / d',
        measurementUnit: 'semanas',
        value: 0,
    });

    useEffect(() => {
        const value = revisionIntervalFormula(orderSize.value, averageDemand);

        if (!isNaN(value)) setRevisionInterval(prevState => updateState(prevState, { value }));
        else setRevisionInterval(prevState => updateState(prevState, { value: 0 }));
    }, [averageDemand, orderSize.value, revisionIntervalFormula]);

    return {
        annualAverageDemand,
        orderSize,
        resupplyPoint,
        revisionInterval,
    };
};