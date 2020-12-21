import { useCallback, useContext } from 'react';
import { EntryContext } from '../../context';
import { useOrderFormula } from '../order/useOrderFormula';

export const useInventoryFormula = () => {
    const {
        orderSizeFormula,
    } = useOrderFormula();

    const {
        entry: {
            itemCost: { value: _C },
        },
    } = useContext(EntryContext);

    /**
     * Returns average inventory (AIL).
     * Optional params.
     *
     * @param Q Order size
     */
    const averageInventoryFormula = useCallback(
        (
            Q: number = orderSizeFormula(),
        ) => Q / 2,
        [orderSizeFormula],
    );

    /**
     * Returns average valued inventory ().
     * Optional params.
     *
     * @param Q Order size.
     * @param C Item cost.
     */
    const averageValuedInventoryFormula = useCallback(
        (
            Q: number = orderSizeFormula(),
            C: number = _C,
        ) => averageInventoryFormula(Q) * C,
        [_C, averageInventoryFormula, orderSizeFormula],
    );


    /**
     * Returns maximum inventory ().
     * Optional params.
     *
     * @param Q Order size.
     */
    const maximumInventoryFormula = useCallback(
        (
            Q: number = orderSizeFormula(),
        ) => Q,
        [orderSizeFormula],
    );

    /**
     * Returns average valued inventory ().
     * Optional params.
     *
     * @param Q Order size.
     * @param C Item cost.
     */
    const maximumValuedInventoryFormula = useCallback(
        (
            Q: number = orderSizeFormula(),
            C: number = _C,
        ) => maximumInventoryFormula(Q) * C,
        [_C, maximumInventoryFormula, orderSizeFormula],
    );

    return {
        averageInventoryFormula,
        averageValuedInventoryFormula,
        maximumInventoryFormula,
        maximumValuedInventoryFormula,
    };
};