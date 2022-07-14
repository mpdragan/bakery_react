import React, { Component } from 'react'

export class Product extends Component {
    render() {
        return (
            
            <div className="product">
                <div className="product__img">
                    <img src={"./img/" + this.props.product.img} alt="{this.props.product.title}" />
                </div>
                <h4 className="product__title">{this.props.product.title}</h4>
                <h5 className="product__subtitle">{this.props.product.desc}</h5>
                <div className="product__wrap">
                  <div className="product__wrap-price">
                        {this.props.product.price} грн.
                  </div>
                  <div className="product__wrap-addcart">
                    <a onClick={() => this.props.onAdd(this.props.product)} href="#">Добавити в кошик</a>
                  </div>
                </div>
              </div>
        )
    }
}

export default Product;