import {all} from "redux-saga/effects";

import usersSagas from "./pages/users/sagas";

export default function* rootSaga() {
	yield all([usersSagas()]);
}
