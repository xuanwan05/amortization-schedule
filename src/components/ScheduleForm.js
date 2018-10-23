import React from 'react'
import { reduxForm, Field } from 'redux-form'
import {fetchSchedules} from '../redux/loanCalculation/actions'

const positiveInteger = value =>
  Number(value) === value && value % 1 === 0 && value > 0 ? 'Must be a whole number' : undefined

const required = value => (value || typeof value === 'number' ? undefined : 'Required')

const positiveNumber = value =>
  Number(value) === value && value % 1 !== 0 && value > 0 ? 'Must be positive number' : undefined

const validate = values => {
  const errors = {};
  if (!values.loanAmount) {
    errors.loanAmount = 'Required'
  }
  if (!values.interestRate) {
    errors.interestRate = 'Required'
  }
  if (!values.years) {
    errors.years = 'Required'
  }
  return errors;
}

// const renderField = render => ({input, meta, label, ...rest}) =>
const renderField = ({input, label, placeholder,meta:{ touched, error, warning }}) =>
  <>
    <div
      className={
        error && touched ? 'error rowInput' : 'rowInput'
      }>
      <label>{label}</label>
      {/* {render(input, label, rest)} */}
      <div className='inputContainer'>
        <input {...input} placeholder={placeholder} type='number'  />
        {touched &&
          ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
    {/* {(meta.error && meta.touched) &&
    <div className='errorMessage show'>
      <p className='emptyError'>Required</p>
    </div>
    } */}
  </>


// const RenderInput = createRenderer(input => 
//   <input {...input}/>
// )

function submit(values, dispatch) {
  return dispatch(fetchSchedules(values));
}

let ScheduleForm = ({ handleSubmit, submitting }) => 
  <form onSubmit={handleSubmit(submit)}>
    <header>
      <p>Loan Calculator</p>
    </header>
    <Field name='loanAmount' label='Loan Amount' step='any' placeholder='0.00'  min="0.00" component={renderField} validate={[required]}/>
    <Field name='interestRate' label='Interest Rate (per Year)' step='any' min="0.00" placeholder='0.00' component={renderField} validate={[required, positiveNumber]}/>
    <Field name='years' label='Years' type='number' step="any" min="0"  pattern='^\d+$' placeholder='0' component={renderField} validate={[required, positiveInteger]}/>
    <button className='btn' type='submit' disabled={submitting}>Submit</button>
  </form>

// Decorate the form component
ScheduleForm = reduxForm({
  // a unique name for this form
  form: 'scheduleForm',
  destroyOnUnmout: false
  // validate
})(ScheduleForm)


export default ScheduleForm
