import { ENTRY_ACTIONS } from '../../actions/actionTypes';
import { Entry } from './index';

export interface IEntryActionType {
    type: keyof typeof ENTRY_ACTIONS;
    payload?: Entry | {};
}