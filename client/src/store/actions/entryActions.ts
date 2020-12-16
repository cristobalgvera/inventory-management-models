import { Entry, EntryActionType } from '../common/interfaces';

export const resetEntries = (): EntryActionType => ({
    type: 'RESET_ENTRIES',
    payload: {},
});

export const updateEntries = ( entry: Entry ): EntryActionType => ({
    type: 'UPDATE_ENTRIES',
    payload: entry,
});