import { ENTRY_ACTIONS } from '../../actions/actionTypes';
import { Entry } from './index';
import { DeepPartial } from '../../../lib';

export interface IEntryActionType {
    type: keyof typeof ENTRY_ACTIONS;
    payload: DeepPartial<Entry>;
}