import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import { SplList } from '../data/spllist';
import Pizza from './Pizza';

const Splitem = (props) => {
  let pizzas = Object.keys(SplList).map( key => {
    return <Pizza
              key={key}
              details={SplList[key]}
              addToOrder={props.addToOrder}
              index={key}
            />
  });
  return (
      <Grid stackable columns={3}>
        {pizzas}
      </Grid>
  );
}

Splitem.propTypes = {
  addToOrder: PropTypes.func.isRequired
};

export default Splitem;
