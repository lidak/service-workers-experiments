import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ExpenseItem extends Component {
  render () {
    return (
      <div>
        { this.props.title }
        { this.props.amount }
      </div>
    );
  }
}

ExpenseItem.propTypes = {
  title: PropTypes.string.isRequired(),
  amount: PropTypes.number.isRequired(),
  autoCharge: PropTypes.bool,
  billingDay: PropTypes.oneOf([...Array(30).keys()])
}