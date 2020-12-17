import { MODEL_CATEGORY } from '../../../../../shared/enum';
import { InventoryModels } from './index';

export interface IMenuData {
    category: MODEL_CATEGORY
    models: InventoryModels[]
}