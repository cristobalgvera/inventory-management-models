import { useContext, useEffect, useState } from 'react';
import { EntryContext } from '../../context';
import { useCostFormula } from './useCostFormula';
import { Output } from '../../shared/interfaces';
import { currencyReducer } from '../../lib/currencyReducer';
import { updateState } from '../../lib';

export const useCost = () => {
    const { entry: { entryProperties: { currency } } } = useContext(EntryContext);

    const {
        totalCostFormula,
        orderCostFormula,
        storageCostFormula,
        totalCostOverAnnualSellsFormula,
    } = useCostFormula();


    const [orderCost, setOrderCost] = useState<Output>({
        variableName: 'Costos de ordenamiento',
        symbology: '',
        formula: '(D / Q) * S',
        measurementUnit: `${currencyReducer(currency)} / año`,
        value: 0,
    });

    useEffect(() => {
        setOrderCost(prevState => updateState(prevState, {
            value: orderCostFormula(),
        }));
    }, [orderCostFormula]);


    const [storageCost, setStorageCost] = useState<Output>({
        variableName: 'Costos de almacenamiento',
        symbology: '',
        formula: '(i * C * Q) / 2',
        measurementUnit: `${currencyReducer(currency)} / año`,
        value: 0,
    });

    useEffect(() => {
        setStorageCost(prevState => updateState(prevState, {
            value: storageCostFormula(),
        }));
    }, [storageCostFormula]);

    const [totalCost, setTotalCost] = useState<Output>({
        variableName: 'Costo total',
        symbology: 'CT',
        formula: '[(D / Q) * S] + [(i * C * Q) / 2]',
        measurementUnit: `${currencyReducer(currency)} / año`,
        value: 0,
    });

    useEffect(() => {
        setTotalCost(prevState => updateState(prevState, {
            value: totalCostFormula(),
        }));
    }, [totalCostFormula]);

    const [totalCostOverAnnualSells, setTotalCostOverAnnualSells] = useState<Output>({
        variableName: 'Costos total sobre ventas anuales',
        symbology: '',
        formula: 'CT / (D * C)',
        measurementUnit: '%',
        value: 0,
    });

    useEffect(() => {
        setTotalCostOverAnnualSells(prevState => updateState(prevState, {
            value: totalCostOverAnnualSellsFormula(),
        }));
    }, [totalCostOverAnnualSellsFormula]);

    return [
        orderCost,
        storageCost,
        totalCost,
        totalCostOverAnnualSells,
    ];
};
