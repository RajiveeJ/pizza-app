import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {StripeProvider} from 'react-stripe-elements';
import { PizzaList } from '../data/pizzas';
import {SplList } from '../data/spllist';
import { sampleCustomer } from '../data/sampleCustomer';


import Home from './Home';
import Menu from './Menu';
import Additem from './Additem';
import Cart from './Cart';
import Checkout from './Checkout';
import Confirmation from './Confirmation';

class App extends Component {

  state = {
    order: [],
    item: [],
    orderTotal: 0,
    checkoutTotal: 0,
    postcode:'',
    customer: {
      firstName: '',
      lastName: '',
      email: '',
      contactNum: '',
      address: '',
    }
  }

  componentDidMount(){
    const localStorageOrder = localStorage.getItem('order');
    const localStorageOrderAmount = localStorage.getItem('orderAmount');
    const localStorageTotal = localStorage.getItem('total');
    const localStorageCustomerDetails = localStorage.getItem('customerDetails');
    if(localStorageOrder) {
      this.setState({
        order: JSON.parse(localStorageOrder),
        orderTotal: JSON.parse(localStorageOrderAmount),
        checkoutTotal: JSON.parse(localStorageTotal),
        customer: JSON.parse(localStorageCustomerDetails)
      });
    }
  }

  componentDidUpdate(){
    localStorage.setItem('order', JSON.stringify(this.state.order));
    localStorage.setItem('orderAmount', JSON.stringify(this.state.orderTotal));
    localStorage.setItem('total', JSON.stringify(this.state.checkoutTotal));
    localStorage.setItem('customerDetails', JSON.stringify(this.state.customer));
  }

  addToOrder = (key) => {
    const order = { ...this.state.order};
    order[key] = order[key] + 1 || 1;
    const newTotal = this.state.orderTotal + PizzaList[key].price;

    this.setState({
      order: order,
      orderTotal: newTotal
    });
  }

  addToItem = (key) => {
    const item = { ...this.state.item};
    item[key] = item[key] + 1 || 1;
    const newTotal = this.state.orderTotal + SplList[key].price;

    this.setState({
      item: item,
      orderTotal: newTotal
    });
  }

  removeFromOrder = (key) => {
    const order = { ...this.state.order};
    order[key] = order[key] - 1;
    let newTotal = this.state.orderTotal - (PizzaList[key].price);

    if(order[key] === 0) {
      newTotal = this.state.orderTotal - PizzaList[key].price;
      delete order[key];
    }

    this.setState({
      order: order,
      orderTotal: newTotal
    });
  }

  removeFromItem = (key) => {
    const item = { ...this.state.item};
    item[key] = item[key] - 1;
    let newTotal = this.state.orderTotal - (SplList[key].price);

    if(item[key] === 0) {
      newTotal = this.state.orderTotal - SplList[key].price;
      delete item[key];
    }

    this.setState({
      item: item,
      orderTotal: newTotal
    });
  }

  updateCheckoutTotal = (newTotal) => {
    this.setState({
      checkoutTotal: newTotal
    });
  }

  updateCustomerDetails = (updatedCustomerDetails) => {
    let customerDetails = {...this.state.customer};
    customerDetails = updatedCustomerDetails;
    this.setState({
      customer: customerDetails
    });
  }

  updatePostcode = (newPostcode) => {
    this.setState({
      postcode: newPostcode
    });
  }

  loadSampleCustomer = () => {
    this.setState({ customer: sampleCustomer })
  }

  clearState = () => {
    this.setState({
      order: [],
      orderTotal: 0,
      checkoutTotal: 0,
      postcode:'',
      customer: {
        firstName: '',
        lastName: '',
        email: '',
        contactNum: '',
        address: '',
    }
  });
}

  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Switch>
            <Route exact path='/' render={ (props) =>
              <Home {...props}
              updatePostcode={this.updatePostcode} /> } />
            <Route exact path='/menu' render={ (props) =>
              <Menu {...props}
                orderTotal={this.state.orderTotal}
                addToOrder={this.addToOrder}
                addToItem={this.addToItem}
                removeFromItem={this.removeFromItem}
                order={this.state.order} /> } />
            <Route exact path='/additem' render={ (props) =>
              <Additem {...props}
                orderTotal={this.state.orderTotal}
                addToItem={this.addToItem}
                order={this.state.order} /> } />
            <Route exact path='/cart' render={ (props) =>
              <Cart {...props}
                orderTotal={this.state.orderTotal}
                addToOrder={this.addToOrder}
                removeFromOrder={this.removeFromOrder}
                order={this.state.order}
                updateCheckoutTotal={this.updateCheckoutTotal} /> } />
            <Route exact path='/checkout' render={ (props) =>
              <StripeProvider apiKey='pk_test_12345'>
                <Checkout {...props}
                  orderTotal={this.state.orderTotal}
                  customerDetails={this.state.customer}
                  checkoutTotal={this.state.checkoutTotal}
                  updateCustomerDetails={this.updateCustomerDetails}
                  loadSampleCustomer={this.loadSampleCustomer} />
              </StripeProvider> }
            />
          <Route exact path='/confirmed' render={ (props) =>
              <Confirmation {...props}
                customerDetails={this.state.customer}
                clearState={this.clearState}
                />
              }
          />
            </Switch>
          </Fragment>
        </BrowserRouter>
    );
  }
}

export default App;
