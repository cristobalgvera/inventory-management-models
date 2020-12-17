import { useCallback } from 'react';

export const useOrderFormula = () => {

    /**
     * Returns annual average demand.
     *
     * @param d Average demand on period.
     * @param np Number of periods.
     */
    const annualAverageDemandFormula = useCallback(( d: number, np: number ) => d * np, []);

    /**
     * Returns order size.
     *
     * @param D Annual average demand formula.
     * @param S Order cost.
     * @param i Annual storage cost percentage.
     * @param C Item cost.
     */
    const orderSizeFormula = useCallback(( D: number, S: number, i: number, C: number ) => {
        return Math.sqrt((2 * D * S) / (i * C));
    }, []);

    /**
     * Returns average order cost.
     *
     * @param Q Order size.
     * @param C Item cost.
     */
    const averageOrderCostFormula = useCallback(( Q: number, C: number ) => Q * C, []);

    /**
     * Returns resupply point.
     *
     * @param d Average demand on period.
     * @param LT Resupply duration.
     */
    const resupplyPointFormula = useCallback(( d: number, LT: number ) => d * LT, []);

    /**
     * Returns revision interval.
     *
     * @param Q Order size.
     * @param d Average demand on period.
     */
    const revisionIntervalFormula = useCallback(( Q: number, d: number ) => Q / d, []);

    /**
     * Returns number of orders.
     *
     * @param D Annual average demand formula.
     * @param Q Order size.
     */
    const totalOrders = useCallback(( D: number, Q: number ) => D / Q, []);

    return {
        annualAverageDemandFormula,
        orderSizeFormula,
        averageOrderCostFormula,
        resupplyPointFormula,
        revisionIntervalFormula,
        totalOrders,
    };

};