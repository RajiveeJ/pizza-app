import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from 'semantic-ui-react';
import { SplList } from '../data/spllist';
import Splpizza from './Splpizza';

const Splitem = (props) => {
  let pizzas = Object.keys(SplList).map( key => {
    return <Splpizza
              key={key}
              details={SplList[key]}
              addToItem={props.addToOrder}
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
  addToItem: PropTypes.func.isRequired
};

export default Splitem;
