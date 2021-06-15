import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import rootReducer from "./root-reducer";

const miiddlewares = [logger];
const store = createStore( rootReducer, applyMiddleware(...miiddlewares) );

export default store;