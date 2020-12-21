import { useCallback, useContext } from 'react';
import { EntryContext } from '../../context';
import { useOrderFormula } from '../order/useOrderFormula';

export const useServiceFormula = () => {
    const {
        annualAverageDemandFormula,
        orderSizeFormula,
    } = useOrderFormula();

    const { entry: { itemCost: { value: _C } } } = useContext(EntryContext);

    /**
     * Returns service level in percentage (SL).
     * Optional params.
     *
     * @param S_prime Composite demand standard deviation.
     * @param E_zp Expected value of loss.
     * @param Q Order size.
     */
    const serviceLevelFormula = useCallback(
        (
            S_prime: number = 0,
            E_zp: number = 0,
            Q: number = orderSizeFormula(),
        ) => (1 - S_prime * E_zp / Q) * 100 || 0,
        [orderSizeFormula],
    );


    /**
     * Returns annual stock breaks ().
     * Optional params.
     *
     * @param D Annual average demand.
     * @param S_prime Composite demand standard deviation.
     * @param E_zp Expected value of loss.
     * @param Q Order size.
     */
    const annualStockBreaksFormula = useCallback(
        (
            D: number = annualAverageDemandFormula(),
            S_prime: number = 0,
            E_zp: number = 0,
            Q: number = orderSizeFormula(),
        ) => D * (1 - serviceLevelFormula(S_prime, E_zp, Q) / 100),
        [annualAverageDemandFormula, orderSizeFormula, serviceLevelFormula],
    );

    /**
     * Returns valued annual breaks ().
     * Optional params.
     *
     * @param D Annual average demand.
     * @param S_prime Composite demand standard deviation.
     * @param E_zp Expected value of loss.
     * @param Q Order size.
     */
    const valuedBreaksFormula = useCallback(
        (
            D: number = annualAverageDemandFormula(),
            S_prime: number = 0,
            E_zp: number = 0,
            Q: number = orderSizeFormula(),
        ) => annualStockBreaksFormula(D, S_prime, E_zp, Q) * _C,
        [_C, annualAverageDemandFormula, annualStockBreaksFormula, orderSizeFormula],
    );

    return {
        serviceLevelFormula,
        annualStockBreaksFormula,
        valuedBreaksFormula,
    };
};