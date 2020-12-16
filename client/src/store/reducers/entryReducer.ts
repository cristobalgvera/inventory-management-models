import { Entry, EntryActionType } from '../common/interfaces';
import { updateState } from '../../lib';

type EntryPayload = EntryActionType['payload'];

export const initialEntryState: Entry = {
    annualStorageCostPercentage: 0,
    averageDemand: 0,
    itemCost: 0,
    orderCost: 0,
    periodsNumber: 0,
    replacementTime: 0,
};

export const entryReducer = ( state: Entry, { payload, type }: EntryActionType ): Entry => {
    switch (type) {
        case 'RESET_ENTRIES':
            return resetEntries(state);
        default:
            throw new Error(`Type doesn't match any case`);
    }
};

const resetEntries = ( state: Entry ) => {
    return updateState(state, initialEntryState);
};