import { actionTypes } from './actions'

export const randomizrc = {
  spreadsheets: null,
  spreadsheet: null,
}

function reducer (state = randomizrc, action) {
  switch (action.type) {
    case actionTypes.FAILURE:
      return {
        ...state,
        ...{ error: action.error }
      }

    case actionTypes.LOAD_SPREADSHEETS_SUCCESS:
      return {
        ...state,
        ...{ spreadsheets: action.data },
      }
    case actionTypes.LOAD_SPREADSHEET_SUCCESS:
      return {
        ...state,
        ...{ spreadsheet: action.data },
      }
    default:
      return state
  }
}

export default reducer
