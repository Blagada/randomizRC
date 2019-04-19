export const actionTypes = {
  FAILURE: 'FAILURE',
  LOAD_SPREADSHEETS: 'LOAD_SPREADSHEETS',
  LOAD_SPREADSHEETS_SUCCESS: 'LOAD_SPREADSHEETS_SUCCESS',
}

export function failure (error) {
  return {
    type: actionTypes.FAILURE,
    error
  }
}

export function loadSpreadsheets () {
  return { type: actionTypes.LOAD_SPREADSHEETS }
}

export function loadSpreadsheetsSuccess (data) {
  return {
    type: actionTypes.LOAD_SPREADSHEETS_SUCCESS,
    data
  }
}

export function startClock () {
  return { type: actionTypes.START_CLOCK }
}