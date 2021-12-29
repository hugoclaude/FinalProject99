import React, { Component } from 'react';
import  { reduxForm, Field } from 'redux-form';

import history from '../../history';

import { FormButton } from '../formFields';
import CheckoutProducts from './checkoutProducts';

class CheckoutForm extends Component {
    render () {
        const { className, handleSubmit, subtotal } = this.props;
        let tax = 1.25;

        return (
            <form onSubmit={handleSubmit} className={`${className} checkout-form`}>
                <div className='checkout-form__legend'>
                    <div className='checkout-form__legend__name'>Name</div>
                    <div className='checkout-form__legend__quantity'>Quantity</div>
                    <div className='checkout-form__legend__price'>Price</div>
                </div>

                <CheckoutProducts className='checkout-form__products'/>

                <div className='checkout-form__line'></div>

                <Field className='checkout-form__proceed'
                    onClick={() => history.push('./information/shipping')}
                    type='submit'
                    title='Proceed to Checkout'
                    name='proceed'
                    component={FormButton}/>
                <Field className='checkout-form__back'
                    onClick={() => history.push('/shop')}
                    type='button'
                    title='Back'
                    name='back'
                    short={true}
                    component={FormButton}/>
                <div className='checkout-form__details checkout-details'>
                    <div className='checkout-details__subtotal checkout-detail'>
                        <div className='checkout-details__title'>Subtotal</div>
                        <div className='checkout-details__price'>${subtotal}</div>
                    </div>
                    <div className='checkout-details__subtotal checkout-detail'>
                        <div className='checkout-details__title'>Tax</div>
                        <div className='checkout-details__price'>${tax}</div>
                    </div>
                    <div className='checkout-details__subtotal checkout-detail'>
                        <div className='checkout-details__title'>Shipping</div>
                        <div className='checkout-details__price'>$0.00</div>
                    </div>
                    <div className='checkout-details__subtotal checkout-detail checkout-detail-green'>
                        <div className='checkout-details__title checkout-detail-green__total'>Total</div>
                        <div className='checkout-details__price checkout-detail-green__price'>${subtotal + tax}</div>
                    </div>
                </div>
            </form>
        )
    }
}

CheckoutForm = reduxForm({
    form: 'CheckoutForm'
})(CheckoutForm);

export default CheckoutForm;