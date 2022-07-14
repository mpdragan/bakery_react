import React from 'react'

export function Main() {
    return (
        <section class="main">
            <div class="container">
                <div class="main-wrap">
                    <div class="shops">
                        <h3>Магазини пекарні</h3>
                        <ul class="shops__menu">
                            <li><a href="#">Магазин "Mak"</a></li>
                            <li><a href="#">Магазин "Mik"</a></li>
                        </ul>
                    </div>

                    <div class="catalog">
                        <h3>Каталог продуктів</h3>
                        <ul class="catalog__menu">
                            <li><a href="#">Хлібобулочні вироби</a></li>
                            <li><a href="#">Бургери</a></li>
                            <li><a href="#">Піца</a></li>
                            <li><a href="#">Здобна випічка</a></li>
                            <li><a href="#">Торти</a></li>
                            <li><a href="#">Напої</a></li>
                        </ul>

                        <div class="products-wrap">
                            <div class="product">
                                <div class="product__img">
                                    <img src="img/bread.jpg" alt="bread" />
                                </div>
                                <h4 class="product__title">Хліб</h4>
                                <p class="product__subtitle">За власним рецептом</p>
                                <div class="product__wrap">
                                    <div class="product__wrap-price">
                                        15 грн.
                                    </div>
                                    <div class="product__wrap-addcart">
                                        <a href="/cart.html">Добавити в кошик</a>
                                    </div>
                                </div>
                            </div>

                            <div class="product">
                                <div class="product__img">
                                    <img src="img/cookie.jpg" alt="cookie" />
                                </div>
                                <h4 class="product__title">Печиво</h4>
                                <h5 class="product__subtitle">Хрустке печиво</h5>
                                <div class="product__wrap">
                                    <div class="product__wrap-price">
                                        55 грн.
                                    </div>
                                    <div class="product__wrap-addcart">
                                        <a href="/cart.html">Добавити в кошик</a>
                                    </div>
                                </div>
                            </div>

                            <div class="product">
                                <div class="product__img">
                                    <img src="img/icecream.jpg" alt="icecream" />
                                </div>
                                <h4 class="product__title">Десерт із морозива</h4>
                                <h5 class="product__subtitle">Смак як у дитинстві</h5>
                                <div class="product__wrap">
                                    <div class="product__wrap-price">
                                        45 грн.
                                    </div>
                                    <div class="product__wrap-addcart">
                                        <a href="/cart.html">Добавити в кошик</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="products-wrap">
                            <div class="product">
                                <div class="product__img">
                                    <img src="img/cake.jpg" alt="cake" />
                                </div>
                                <h4 class="product__title">Тістечко</h4>
                                <h5 class="product__subtitle">З шоколадною начинкою</h5>
                                <div class="product__wrap">
                                    <div class="product__wrap-price">
                                        25 грн.
                                    </div>
                                    <div class="product__wrap-addcart">
                                        <a href="/cart.html">Добавити в кошик</a>
                                    </div>
                                </div>
                            </div>

                            <div class="product">
                                <div class="product__img">
                                    <img src="img/cheesecake.jpg" alt="cheesecake" />
                                </div>
                                <h4 class="product__title">Чізкейк</h4>
                                <h5 class="product__subtitle">Пудінгова основа</h5>
                                <div class="product__wrap">
                                    <div class="product__wrap-price">
                                        60 грн.
                                    </div>
                                    <div class="product__wrap-addcart">
                                        <a href="/cart.html">Добавити в кошик</a>
                                    </div>
                                </div>
                            </div>

                            <div class="product">
                                <div class="product__img">
                                    <img src="img/donuts.jpg" alt="donuts" />
                                </div>
                                <h4 class="product__title">Пончики</h4>
                                <h5 class="product__subtitle">Смачні пончики</h5>
                                <div class="product__wrap">
                                    <div class="product__wrap-price">
                                        33 грн.
                                    </div>
                                    <div class="product__wrap-addcart">
                                        <a href="/cart.html">Добавити в кошик</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Main;
