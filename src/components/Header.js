import React from 'react'
import PropTypes from 'prop-types'
import pic01 from '../images/pic01.jpg'
import burger from '../images/burger.png'
import hamburgesa1 from '../images/hamburgesa.png'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <img src={burger} alt="" />
        </div>

        <div className="content">
        
            <div className="inner">
                <h1>Fatboy Hamburgers</h1>
                  <span className="image main"><img src={hamburgesa1} alt="" /></span>
        <h3>Tenemos ricas hamburguesas!</h3>
               <p>Haga clic en el menú de abajo para ver nuestros precios.
                   </p>

            

            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('Hamburguesas')}}>Hamburguesas</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('Sandwich')}}>Sandwich Club</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('Tortas')}}>Tortas Calientes</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('Tostadas')}}>Tostadas y Mas</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
