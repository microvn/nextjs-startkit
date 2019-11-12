import {all} from "redux-saga/effects";

import usersSagas from "./pages/users/sagas";
import areasSagas from "./pages/areas/sagas";
import productsSagas from "./pages/products/sagas";
import articlesSagas from "./pages/articles/sagas";
import associatesSagas from "./pages/associates/sagas";
import lifeStyleSagas from "./pages/lifestyle/sagas";
import categoriesSagas from "./pages/categories/sagas";
import contactSagas from "./pages/contact/sagas";

export default function* rootSaga() {
	yield all([usersSagas(), areasSagas(), productsSagas(), articlesSagas(), associatesSagas(), lifeStyleSagas(), categoriesSagas(),contactSagas()]);
}
