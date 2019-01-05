import React from 'react'
import PropTypes from 'prop-types'
import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'
import pic04 from '../images/pic04.jpg'
class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="Hamburguesas" className={`${this.props.article === 'Hamburguesas' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Hamburguesas</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <h3>Fatboy</h3>
          <p>Con Papas: $60 | Sin Papas: $45</p>
          <p>
            <ul>
               <li>Carne</li>
               <li>Tocino</li>
               <li>Catsup</li>
               <li>Lechuga</li>
               <li>Jitomate</li>
               <li>Cebolla</li>
               <li>Pepinillos</li>
               <li>Aderezos</li>
            </ul>
          </p>
          <h3>California Sencilla</h3>
          <p>Con Papas: $50 | Sin Papas: $35</p>
          <p>
            <ul>
               <li>Carne</li>
               <li>Queso Amarillo</li>
               <li>Lechuga</li>
               <li>Jitomate</li>
               <li>Cebolla</li>
               <li>Aderezo</li>
            </ul>
          </p>
          <h3>California Especial</h3>
          <p>Con Papas: $70 | Sin Papas: $35</p>
          <p>
            <ul>
               <li>Doble Carne</li>
               <li>Quesos</li>
               <li>Tocino</li>
               <li>Chorizo</li>
               <li>Lechuga</li>
               <li>Jitomate</li>
               <li>Cebolla</li>
               <li>Pepinillos</li>
               <li>Aderezo</li>
            </ul>
          </p>
          <h3>California C/Tocino y Jamon</h3>
          <p>Con Papas: $55 | Sin Papas: $42</p>
          <p>
            <ul>
               <li>Queso Amarillo</li>
               <li>Lechuga</li>
               <li>Jitomate</li>
               <li>Cebolla</li>
               <li>Aderezo</li>
            </ul>
          </p>
          <h3>California C/Tocino, Queso y Guacamole</h3>
          <p>Con Papas: $55 | Sin Papas: $42</p>
          <p>
            <ul>
               <li>Queso Amarillo</li>
               <li>Lechuga</li>
               <li>Jitomate</li>
               <li>Cebolla</li>
               <li>Aderezo</li>
            </ul>
          </p>
          <h3>Hamburguesa De Pollo</h3>
          <p>Con Papas: $60 | Sin Papas: $42</p>
          <p>
            <ul>
               <li>Pechuga De Pollo</li>
               <li>Jamon</li>
               <li>Queso</li>
               <li>Lechuga</li>
               <li>Jitomate</li>
               <li>Cebolla</li>
               <li>Aderezo</li>
            </ul>
          </p>
          {close}
        </article>


        <article id="Sandwich" className={`${this.props.article === 'Sandwich' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Sandwich Club</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          
            <h3>Hamburguesa Club</h3>
          <p>$55</p>
          <p>
            <ul>
               <li>Carne De Hamburguesa</li>
               <li>Tocino</li>
               <li>Queso Amarillo</li>
               <li>Lechuga</li>
               <li>Jitomate</li>
               <li>Mayonesa</li>
               <li>Papas</li>
            </ul>
          </p>
        <h3>Sandwich Club A La Plancha</h3>
          <p>$60</p>
          <p>
            <ul>
               <li>Pechuga De Pollo</li>
               <li>Tocino</li>
               <li>Queso</li>
               <li>Lechuga</li>
               <li>Jitomate</li>
               <li>Mayonesa</li>
               <li>Papas</li>
            </ul>
          </p>

        <h3>Sandwich Club Clasico</h3>
          <p>$55</p>
          <p>
            <ul>
               <li>Jamon De Pavo</li>
               <li>Tocino</li>
               <li>Queso</li>
               <li>Lechuga</li>
               <li>Jitomate</li>
               <li>Mayonesa</li>
               <li>Papas</li>
            </ul>
          </p>
          {close}
        </article>

        <article id="Tortas" className={`${this.props.article === 'Tortas' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Tortas Calientes</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <h3>Lomo</h3>
          <p>$25</p>
          <p>
            <ul>
               <li>Lomo</li>
               <li>Aguacate</li>
               <li>Jitomate</li>
               <li>Cebolla</li>
               <li>Crema y Salsa</li>
            </ul>
          </p>
          <h3>Bisteck</h3>
          <p>$25</p>
          <p>
            <ul>
               <li>Bisteck</li>
               <li>Queso Asadero</li>
               <li>Mayonesa</li>
               <li>Lechuga</li>
               <li>Cebolla</li>
               <li>Aguacate</li>
               <li>Jitomate</li>
            </ul>
          </p>       
          <h3>Jamon</h3>
          <p>$22</p>
          <p>
            <ul>
               <li>Jamon</li>
               <li>Queso Amarillo</li>
               <li>Mayonesa</li>
               <li>Lechuga</li>
               <li>Aguacate</li>
               <li>Jitomate</li>
               <li>Chile En Vinagre</li>
            </ul>
          </p>
          {close}
        </article>

        <article id="Tostadas" className={`${this.props.article === 'Tostadas' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Tostadas, Hotdogs, Snacks</h2>
          <span className="image main"><img src={pic04} alt="" /></span>

        
<h2>Tostadas</h2>
        <h3>Bisteck</h3>
          <p>$14</p>
          <p>
            <ul>
               <li>Bisteck</li>
               <li>Repollo</li>
               <li>Jitomate</li>
               <li>Cebolla</li>
               <li>Crema y Salsa</li>
            </ul>
          </p>
          <h3>Lomo</h3>
          <p>$13</p>
          <p>
            <ul>
               <li>Lomo</li>
               <li>Repollo</li>
               <li>Jitomate</li>
               <li>Cebolla</li>
               <li>Crema y Salsa</li>
            </ul>
          </p>

<h2>Hotdogs</h2>
    <h3>Queso Con Tocino</h3>
          <p>$20</p>
          <p>
            <ul>
               <li>Mostaza</li>
               <li>Catsup</li>
               <li>Jitomate</li>
               <li>Cebolla</li>
            </ul>
          </p>

    <h3>Guacamole y Pico De Gallo</h3>
          <p>$20</p>
          <p>
            <ul>
               <li>Mostaza</li>
               <li>Catsup</li>
               <li>Jitomate</li>
               <li>Cebolla</li>
            </ul>
          </p>

<h2>Snaks</h2>

    <h3>Salchi Papas</h3>
          <p>$35</p>
    <h3>Chiken Nuguets</h3>
        <p>$35</p>
    <h3> Orden De Papas</h3>
          <p>$20</p>

    <h3>Hamburguesa Para Niños</h3>
          <p>$35</p>
          <p>
            <ul>
               <li>Carne</li>
               <li>Queso</li>
               <li>Mayonesa</li>
               <li>Catsup</li>
               <li>Jitomate</li>
            </ul>
          </p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main