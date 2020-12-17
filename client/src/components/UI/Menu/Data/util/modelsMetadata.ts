import { InventoryModels } from '../interfaces';
import { MODEL_CATEGORY, MODEL_CATEGORY_ICON } from '../../../../../shared/enum';

type ModelMetadata = Pick<InventoryModels, 'category' | 'icon'>;

const EOQ: ModelMetadata = {
    category: MODEL_CATEGORY.EOQ,
    icon: MODEL_CATEGORY_ICON.ShowChart,
};

const PURCHASE: ModelMetadata = {
    category: MODEL_CATEGORY.PURCHASE,
    icon: MODEL_CATEGORY_ICON.Store,
};

const PERIODIC: ModelMetadata = {
    category: MODEL_CATEGORY.PERIODIC,
    icon: MODEL_CATEGORY_ICON.RotateRight,
};

const DISCOUNT: ModelMetadata = {
    category: MODEL_CATEGORY.DISCOUNT,
    icon: MODEL_CATEGORY_ICON.BarChart,
};

const UNIQUE_PURCHASE: ModelMetadata = {
    category: MODEL_CATEGORY.UNIQUE_PURCHASE,
    icon: MODEL_CATEGORY_ICON.Adjust,
};

const OTHER: ModelMetadata = {
    category: MODEL_CATEGORY.OTHER,
    icon: MODEL_CATEGORY_ICON.AllInclusive,
};

export const MODELS_METADATA = {
    EOQ,
    PURCHASE,
    PERIODIC,
    DISCOUNT,
    UNIQUE_PURCHASE,
    OTHER,
};