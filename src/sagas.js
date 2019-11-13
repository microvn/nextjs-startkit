import {all} from "redux-saga/effects";

import usersSagas from "./containers/users/sagas";

export default function* rootSaga() {
	yield all([usersSagas()]);
}
