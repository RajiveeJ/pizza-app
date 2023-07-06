import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Grid, Image, Segment, Icon,Button} from 'semantic-ui-react';
import { SplList } from '../data/spllist';
import { formatPrice } from '../helpers';

class Item extends Component {

  static propTypes = {
    addToItem: PropTypes.func.isRequired,
    
    item: PropTypes.array
  }

  renderItem = (key) => {
    const pizza = SplList[key];
    const count = this.props.item[key];

    return(
      <Segment raised key={key}>
        <Grid>
          <Grid.Row>
            <Grid.Column width={4}>
              <Image src={pizza.image} />
            </Grid.Column>
            <Grid.Column width={12}>
              <p id='order-pizza-name'>{pizza.name}</p>
              <p><strong>{formatPrice(pizza.price)}</strong></p>
              <p>
                <Icon name='minus' circular id="order-minus" onClick={() => this.props.removeFromItem(key)} /> Quantity:{count}
                <Icon name='plus' circular id="order-plus" onClick={() => this.props.addToItem(key)} />
                <Button onClick={() => this.props.addToItem(this.props.index)} color='teal'>Add Item</Button>
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    )
  }

  render(){
    const itemIds = Object.keys(this.props.item);

    return(
      <div>
          {itemIds.map(this.renderItem)}
      </div>
    );
  }
}

export default Item;
