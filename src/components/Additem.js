import React, { Fragment } from 'react';

import PropTypes from 'prop-types';
import { Header, Container } from 'semantic-ui-react';

import Footer from './Footer';
import Splitem from './Splitem';

const Additem = (props) => (
  <Fragment>
    
      
    
    <Container id='page-container'>
      <Header as='h1' id='page-header'>Today's Special items</Header>
     
      <Container id='menu-pizza-container'>
          <Splitem addToItem={props.addToItem} />
      </Container>
    </Container>
    <Footer />
  </Fragment>
);

Additem.propTypes = {
  item: PropTypes.array,
  orderTotal: PropTypes.number,
  addToItem: PropTypes.func.isRequired
};

export default Additem;
