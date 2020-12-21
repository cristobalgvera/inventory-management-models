import { Output } from '../../shared/interfaces';
import { useContext, useEffect, useState } from 'react';
import { updateState } from '../../lib';
import { EntryContext } from '../../context';
import { useOrderFormula } from './useOrderFormula';
import { currencyReducer } from '../../lib/currencyReducer';

export const useOrder = () => {
    const { entry: { entryProperties: { currency } } } = useContext(EntryContext);

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
            value: annualAverageDemandFormula(),
        }));
    }, [annualAverageDemandFormula]);

    const [orderSize, setOrderSize] = useState<Output>({
        variableName: 'Tamaño del pedido',
        symbology: 'Q*',
        formula: '√[(2 * D * S)/(i * C)]',
        measurementUnit: 'unidades',
        value: 0,
    });

    useEffect(() => {
        setOrderSize(prevState => updateState(prevState, {
            value: orderSizeFormula(),
        }));
    }, [orderSizeFormula]);

    const [resupplyPoint, setResupplyPoint] = useState<Output>({
        variableName: 'Punto de reordenamiento',
        symbology: 'ROP',
        formula: 'd * LT',
        measurementUnit: 'unidades',
        value: 0,
    });

    useEffect(() => {
        setResupplyPoint(prevState => updateState(prevState, {
            value: resupplyPointFormula(),
        }));
    }, [resupplyPointFormula]);

    const [revisionInterval, setRevisionInterval] = useState<Output>({
        variableName: 'Intervalo de revisión',
        symbology: 'T',
        formula: 'Q / d',
        measurementUnit: 'semanas',
        value: 0,
    });

    useEffect(() => {
        setRevisionInterval(prevState => updateState(prevState, {
            value: revisionIntervalFormula(),
        }));
    }, [revisionIntervalFormula]);

    const [averageOrderCost, setAverageOrderCost] = useState<Output>({
        variableName: 'Valor promedio del pedido',
        symbology: '',
        formula: 'Q * C',
        measurementUnit: currencyReducer(currency),
        value: 0,
    });

    useEffect(() => {
        setAverageOrderCost(prevState => updateState(prevState, {
            value: averageOrderCostFormula(),
        }));
    }, [averageOrderCostFormula]);

    const [totalOrders, setTotalOrders] = useState<Output>({
        variableName: 'Cantidad de pedidos',
        symbology: 'N',
        formula: 'D / Q',
        measurementUnit: 'pedidos / año',
        value: 0,
    });

    useEffect(() => {
        setTotalOrders(prevState => updateState(prevState, {
            value: totalOrdersFormula(),
        }));
    }, [totalOrdersFormula]);

    const [inventoryRotation, setInventoryRotation] = useState<Output>({
        variableName: 'Rotación de inventario',
        symbology: '',
        formula: '(2 * D) / Q',
        measurementUnit: '1 / año',
        value: 0,
    });

    useEffect(() => {
        setInventoryRotation(prevState => updateState(prevState, {
            value: inventoryRotationFormula(),
        }));
    }, [inventoryRotationFormula]);

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