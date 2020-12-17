import { Entry, EntryActionType } from '../common/interfaces';
import { DeepPartial } from '../../lib';

export const resetEntries = (): EntryActionType => ({
    type: 'RESET_ENTRIES',
    payload: {},
});

export const updateEntries = ( entry: DeepPartial<Entry> ): EntryActionType => ({
    type: 'UPDATE_ENTRY',
    payload: entry,
});