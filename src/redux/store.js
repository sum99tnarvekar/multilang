import { createStore , combineReducers , applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import langReducer from "./reducers/LangReducers";

const rootReducer = combineReducers({
language: langReducer
})

const initialState = {}

const middleware = [thunk];

const store = createStore(rootReducer, initialState , applyMiddleware(...middleware));

export default store;