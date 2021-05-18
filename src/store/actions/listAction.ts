import { Dispatch } from 'redux';
import { ListAction } from '../../constants/actions';
import { IFullHeightAction, IListItemAction } from '../../types_intefaces/actionsTypes';

export const setListItem = (payload: string) => (dispatch: Dispatch): IListItemAction =>
  dispatch({ type: ListAction.SET_LIST_ITEM, payload });

export const setFullHeight = (payload: number) => (dispatch: Dispatch): IFullHeightAction =>
  dispatch({ type: ListAction.SET_FULL_HEIGHT, payload });
