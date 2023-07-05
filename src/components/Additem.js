import React, { Fragment } from 'react';

import PropTypes from 'prop-types';
import { Header, Container } from 'semantic-ui-react';

import NavBar from './NavBar';
import Footer from './Footer';
import PizzaContainer from './PizzaContainer';

const Additem = (props) => (
  <Fragment>
    <NavBar order={props.order} orderTotal={props.orderTotal}>
      
    </NavBar>
    <Container id='page-container'>
      <Header as='h1' id='page-header'>Today's Special items</Header>
     
      <Container id='menu-pizza-container'>
          <PizzaContainer addToOrder={props.addToOrder} />
      </Container>
    </Container>
    <Footer />
  </Fragment>
);

Additem.propTypes = {
  order: PropTypes.array,
  orderTotal: PropTypes.number,
  addToOrder: PropTypes.func.isRequired
};

export default Additem;
