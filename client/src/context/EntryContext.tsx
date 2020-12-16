import React, { createContext, Dispatch, FunctionComponent, useReducer } from 'react';
import { Entry, EntryActionType } from '../store/common/interfaces';
import { entryReducer, initialEntryState } from '../store/reducers';

interface IEntryContext {
    entry: Entry
    dispatchEntry: Dispatch<EntryActionType>
}

export const EntryContext = createContext<IEntryContext>({
    entry: initialEntryState,
    dispatchEntry: () => {
    },
});

export const EntryContextProvider: FunctionComponent = ( { children } ) => {
    const [state, dispatch] = useReducer(entryReducer, initialEntryState);

    return (
        <EntryContext.Provider value={{ entry: state, dispatchEntry: dispatch }}>
            {children}
        </EntryContext.Provider>
    );
};