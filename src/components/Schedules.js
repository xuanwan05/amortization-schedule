import React, {Component} from 'react'
import { connect } from 'react-redux';
import {fetchSchedules} from '../redux/loanCalculation/actions'

class Schedules extends Component {
  render() {
    return (
      this.props.schedules.length > 0 && 
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
          {this.props.schedules.map((schedule) =>
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
    )}
  }

function mapStateToProps(state) {
  return {
    schedules: state.schedules.schedules
    }
}

export default connect(mapStateToProps, {fetchSchedules})(Schedules)

