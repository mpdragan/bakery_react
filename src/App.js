import React from 'react'
import './App.css';
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Products from "./components/Products"
import Footer from "./components/Footer/Footer"
import Categories from './components/Categories';

class App extends React.Component {
  constructor(props){
    super(props),
    this.state = {
      
      count:'0',
      orders:[],
      currentProducts:[],
      products: [
        {
          id: 1,
          title: 'Хліб',
          img: 'bread.jpg',
          desc: 'За власним рецептом',
          category: 'bread',
          price: '15'
        },
        {
          id: 2,
          title: 'Печиво',
          img: 'cookie.jpg',
          desc: 'Хрустке печиво',
          category: 'zdoba',
          price: '55'
        },
        {
          id: 3,
          title: 'Десерт із морозива',
          img: 'icecream.jpg',
          desc: 'Смак як у дитинстві',
          category: 'torts',
          price: '45'
        },
        {
          id: 4,
          title: 'Тістечко',
          img: 'cake.jpg',
          desc: 'З шоколадною начинкою',
          price: '25'
        },
        {
          id: 5,
          title: 'Чізкейк',
          img: 'cheesecake.jpg',
          desc: 'Пудінгова основа',
          category: 'torts',
          price: '60'
        },
        {
          id: 6,
          title: 'Пончики',
          img: 'donuts.jpg',
          desc: 'Смачні пончики',
          category: 'zdoba',
          price: '33'
        }
      ]
    }
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.state.currentProducts = this.state.products
  }
  render(){
  return (
    <div className="App">

      <Header orders={this.state.orders} onDelete={this.deleteOrder} count = {this.count}/>

      <section className="main">
        <div className="container">
          <div className="main-wrap">
            <div className="shops">
              <h3>Магазини пекарні</h3>
              <ul className="shops__menu">
                <li><a href="#">Магазин "Mak"</a></li>
                <li><a href="#">Магазин "Mik"</a></li>
              </ul>
            </div>

            

            <Products products={this.state.currentProducts} onAdd={this.addToOrder} chooseCategory={this.chooseCategory} />

          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
  }

  addToOrder(product){
    let isInArray = false
    //let count = 1
    this.state.orders.forEach(el => {
      if (el.id === product.id)
         isInArray = true
    })
    if (!isInArray)
      this.setState({ orders: [...this.state.orders, product]})
      this.state.count += this.state.count
  }

  deleteOrder(id){
    this.setState({ orders: this.state.orders.filter(el => el.id !== id)})
  }

  chooseCategory(category){
      if (category === 'all'){
        this.setState({currentProducts:this.state.products})
        return
      }
      this.setState({
        currentProducts: this.state.products.filter(el => el.category === category)
      })
  }
}

export default App;
