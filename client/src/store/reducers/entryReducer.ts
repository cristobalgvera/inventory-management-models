import { Entry, EntryActionType } from '../common/interfaces';
import { updateState } from '../../lib';

type EntryPayload = EntryActionType['payload'];

export const entryReducer = ( state: Entry, { payload, type }: EntryActionType ): Entry => {
    switch (type) {
        case 'RESET_ENTRIES':
            return resetEntries(state);
        case 'UPDATE_ENTRY':
            return updateEntry(state, payload);
        default:
            throw new Error(`Type doesn't match any case`);
    }
};

const resetEntries = ( state: Entry ) => {
    return updateState(state, initialEntryState);
};

const updateEntry = ( state: Entry, payload: EntryPayload ) => {
    const entryToUpdate = Object.keys(payload)[0] as keyof Entry | undefined;

    if (entryToUpdate) {
        return updateState(state, {
            [entryToUpdate]: updateState(state[entryToUpdate], {
                value: payload[entryToUpdate]?.value || 0,
            }),
        });
    }
    return state;
};

export const initialEntryState: Entry = {
    annualStorageCostPercentage: {
        variableName: 'Porcentaje de costo anual de almacenamiento',
        symbology: 'i',
        measurementUnit: '%',
        value: 0,
    },
    averageDemand: {
        variableName: 'Demanda promedio en un periodo',
        symbology: 'd',
        measurementUnit: 'unidades / semana',
        value: 0,
    },
    itemCost: {
        variableName: 'Costo del artículo',
        symbology: 'C',
        measurementUnit: 'dinero / unidad',
        value: 0,
    },
    orderCost: {
        variableName: 'Costo de realizar un orden',
        symbology: 'S o A',
        measurementUnit: 'dinero / orden',
        value: 0,
    },
    periodsNumber: {
        variableName: 'Cantidad de periodos',
        symbology: 'np',
        measurementUnit: 'semanas / año',
        value: 0,
    },
    resupplyDuration: {
        variableName: 'Duración del reabastecimiento',
        symbology: 'LT',
        measurementUnit: 'semanas',
        value: 0,
    },
};