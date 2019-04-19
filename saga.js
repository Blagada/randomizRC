/* global fetch */

import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'

import { actionTypes, failure, loadSpreadsheetsSuccess } from './actions'

es6promise.polyfill()
function * cleanSpreadsheets(spreadsheets) {
  let cleanSpreadsheets = spreadsheets.map((spreadsheet) => {
    return({
      id: spreadsheet.show.id,
      name: spreadsheet.show.name,
    });
  });
  return (cleanSpreadsheets);
}

function * loadSpreadsheetsSaga() {
  try {
    const res = yield fetch('https://api.tvmaze.com/search/shows?q=batman');
    const data = yield res.json();
    const cleanData = yield cleanSpreadsheets(data);
    yield put(loadSpreadsheetsSuccess(cleanData));
  } catch (err) {
    yield put(failure(err))
  }
}

function * rootSaga() {
  yield all([
    takeLatest(actionTypes.LOAD_SPREADSHEETS, loadSpreadsheetsSaga)
  ])
}

export default rootSaga
