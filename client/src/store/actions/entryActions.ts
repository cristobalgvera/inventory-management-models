import { EntryActionType } from '../common/interfaces';

export const resetEntries = (): EntryActionType => ({
    type: 'RESET_ENTRIES',
});