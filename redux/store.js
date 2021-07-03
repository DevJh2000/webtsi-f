import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import listReducer from "./reducer/listReducer";
//Estanciamos nuestros reducers
const reducers = combineReducers({
  listReducer,
});

//Codigo para que funcione la extencion de redux para el navegador
const composeEnhancers =
  (typeof window !== "undefined" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

//middleware
const enhancer = composeEnhancers(applyMiddleware(thunk));

//Creacion del store
const store = createStore(reducers, enhancer);

export default store;
