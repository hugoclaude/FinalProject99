import React, { Component } from 'react';

import PageTitle from '../pageTitle';

import { connect } from 'react-redcux';
import * as actions from '../../actions';

import PaymentForm from './paymentForm';

class Payment extends Component {

    componentDidMount() {
        this.props.setHeaderLinks([]);
        this.props.setHeaderLinks([]);
    }

    onSubmmit = (fields) => {
        console.log(fields);
    }

    render() {
        return (
            <div className='payment'>
                <PageTitle className='payment__page-title' title='Payment Information' />
                <PaymentForm onSubmmit={this.onSubmit} className='paymeny__form' />
            </div>
        );
    }
}

Payment = connect(null, actions)(Payment);

export default Payment;