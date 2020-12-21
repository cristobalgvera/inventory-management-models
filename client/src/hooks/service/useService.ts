import { useServiceFormula } from './useServiceFormula';
import { useContext, useEffect, useState } from 'react';
import { EntryContext } from '../../context';
import { Output } from '../../shared/interfaces';
import { currencyReducer } from '../../lib/currencyReducer';
import { updateState } from '../../lib';

export const useService = () => {
    const { entry: { entryProperties: { currency } } } = useContext(EntryContext);

    const {
        serviceLevelFormula,
        annualStockBreaksFormula,
        valuedBreaksFormula,
    } = useServiceFormula();

    const [serviceLevel, setServiceLevel] = useState<Output>({
        variableName: 'Nivel de servicio',
        symbology: 'SL',
        formula: `1 - [S' * E(zp) / Q]`,
        measurementUnit: `%`,
        value: 0,
    });

    useEffect(() => {
        setServiceLevel(prevState => updateState(prevState, {
            value: serviceLevelFormula(),
        }));
    }, [serviceLevelFormula]);

    const [annualStockBreaks, setAnnualStockBreaks] = useState<Output>({
        variableName: 'Quiebres de stock anuales',
        symbology: 'Quiebres',
        formula: `D * [S' * E(zp) / Q]`,
        measurementUnit: `unidades`,
        value: 0,
    });

    useEffect(() => {
        setAnnualStockBreaks(prevState => updateState(prevState, {
            value: annualStockBreaksFormula(),
        }));
    }, [annualStockBreaksFormula]);

    const [valuedBreaks, setValuedBreaks] = useState<Output>({
        variableName: 'Quiebres de stock valorizados',
        symbology: '',
        formula: `Quiebres * C`,
        measurementUnit: currencyReducer(currency),
        value: 0,
    });

    useEffect(() => {
        setValuedBreaks(prevState => updateState(prevState, {
            value: valuedBreaksFormula(),
        }));
    }, [valuedBreaksFormula]);

    return [
        serviceLevel,
        annualStockBreaks,
        valuedBreaks,
    ];
};