import { Entry, EntryActionType } from '../common/interfaces';
import { DeepPartial } from '../../lib';

type PartialEntry = DeepPartial<Entry>;

export const resetEntries = (): EntryActionType => ({
    type: 'RESET_ENTRIES',
    payload: {},
});

export const updateValue = ( entry: PartialEntry ): EntryActionType => ({
    type: 'UPDATE_VALUE',
    payload: entry,
});

export const updateCurrency = ( entry: PartialEntry ): EntryActionType => ({
    type: 'UPDATE_CURRENCY',
    payload: entry,
});