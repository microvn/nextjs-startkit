import {applyMiddleware, compose, createStore} from 'redux'
import createSagaMiddleware from "redux-saga";
import {createLogger} from "redux-logger";
import rootReducer from './reducers'
import rootSaga from "./sagas";

const middleWare = [];

// Saga Middleware
const sagaMiddleware = createSagaMiddleware();
middleWare.push(sagaMiddleware);

// Logger Middleware. This always has to be last
const loggerMiddleware = createLogger({
	predicate: () => process.env.NODE_ENV === "development" && typeof window !== 'undefined'
});

middleWare.push(loggerMiddleware);

const enhancers = compose(
	typeof window !== 'undefined' && process.env.NODE_ENV !== 'production'
		? window.devToolsExtension && window.devToolsExtension()
		: f => f
);

const createStoreWithMiddleware = applyMiddleware(...middleWare)(createStore)

export default initialState => {
	const store = createStoreWithMiddleware(rootReducer, initialState, enhancers)

	store.runSagaTask = () => {
		store.sagaTask = sagaMiddleware.run(rootSaga);
	};
	// run the rootSaga initially
	store.runSagaTask();

	return store;
}
