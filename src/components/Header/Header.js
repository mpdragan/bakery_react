import React, { useState } from 'react'
import Order from '../Order';

const showOrders = (props) =>{
  let sum=0;
  props.orders.forEach(el => sum += Number.parseFloat(el.price))
   return(
     <div >
       {
         props.orders.map(el => (
           <Order onDelete={props.onDelete} key={el.id} order={el} count={props.count} />
         ))
       }
       <p className='sum'>Сумма: {sum} грн.</p>

       <div className="open-cart">Перейти до кошику</div>
     </div>
   )
}

const showNothing = () => {
  return (
    <div className='empty'>
      <h3>Кошик пустий</h3>
    </div>
  )
}



function Header(props) {
  let [cartOpen, setCartOpen] = useState(false)

  return (
    <header>
      <div className="container">
        <div className="header__up">
          <div className="header__up-logo">
            Міні-пекарня -M-P-D-
          </div>
          <div className="header__up-phone">
            +38 (097) 916 03 84
          </div>
          <div className="header__up-cart">
            <a onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`header__up-cart-a ${cartOpen && 'active'}`} href="#">Кошик</a>

            {cartOpen && (
                <div className='block-cart'>
                  {
                  //props.orders.map(el => (
                  //  <Order key={el.id} order={el}/>
                  //))
                  props.orders.length > 0 ?
                     showOrders(props) : showNothing()
                }
                </div>
            )}
          </div>
        </div>

        <div className="header__first">
          <div className="header__first-wrap">
            <h1 className="header__title">
              Додаток замовлення продуктів харчування із власної міні-пекарні
              Максима Драгана
            </h1>

            <p className="header__subtitle">
              "Замовляйте у нас свіжеспечену, духм'яну та унікальну випічку за
              власними рецептами"
            </p>
          </div>
          <div className="header__first-img">
            <img src="./img/first.jpg" alt="first" />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
