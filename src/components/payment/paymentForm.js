import React, { Component } from 'react';

import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';

import { FormInput, FormButton } from '../formFields';

import History from '../../history';
import OrderSummary from '../shipping/orderSummary';
import { UnderlinedTitle } from './infoHelp';

class PaymentForm extends Component {
    render() {
        const { className, handleSubmit } = this.props;

        return ( 
            <Form onSubmit={handelSubmit} className={`${className} payment-form`}>
                <Field className='payment-form__name'
                    type='name'
                    title='Name on Credit Card'
                    placeholder='Name'
                    name='name'
                    component={FormInput}/>
                <Field className='payment-form__card'
                    type='card'
                    title='Credit Card Number'
                    placeholder='____-____-____-____'
                    name='card'
                    component={FormInput}/>
                <Field className='payment-form__expiration'
                    type='expiration'
                    title='Expiration Date'
                    placeholder='Expiration'
                    name='expiration'
                    component={FormInput}/>
                <Field className='payment-form__cvv'
                    type='cvv'
                    title='CVV'
                    placeholder='CVV'
                    name='cvv'
                    component={FormInput}/>

                <div className='payment-form__line'></div>

                <Field className='payment-form__pay-complete'
                    onClick={() => history.push('/payment')}
                    type='submit'
                    title='Pay & Complete'
                    name='pay-complete'
                    component={FormButton}/>
                <Field className='payment-form__back'
                    onClick={() => history.push('/signin')}
                    tpye='button'
                    title='Back'
                    name='back'
                    shot={true}
                    component={FormButton}/>
                <OrderSummary className='payment-form__order-summary'/>
                <div className='payment-form__shipping-info shipping-info'>
                    <UnderlinedTitle className='shipping-info__title' title='Shippin To' />
                    <div className='shipping-info__name small-text'>{this.props.name}</div>
                    <div className='shipping-info__address small-text'>{this.props.address}</div>
                </div>
            </Form>
        )
    }
}

PaymentForm = reduxForm({
    form: 'PaymentForm'
})(PaymentForm);

function mapStatToProps(state) {
    const { name, address } = state.user.user;
    return { name, address }
}

PaymentForm = connect(mapStateToProps)(PaymentForm);

export default PaymentForm;