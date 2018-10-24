import React, {Component} from 'react'
import { connect } from 'react-redux';
import {fetchSchedules} from '../redux/loanCalculation/actions'

class Schedules extends Component {
  buildLoading() {
    return (
      <div className='m-vertical--40 loader--newtonsCradle'></div>
    )
  }

  buildTable() {
    if (this.props.schedules.schedules.length > 0) {
      return (
        <>
          <table>
            <thead>
              <tr>
                <th>Payment Number</th>
                <th>Payment Amount</th>
                <th>Payment Interest</th>
                <th>Current Balance</th>
                <th>Total Payments</th>
                <th>Total Interest Paid</th>
              </tr>
            </thead>
            <tbody>
            {this.props.schedules.schedules.map((schedule) =>
                <tr key={schedule.paymentNumber}>
                  <td>{schedule.paymentNumber}</td>
                  <td>{schedule.curMonthlyPaymentAmountIncents/100}</td>
                  <td>{schedule.curMonthlyInterestIncents/100}</td>
                  <td>{schedule.curBalanceIncents/100}</td>
                  <td>{schedule.totalPaymentsIncents/100}</td>
                  <td>{schedule.totalInterestPaidIncents/100}</td>
                </tr>
              )
            }
            </tbody>
          </table>
        </>
      )
    }
  }
  render() {
    const content = this.props.schedules.schedulesLoading ? this.buildLoading() : this.buildTable()
    return (
      <>
        {content}
      </>
    )}
  }

function mapStateToProps(state) {
  return {
    schedules: state.schedules
    }
}

export default connect(mapStateToProps, {fetchSchedules})(Schedules)

