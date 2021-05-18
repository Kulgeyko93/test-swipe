import { AnyAction } from 'redux';
import { IListItemState } from '../../types_intefaces/interfaces';
import { ListAction } from '../../constants/actions';
import { defaultList } from '../defaultState';

export function listReducer(state: IListItemState = defaultList, action: AnyAction): IListItemState {
  const { payload, type } = action;
  switch (type) {
    case ListAction.SET_LIST_ITEM:
      return {
        ...state,
        items: [...state.items, payload],
      };
      case ListAction.SET_FULL_HEIGHT:
        return {
          ...state,
          fullHeight: payload,
        };

    default:
      return state;
  }
}
