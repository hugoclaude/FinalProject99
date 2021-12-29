import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../actions';

import PageTitle from '../pageTitle';
import CheckoutForm from './checkoutForm';

class Checkout extends Component {

    componentDidMount() {
        this.props.setHeaderLinks([]);
        this.props.setNavbarLinks([]);
    }

    onSubmit = (fields) => {
        console.log('fields');
    }

    render () {
        let subtotal= 0;
        this.props.cartProducts.map(cartProduct => {
            subtotal += cartProduct.quantity * cartProduct.product.price;
        })
        return (
            <div className='checkout'>
                <PageTitle className='checkout__page-title' title='Order Checkout'/>
                <CheckoutForm className='checkout__form' onSubmit={this.onSubmit} subtotal={subtotal}/>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { cartProducts } = state.user;
    return { cartProducts }
}

Checkout = connect(mapStateToProps, actions)(Checkout);

export default Checkout;