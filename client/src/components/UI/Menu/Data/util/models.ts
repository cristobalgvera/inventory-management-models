import { MenuData } from '../interfaces';
import { MODEL_CATEGORY, ROUTES } from '../../../../../shared/enum';
import { MODELS_METADATA } from './modelsMetadata';

const EOQ: MenuData = {
    category: MODEL_CATEGORY.EOQ,
    models: [
        {
            name: 'EOQ determinístico',
            route: ROUTES.DETERMINISTIC_EOQ,
            ...MODELS_METADATA.EOQ,
        },
        {
            name: 'EOQ con reabastecimiento no instantáneo (entregas parciales)',
            route: ROUTES.HOME,
            ...MODELS_METADATA.EOQ,
        },
        {
            name: 'EOQ aleatorio',
            route: ROUTES.HOME,
            ...MODELS_METADATA.EOQ,
        },
        {
            name: 'EOQ con costo de quiebre',
            route: ROUTES.HOME,
            ...MODELS_METADATA.EOQ,
        },
    ],
};

const PURCHASE: MenuData = {
    category: MODEL_CATEGORY.PURCHASE,
    models: [
        {
            name: 'Compras conjuntas',
            route: ROUTES.HOME,
            ...MODELS_METADATA.PURCHASE,
        },
        {
            name: 'Compras conjuntas 3 ítems',
            route: ROUTES.HOME,
            ...MODELS_METADATA.PURCHASE,
        },
    ],
};

const UNIQUE_PURCHASE: MenuData = {
    category: MODEL_CATEGORY.UNIQUE_PURCHASE,
    models: [
        {
            name: 'Compra única con demanda normal',
            route: ROUTES.HOME,
            ...MODELS_METADATA.UNIQUE_PURCHASE,
        },
        {
            name: 'Compra única con demanda empírica',
            route: ROUTES.HOME,
            ...MODELS_METADATA.UNIQUE_PURCHASE,
        },
    ],
};

const DISCOUNT: MenuData = {
    category: MODEL_CATEGORY.DISCOUNT,
    models: [
        {
            name: 'Descuentos inclusivos',
            route: ROUTES.HOME,
            ...MODELS_METADATA.DISCOUNT,
        },
        {
            name: 'Descuentos no inclusivos',
            route: ROUTES.HOME,
            ...MODELS_METADATA.DISCOUNT,
        },
        {
            name: 'Descuentos por única vez',
            route: ROUTES.HOME,
            ...MODELS_METADATA.DISCOUNT,
        },
    ],
};

const OTHER: MenuData = {
    category: MODEL_CATEGORY.OTHER,
    models: [
        {
            name: 'Modelo Min-Máx',
            route: ROUTES.HOME,
            ...MODELS_METADATA.OTHER,
        },
        {
            name: 'Modelo sencillo Nmin-Nmáx',
            route: ROUTES.HOME,
            ...MODELS_METADATA.OTHER,
        },
    ],
};

const PERIODIC: MenuData = {
    category: MODEL_CATEGORY.PERIODIC,
    models: [
        {
            name: 'Revisión periódica',
            route: ROUTES.HOME,
            ...MODELS_METADATA.PERIODIC,
        },
    ],
};

export const models = [
    EOQ,
    PURCHASE,
    PERIODIC,
    DISCOUNT,
    UNIQUE_PURCHASE,
    OTHER,
];