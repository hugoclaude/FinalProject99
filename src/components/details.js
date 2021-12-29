import React, { Component } from 'react';

class Details extends Component {

    renderChildren = () => {
        const { links, info } = this.props;
        let children = [];
        if(links) {
            children = links.map(link => {
                return <a key={link._id} onClick={link.onClick} className='details__link'>{link.title}</a>
            })
        } else if(info) {
            children = info.map(item => {
                return <a key={item._id} className='details__link'>{item.title}</a>
            })
        }
        return children;
    }
    render () {
        const { className, title } = this.props;
        return (
            <div className={`${className} details`}>
                <div className='details__title'>{title}</div>
                <div className='details__links'></div>
                {
                    this.renderChildren()
                }
            </div>
        )
    }
}

export default Details;