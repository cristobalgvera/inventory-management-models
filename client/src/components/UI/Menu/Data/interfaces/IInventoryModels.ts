import { MODEL_CATEGORY, MODEL_CATEGORY_ICON, ROUTES } from '../../../../../shared/enum';

export interface IInventoryModels {
    name: string
    route: ROUTES
    category: MODEL_CATEGORY
    icon: MODEL_CATEGORY_ICON
}