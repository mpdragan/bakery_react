import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props){
        super(props)
        this.state = {
            categories: [
                {
                    key: 'all',
                    name: 'Усі'
                },
                {
                    key: 'bread',
                    name: 'Хлібобулочні_вироби'
                },
                {
                    key: 'burgers',
                    name: 'Бургери'
                },
                {
                    key: 'pizza',
                    name: 'Піца'
                },
                {
                    key: 'zdoba',
                    name: 'Здобна_випічка'
                },
                {
                    key: 'torts',
                    name: 'Торти'
                },
                {
                    key: 'drinks',
                    name: 'Напої'
                },
            ]
        }
    }
    render() {
        return (
            <div className="categories">
                {this.state.categories.map(el => (
                    <div className="categories__menu" key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
                ))}
                
            </div>
        )
    }
}

export default Categories;