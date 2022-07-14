import React, {Component} from 'react'
import Categories from './Categories';
import Product from "./Product"

export class Products extends Component{
    render(){
        return(
            <div className="catalog">
                <h3>Каталог продуктів</h3>

                <Categories chooseCategory={this.props.chooseCategory} />

                <div className="products-wrap">
                {this.props.products.map(el => (
                    //<h1>{el.title}</h1>
                    <Product key={el.id} product={el} onAdd={this.props.onAdd} />
                ))}
                </div>
            </div>
        )
    }
}

export default Products;