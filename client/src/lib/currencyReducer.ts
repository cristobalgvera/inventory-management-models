import { CURRENCY } from '../shared/enum/currency';

export const currencyReducer = ( currency: CURRENCY ) => {
    switch (currency) {
        case CURRENCY.USD:
            return '$ USD';
        case CURRENCY.EUR:
            return '€ EUR';
        case CURRENCY.CLP:
            return '$ CLP';
    }
};