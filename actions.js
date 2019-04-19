export const actionTypes = {
  FAILURE: 'FAILURE',
  LOAD_SPREADSHEET: 'LOAD_SPREADSHEET',
  LOAD_SPREADSHEETS: 'LOAD_SPREADSHEETS',
  LOAD_SPREADSHEET_SUCCESS: 'LOAD_SPREADSHEET_SUCCESS',
  LOAD_SPREADSHEETS_SUCCESS: 'LOAD_SPREADSHEETS_SUCCESS',
}

export function failure (error) {
  return {
    type: actionTypes.FAILURE,
    error
  }
}

export function loadSpreadsheet (id) {
  console.log(id);
  return { 
    type: actionTypes.LOAD_SPREADSHEET,
    id,
   }
}

export function loadSpreadsheets () {
  return { type: actionTypes.LOAD_SPREADSHEETS }
}

export function loadSpreadsheetSuccess (data) {
  return {
    type: actionTypes.LOAD_SPREADSHEET_SUCCESS,
    data
  }
}

export function loadSpreadsheetsSuccess (data) {
  return {
    type: actionTypes.LOAD_SPREADSHEETS_SUCCESS,
    data
  }
}
