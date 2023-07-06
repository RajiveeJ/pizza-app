import React, { Fragment } from 'react';
import { Link  } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Header, Container, Button } from 'semantic-ui-react';

import NavBar from './NavBar';
import Footer from './Footer';
import Splitem from './Splitem';
import PizzaContainer from './PizzaContainer';


const Menu = (props) => (
   
  <Fragment>
    <NavBar order={props.order} orderTotal={props.orderTotal}>
      {props.orderTotal > 0 && <Button as={Link} to='/cart' color='teal' id='menu-checkout-btn'>Checkout</Button>}
    </NavBar>
    <Container id='page-container'>
      <Header as='h1' id='page-header'>Pizza Selection</Header>
      <Container textAlign='center' id='menu-free-banner'>
        <p id='menu-banner-text'>Free delivery for orders over Rs.1000</p>
      </Container>
      <Container id='menu-pizza-container'>
          <PizzaContainer addToOrder={props.addToOrder} />
          <Splitem addToItem={props.addToItem}/>
      </Container>
     
      
    </Container>
    <Footer />
  </Fragment>
);

Menu.propTypes = {
  order: PropTypes.array,
   item: PropTypes.array,
  orderTotal: PropTypes.number,
  addToOrder: PropTypes.func.isRequired,
  addToItem: PropTypes.func.isRequired
};

export default Menu;
