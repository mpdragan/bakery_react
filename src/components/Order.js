import React, { Component } from 'react'

export class Order extends Component {
    render() {
        return (
            <div class="order">
                <div className="order__img">
                    <img src={"./img/" + this.props.order.img} alt="{this.props.order.title}" />
                </div>
                <h4 className="order__title">{this.props.order.title}</h4>
                <div className="order__wrap-price">{this.props.order.price}</div>
                <div className="order__numder">{this.props.count}</div>
                <div className="order__delete"><a onClick={() => this.props.onDelete(this.props.order.id)} href='#'>Видалити</a></div>
                
            </div>
        )
    }
}

export default Order;