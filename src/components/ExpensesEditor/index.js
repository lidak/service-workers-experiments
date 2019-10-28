import React, { Component } from 'react';
import { Jumbotron } from 'react-bootstrap';

import ExpenseItem from '../ExpenseItem';

export default class ExpenseEditor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expenses:[{
        title: 'Amazon Prime',
        autoCharge: true,
        billingDay: 10,
        amount: 25
      }]
    };
  }

  render() {
    const {
      expenses
    } = this.state;

    return(
      <Jumbotron>
        {
          expenses.length &&
          <ul>
            {
              expenses.map(({
                title,
                autoCharge,
                billingDay
              }) => 
                <ExpenseItem title={title}/>
              )
            }
          </ul>
        }
      </Jumbotron>
    );
  }
}