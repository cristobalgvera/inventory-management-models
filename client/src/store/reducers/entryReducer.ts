import { Entry, EntryActionType } from '../common/interfaces';
import { updateState } from '../../lib';
import { CURRENCY } from '../../shared/enum/currency';
import { currencyReducer } from '../../lib/currencyReducer';

type EntryPayload = EntryActionType['payload'];

export const entryReducer = ( state: Entry, { payload, type }: EntryActionType ): Entry => {
    switch (type) {
        case 'UPDATE_CURRENCY':
            return updateCurrency(state, payload);
        case 'RESET_ENTRIES':
            return resetEntries(state);
        case 'UPDATE_VALUE':
            return updateValue(state, payload);
        default:
            throw new Error(`Type doesn't match any case`);
    }
};

const resetEntries = ( state: Entry ) => {
    return updateState(state, initialEntryState);
};

const updateValue = ( state: Entry, payload: EntryPayload ) => {
    const entryToUpdate = Object.keys(payload)[0] as keyof Entry | undefined;

    if (entryToUpdate && entryToUpdate !== 'entryProperties') {
        return updateState(state, {
            [entryToUpdate]: updateState(state[entryToUpdate], {
                value: payload[entryToUpdate]?.value || 0,
            }),
        });
    }

    return state;
};

const updateCurrency = ( state: Entry, payload: EntryPayload ) => {
    if ('entryProperties' in payload) {
        const { entryProperties } = state;

        return updateState(state, {
            entryProperties: updateState(entryProperties, {
                currency: payload.entryProperties?.currency || CURRENCY.CLP,
            }),
        });
    }

    return state;
};

const _initialProperties: Entry['entryProperties'] = {
    currency: CURRENCY.CLP,
};

// TODO: FIX CURRENCY STATE TO UPDATE ALL CURRENCY VALUES WHEN IS UPDATED

export const initialEntryState: Entry = {
    entryProperties: _initialProperties,
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
        measurementUnit: `${currencyReducer(_initialProperties.currency)} / unidad`,
        value: 0,
    },
    orderCost: {
        variableName: 'Costo de realizar un orden',
        symbology: 'S o A',
        measurementUnit: `${currencyReducer(_initialProperties.currency)} / orden`,
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