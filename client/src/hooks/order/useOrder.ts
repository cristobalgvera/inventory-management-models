import { Output } from '../../shared/interfaces';
import { useContext, useEffect, useState } from 'react';
import { updateState } from '../../lib';
import { EntryContext } from '../../context';
import { useOrderFormula } from './useOrderFormula';
import { currencyReducer } from '../../lib/currencyReducer';

export const useOrder = () => {
    const {
        entry: {
            entryProperties: { currency },
            averageDemand: { value: averageDemand },
            periodsNumber: { value: periodsNumber },
            orderCost: { value: orderCost },
            resupplyDuration: { value: resupplyDuration },
            itemCost: { value: itemCost },
            annualStorageCostPercentage: { value: annualStorageCostPercentage },
        },
    } = useContext(EntryContext);

    const {
        annualAverageDemandFormula,
        orderSizeFormula,
        resupplyPointFormula,
        revisionIntervalFormula,
        averageOrderCostFormula,
        totalOrdersFormula,
        inventoryRotationFormula,
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

    const [averageOrderCost, setAverageOrderCost] = useState<Output>({
        variableName: 'Valor promedio del pedido',
        symbology: '',
        formula: 'Q * C',
        measurementUnit: currencyReducer(currency),
        value: 0,
    });

    useEffect(() => {
        setAverageOrderCost(prevState => updateState(prevState, {
            value: averageOrderCostFormula(orderSize.value, itemCost),
        }));
    }, [averageOrderCostFormula, itemCost, orderSize.value]);

    const [totalOrders, setTotalOrders] = useState<Output>({
        variableName: 'Cantidad de pedidos',
        symbology: 'N',
        formula: 'D / Q',
        measurementUnit: 'pedidos / año',
        value: 0,
    });

    useEffect(() => {
        const value = totalOrdersFormula(annualAverageDemand.value, orderSize.value);

        if (!isNaN(value)) setTotalOrders(prevState => updateState(prevState, { value }));
        else setTotalOrders(prevState => updateState(prevState, { value: 0 }));
    }, [annualAverageDemand.value, orderSize.value, totalOrdersFormula]);

    const [inventoryRotation, setInventoryRotation] = useState<Output>({
        variableName: 'Rotación de inventario',
        symbology: '',
        formula: '(2 * D) / Q',
        measurementUnit: '1 / año',
        value: 0,
    });

    useEffect(() => {
        const value = inventoryRotationFormula(annualAverageDemand.value, orderSize.value);

        if (!isNaN(value)) setInventoryRotation(prevState => updateState(prevState, { value }));
        else setInventoryRotation(prevState => updateState(prevState, { value: 0 }));
    }, [annualAverageDemand.value, inventoryRotationFormula, orderSize.value]);

    return [
        annualAverageDemand,
        orderSize,
        resupplyPoint,
        revisionInterval,
        averageOrderCost,
        totalOrders,
        inventoryRotation,
    ];
};