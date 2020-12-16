import { EntryActions } from '../store/actions';
import { useCallback, useContext } from 'react';
import { EntryContext } from '../context';
import { Entry } from '../store/common/interfaces';

const {
    resetEntries,
    updateEntries,
} = EntryActions;

export const useEntry = () => {
    const { entry, dispatchEntry } = useContext(EntryContext);

    const reset = useCallback(() => dispatchEntry(resetEntries()), [dispatchEntry]);

    const update = useCallback(( entry: Partial<Entry> ) => dispatchEntry(updateEntries(entry)), [dispatchEntry]);

    return {
        data: { entry },
        logic: { reset, update },
    };
};