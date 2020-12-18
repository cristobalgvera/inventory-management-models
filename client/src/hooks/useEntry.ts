import { EntryActions } from '../store/actions';
import { useCallback, useContext } from 'react';
import { EntryContext } from '../context';
import { Entry } from '../store/common/interfaces';

const {
    resetEntries,
    updateValue,
    updateCurrency,
} = EntryActions;

export const useEntry = () => {
    const { entry, dispatchEntry } = useContext(EntryContext);

    const reset = useCallback(() => dispatchEntry(resetEntries()), [dispatchEntry]);

    const updateEntryValue = useCallback(( entry: Partial<Entry> ) => dispatchEntry(updateValue(entry)), [dispatchEntry]);

    const updateEntryCurrency = useCallback(( entry: Partial<Entry> ) => dispatchEntry(updateCurrency(entry)), [dispatchEntry]);

    return {
        data: { entry },
        logic: { reset, updateEntryValue, updateEntryCurrency },
    };
};