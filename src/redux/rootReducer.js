import { combineReducers } from 'redux'
import {reducer as formReducer} from 'redux-form'
import loanCalculation from './loanCalculation/reducer'

const rootReducer = combineReducers({
  schedules: loanCalculation,
  // Mounted at 'form'
  form: formReducer
});

export default rootReducer