import { RECEIVE_POKEMON } from '../actions/pokemon_actions';
import merge  from 'lodash/merge';


export const itemsReducer = (state = {}, action) => {
  switch (action.type) {
    case (RECEIVE_POKEMON):
    let items = action.pokemon.items;
      return merge({}, state, items);
    default:
      return state;
  }
}