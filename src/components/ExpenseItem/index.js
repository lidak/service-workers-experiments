import React, { Component } from 'react';

export default class ExpenseItem extends Component {
    render () {
        return (
            <div>
                { this.props.name }
                { this.props.amount }
            </div>
        );
    }
}