import { EntryActions } from '../store/actions';
import { useCallback, useContext } from 'react';
import { EntryContext } from '../context';

const {
    resetEntries,
} = EntryActions;

export const useEntry = () => {
    const { entry, dispatchEntry } = useContext(EntryContext);

    const reset = useCallback(() => {
        dispatchEntry(resetEntries());
    }, [dispatchEntry]);

    return {
        data: { entry },
        logic: { reset },
    };
};