import { actionTypes } from './actions'

export const randomizrc = {
  spreadsheets: null
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

    default:
      return state
  }
}

export default reducer
