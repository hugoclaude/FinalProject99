import React, { Component } from 'react';
import GreenPriceTag from '../greenPriceTag';

class CheckoutProduct extends Component {
    render () {
        const { product, quantity } = this.props;
        const { imageUrl, title, price } = product;
        return (
            <div className='checkout-product'>
                <img className='checkout-product__image' src={imageUrl}/>
                <div className='checkout-product__title'>{title}</div>
                <div className='checkout-product__quantity'>{quantity}</div>
                <GreenPriceTag className='checkout-product__price' title={price * quantity}/>
            </div>
        )
    }
}

export default CheckoutProduct;