import React, { Component } from 'react';
import DefaultLayout from '../layouts/DefaultLayout';
import OrdersTable from '../components/OrdersTable';
import { connect } from 'react-redux';
import InputWrapper from '../components/Input';
import { fields } from '../helpers/shipping';

class Account extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.customer && this.props.customer.customer_id) {
      this.props.getAllOrders(this.props.customer.customer_id)
    }
  }

  updateProfile = () => {
    console.log('I got called')
  }

  render() {
    const { orders} = this.props;
    console.log(this.props.customer)
    return (
      <DefaultLayout>
        <div className="container mt-4">
          <div className="row">
            <div className="col-6">
              {
                fields.map((field, i) => {
                  return (
                    <InputWrapper key={i}>
                      <input placeholder={field.placeHolder} type={field.type} onChange={this.onChange} name={field.name} />
                    </InputWrapper>
                  )
                })
              }
              <button className="btn mt-3" onClick={this.updateProfile}>UPDATE PROFILE</button>
            </div>
            <div className="col-6"><OrdersTable orders={orders} /></div>
          </div>
        </div>
      </DefaultLayout>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    orders: state.order.orders,
    customer: state.customer.customer
  };
}

const mapDispatchToProps = (dispatch) => {
  return ({
    getAllOrders: (customerId) => dispatch({ type: 'GET_ALL_CUSTOMER_ORDERS', customerId }),
  });
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);