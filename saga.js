/* global fetch */

import { all, call, delay, put, take, takeLatest } from 'redux-saga/effects'
import es6promise from 'es6-promise'
import 'isomorphic-unfetch'

import { actionTypes, failure, loadSpreadsheetSuccess, loadSpreadsheetsSuccess } from './actions'

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
    const res = yield fetch('http://api.tvmaze.com/search/shows?q=batman', {
      headers: {
        'Access-Control-Allow-Origin' : '*'
      },
    });
    const data = yield res.json();
    const cleanData = yield cleanSpreadsheets(data);
    yield put(loadSpreadsheetsSuccess(cleanData));
  } catch (err) {
    yield put(failure(err))
  }
}

function * loadSpreadsheetSaga(action) {
  try {
    console.log('coming here?');
    const res = yield fetch(`http://api.tvmaze.com/shows/${action.id}`, {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin' : '*'
      },
    });
    console.log('Treid to fetch?');
    const data = yield res.json();
    yield put(loadSpreadsheetSuccess(data));
  } catch (err) {
    console.log('AN ERROR?');
    yield put(failure(err))
  }
}

function * rootSaga() {
  yield all([
    takeLatest(actionTypes.LOAD_SPREADSHEETS, loadSpreadsheetsSaga),
    takeLatest(actionTypes.LOAD_SPREADSHEET, loadSpreadsheetSaga)
  ])
}

export default rootSaga
