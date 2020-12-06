import { combineReducers } from 'redux';
import counter from './counter';
import mapMarker from "./mapMarker";

const rootReducer = combineReducers({
  counter,mapMarker
});

export default rootReducer;