import { applyMiddleware, compose, createStore } from "redux";
import BudgetReducer from "./BudgetReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(BudgetReducer, composeEnhancers(applyMiddleware()))

export default store;