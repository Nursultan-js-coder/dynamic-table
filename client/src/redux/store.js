import {applyMiddleware, compose, createStore} from "redux";
import logger from "redux-logger";
import rootReducer from "./reducers";
import {composeWithDevTools} from "redux-devtools-extension";

const composedEnhancer = compose(composeWithDevTools(), applyMiddleware(logger));
export default createStore(rootReducer, composedEnhancer);
