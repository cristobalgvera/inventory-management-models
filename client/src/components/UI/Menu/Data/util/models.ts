import { MenuData } from '../interfaces';
import { MODEL_CATEGORY } from '../../../../../shared/enum';
import { MODELS_METADATA } from './modelsMetadata';

const EOQ: MenuData = {
    category: MODEL_CATEGORY.EOQ,
    models: [
        {
            name: 'EOQ determinístico',
            ...MODELS_METADATA.EOQ,
        },
        {
            name: 'EOQ con reabastecimiento no instantáneo (entregas parciales)',
            ...MODELS_METADATA.EOQ,
        },
        {
            name: 'EOQ aleatorio',
            ...MODELS_METADATA.EOQ,
        },
        {
            name: 'EOQ con costo de quiebre',
            ...MODELS_METADATA.EOQ,
        },
    ],
};

const PURCHASE: MenuData = {
    category: MODEL_CATEGORY.PURCHASE,
    models: [
        {
            name: 'Compras conjuntas',
            ...MODELS_METADATA.PURCHASE,
        },
        {
            name: 'Compras conjuntas 3 ítems',
            ...MODELS_METADATA.PURCHASE,
        },
    ],
};

const UNIQUE_PURCHASE: MenuData = {
    category: MODEL_CATEGORY.UNIQUE_PURCHASE,
    models: [
        {
            name: 'Compra única con demanda normal',
            ...MODELS_METADATA.UNIQUE_PURCHASE,
        },
        {
            name: 'Compra única con demanda empírica',
            ...MODELS_METADATA.UNIQUE_PURCHASE,
        },
    ],
};

const DISCOUNT: MenuData = {
    category: MODEL_CATEGORY.DISCOUNT,
    models: [
        {
            name: 'Descuentos inclusivos',
            ...MODELS_METADATA.DISCOUNT,
        },
        {
            name: 'Descuentos no inclusivos',
            ...MODELS_METADATA.DISCOUNT,
        },
        {
            name: 'Descuentos por única vez',
            ...MODELS_METADATA.DISCOUNT,
        },
    ],
};

const OTHER: MenuData = {
    category: MODEL_CATEGORY.OTHER,
    models: [
        {
            name: 'Modelo Min-Máx',
            ...MODELS_METADATA.OTHER,
        },
        {
            name: 'Modelo sencillo Nmin-Nmáx',
            ...MODELS_METADATA.OTHER,
        },
    ],
};

const PERIODIC: MenuData = {
    category: MODEL_CATEGORY.PERIODIC,
    models: [
        {
            name: 'Revisión periódica',
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