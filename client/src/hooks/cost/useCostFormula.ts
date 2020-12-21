import { useOrderFormula } from '../order/useOrderFormula';
import { useCallback, useContext } from 'react';
import { EntryContext } from '../../context';

export const useCostFormula = () => {
    const {
        orderSizeFormula,
        annualAverageDemandFormula,
    } = useOrderFormula();

    const {
        entry: {
            orderCost: { value: _S },
            itemCost: { value: _C },
            annualStorageCostPercentage: { value: _i },
        },
    } = useContext(EntryContext);

    /**
     * Returns order cost ().
     * Optional params.
     *
     * @param D Annual average demand.
     * @param Q Order size.
     * @param S Order cost.
     */
    const orderCostFormula = useCallback(
        (
            D: number = annualAverageDemandFormula(),
            Q: number = orderSizeFormula(),
            S: number = _S,
        ) => (D / Q) * S || 0,
        [_S, annualAverageDemandFormula, orderSizeFormula],
    );

    /**
     * Returns order cost ().
     * Optional params.
     *
     * @param i Annual storage cost percentage.
     * @param C Item cost.
     * @param Q Order size.
     */
    const storageCostFormula = useCallback(
        (
            i: number = _i,
            C: number = _C,
            Q: number = orderSizeFormula(),
        ) => ((i / 100) * C * Q) / 2,
        [_C, _i, orderSizeFormula],
    );

    /**
     * Returns total cost (CT).
     * Optional params.
     *
     * @param D Annual average demand.
     * @param Q Order size.
     * @param S Order cost.
     * @param i Annual storage cost percentage.
     * @param C Item cost.
     */
    const totalCostFormula = useCallback(
        (
            D: number = annualAverageDemandFormula(),
            Q: number = orderSizeFormula(),
            S: number = _S,
            i: number = _i,
            C: number = _C,
        ) => orderCostFormula(D, Q, S) + storageCostFormula(i, C, Q),
        [_C, _S, _i, annualAverageDemandFormula, orderCostFormula, orderSizeFormula, storageCostFormula],
    );

    /**
     * Returns total cost over annual sells in percentage ().
     * Optional params.
     *
     * @param D Annual average demand.
     * @param Q Order size.
     * @param S Order cost.
     * @param i Annual storage cost percentage.
     * @param C Item cost.
     */
    const totalCostOverAnnualSellsFormula = useCallback(
        (
            D: number = annualAverageDemandFormula(),
            Q: number = orderSizeFormula(),
            S: number = _S,
            i: number = _i,
            C: number = _C,
        ) => totalCostFormula(D, Q, S, i, C) / (D * C) * 100 || 0,
        [_C, _S, _i, annualAverageDemandFormula, orderSizeFormula, totalCostFormula],
    );

    return {
        orderCostFormula,
        storageCostFormula,
        totalCostFormula,
        totalCostOverAnnualSellsFormula,
    };
};