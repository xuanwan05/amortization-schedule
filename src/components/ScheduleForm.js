import React from 'react'
import { reduxForm, Field } from 'redux-form'
import {fetchSchedules} from '../redux/loanCalculation/actions'

const validate = values => {
  const errors = {};
  if (!values.loanAmount) {
    errors.loanAmount = 'Required'
  } else if (isNaN(Number(values.loanAmount))) {
    errors.loanAmount = 'Must be a number'
  } else if (values.loanAmount > 9999999999999999.99 || values.loanAmount <= 0) {
    errors.loanAmount = "Must be between 0.01 and 9999999999999999.99"
  }

  if (!values.interestRate) {
    errors.interestRate = 'Required'
  } else if (isNaN(Number(values.interestRate))) {
    errors.interestRate = 'Must be a number'
  } else if (values.interestRate > 100.00 || values.interestRate < 0.000001) {
    errors.interestRate = 'Must be between 0.000001 and 100.00' 
  }
  
  if (!values.years) {
    errors.years = 'Required'
  } else if (isNaN(Number(values.years))) {
    errors.years = 'Must be a integer'
  } else if (!/^\d+$/.test(values.years)) {
    errors.years = 'Must be a integer'
  } else if (values.years < 1 || values.years > 1000000) {
    errors.years = 'Must be between 1 and 1000000'
  }
  return errors;
}

const renderField = ({input, label, placeholder,meta:{ touched, error, warning }}) =>
  <>
    <div
      className={
        error && touched ? 'error rowInput' : 'rowInput'
      }>
      <label>{label}</label>
      <div className='inputContainer'>
        <input {...input} placeholder={placeholder} type='number'  />
        {touched &&
          ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  </>

function submit(values, dispatch) {
  return dispatch(fetchSchedules(values));
}

let ScheduleForm = ({ handleSubmit, submitting }) => 
  <form onSubmit={handleSubmit(submit)}>
    <header>
      <p>Loan Calculator</p>
    </header>
    <Field name='loanAmount' label='Loan Amount' step='any' placeholder='0.00'  min="0.01" component={renderField}/>
    <Field name='interestRate' label='Interest Rate (per Year)' step='any' min="0.01" placeholder='0.00' component={renderField}/>
    <Field name='years' label='Years' type='number' step="any" min="1"  placeholder='0' component={renderField}/>
    <button className='btn' type='submit' disabled={submitting}>Submit</button>
  </form>

// Decorate the form component
ScheduleForm = reduxForm({
  // a unique name for this form
  form: 'scheduleForm',
  destroyOnUnmout: false,
  //validation function given to redux-form
  validate 
})(ScheduleForm)

export default ScheduleForm
