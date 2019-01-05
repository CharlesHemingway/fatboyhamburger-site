import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
   		

                <p>
                Porfirio Diaz 308, entre Aldama y Jiménez, Col. Centro, Rioverde, S.L.P 
                 - 01 487 147 3027
                  - 5pm - 12pm
                </p>

    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
