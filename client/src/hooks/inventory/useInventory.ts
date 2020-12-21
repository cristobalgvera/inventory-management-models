import { useContext, useEffect, useState } from 'react';
import { EntryContext } from '../../context';
import { useInventoryFormula } from './useInventoryFormula';
import { Output } from '../../shared/interfaces';
import { updateState } from '../../lib';
import { currencyReducer } from '../../lib/currencyReducer';

export const useInventory = () => {
    const { entry: { entryProperties: { currency } } } = useContext(EntryContext);

    const {
        maximumInventoryFormula,
        averageInventoryFormula,
        averageValuedInventoryFormula,
        maximumValuedInventoryFormula,
    } = useInventoryFormula();

    const [averageInventory, setAverageInventory] = useState<Output>({
        variableName: 'Inventario promedio',
        symbology: 'AIL',
        formula: 'Q / 2',
        measurementUnit: 'unidades',
        value: 0,
    });

    useEffect(() => {
        setAverageInventory(prevState => updateState(prevState, {
            value: averageInventoryFormula(),
        }));
    }, [averageInventoryFormula]);

    const [averageValuedInventory, setAverageValuedInventory] = useState<Output>({
        variableName: 'Inventario promedio valorizado',
        symbology: '',
        formula: '(Q / 2) * C',
        measurementUnit: currencyReducer(currency),
        value: 0,
    });

    useEffect(() => {
        setAverageValuedInventory(prevState => updateState(prevState, {
            value: averageValuedInventoryFormula(),
        }));
    }, [averageValuedInventoryFormula]);

    const [maximunInventory, setMaximunInventory] = useState<Output>({
        variableName: 'Inventario máximo',
        symbology: '',
        formula: 'Q',
        measurementUnit: 'unidades',
        value: 0,
    });

    useEffect(() => {
        setMaximunInventory(prevState => updateState(prevState, {
            value: maximumInventoryFormula(),
        }));
    }, [maximumInventoryFormula]);

    const [maximunValuedInventory, setMaximunValuedInventory] = useState<Output>({
        variableName: 'Inventario máximo valorizado',
        symbology: '',
        formula: 'Q * C',
        measurementUnit: currencyReducer(currency),
        value: 0,
    });

    useEffect(() => {
        setMaximunValuedInventory(prevState => updateState(prevState, {
            value: maximumValuedInventoryFormula(),
        }));
    }, [maximumValuedInventoryFormula]);

    return [
        averageInventory,
        averageValuedInventory,
        maximunInventory,
        maximunValuedInventory,
    ];
};