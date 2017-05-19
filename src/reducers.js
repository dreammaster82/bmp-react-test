/**
 * Created by Denis on 18.05.2017.
 */
import {ADD_ITEM} from './actions';

export default function bmp(state = [], action = {}){
    if(action.type == ADD_ITEM){
        state.push(action.item);
    }
    return state;
}