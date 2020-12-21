import { useCallback, useContext } from 'react';
import { EntryContext } from '../../context';

export const useOrderFormula = () => {
    const {
        entry: {
            averageDemand: { value: _d },
            periodsNumber: { value: _np },
            orderCost: { value: _S },
            resupplyDuration: { value: _LT },
            itemCost: { value: _C },
            annualStorageCostPercentage: { value: _i },
        },
    } = useContext(EntryContext);

    /**
     * Returns annual average demand (D).
     * Optional params.
     *
     * @param d Average demand on period.
     * @param np Number of periods.
     */
    const annualAverageDemandFormula = useCallback(
        (
            d: number = _d,
            np: number = _np,
        ) => d * np,
        [_d, _np],
    );

    /**
     * Returns order size (Q).
     * Optional params.
     *
     * @param D Annual average demand formula.
     * @param S Order cost.
     * @param i Annual storage cost percentage.
     * @param C Item cost.
     */
    const orderSizeFormula = useCallback(
        (
            D: number = annualAverageDemandFormula(),
            S: number = _S,
            i: number = _i,
            C: number = _C,
        ) => Math.sqrt((2 * D * S) / ((i * C) / 100)) || 0,
        [_C, _S, _i, annualAverageDemandFormula],
    );

    /**
     * Returns average order cost. ()
     * Optional params.
     *
     * @param Q Order size.
     * @param C Item cost.
     */
    const averageOrderCostFormula = useCallback(
        (
            Q: number = orderSizeFormula(),
            C: number = _C,
        ) => Q * C,
        [_C, orderSizeFormula],
    );

    /**
     * Returns resupply point (ROP).
     * Optional params.
     *
     * @param d Average demand on period.
     * @param LT Resupply duration.
     */
    const resupplyPointFormula = useCallback(
        (
            d: number = _d,
            LT: number = _LT,
        ) => d * LT,
        [_LT, _d],
    );

    /**
     * Returns revision interval (T).
     * Optional params.
     *
     * @param Q Order size.
     * @param d Average demand on period.
     */
    const revisionIntervalFormula = useCallback(
        (
            Q: number = orderSizeFormula(),
            d: number = _d,
        ) => Q / d || 0,
        [_d, orderSizeFormula],
    );

    /**
     * Returns number of orders (N).
     * Optional params.
     *
     * @param D Annual average demand.
     * @param Q Order size.
     */
    const totalOrdersFormula = useCallback(
        (
            D: number = annualAverageDemandFormula(),
            Q: number = orderSizeFormula(),
        ) => D / Q || 0,
        [annualAverageDemandFormula, orderSizeFormula],
    );

    /**
     * Returns number of orders. ()
     * Optional params.
     *
     * @param D Annual average demand.
     * @param Q Order size.
     */
    const inventoryRotationFormula = useCallback(
        (
            D: number = annualAverageDemandFormula(),
            Q: number = orderSizeFormula(),
        ) => (2 * D) / Q || 0,
        [annualAverageDemandFormula, orderSizeFormula],
    );

    return {
        annualAverageDemandFormula,
        orderSizeFormula,
        averageOrderCostFormula,
        resupplyPointFormula,
        revisionIntervalFormula,
        totalOrdersFormula,
        inventoryRotationFormula,
    };

};