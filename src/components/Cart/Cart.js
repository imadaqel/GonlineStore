import React from "react";
import { connect } from "react-redux";
import { removeFromCart } from "../../store/actions/actions";

function Cart(props) {
  const { cartItems, removeFromCart, total } = props;
  return (
    <main>
      <section>
        <div className="banner-innerpage">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-6 align-self-center text-center">
                <h1 className="title">Cart Listing</h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="spacer">
          <div className="container">
            <div className="row mt-5">
              <div className="col-lg-9">
                <div className="row shop-listing">
                  <table className="table shop-table">
                    <tr>
                      <th className="b-0">Product</th>
                      <th className="b-0">Price</th>
                      <th className="b-0">Quantity</th>
                      <th className="b-0 text-right"></th>
                    </tr>
                    {cartItems.map(({ product, quantity }, index) => (
                      <tr>
                        <td>{product.title}</td>
                        <td>{product.price}</td>
                        <td>{quantity}</td>
                        {/* <td className="text-right">{quantity} </td> */}
                        <td>
                          <button
                            onClick={() => removeFromCart(index)}
                            className="btn btn-danger btn-sm"
                          >
                            delete
                          </button>
                        </td>
                      </tr>
                    ))}
                    <tr>
                      <td colSpan="4" align="right">
                        <h5 className="font-medium m-b-30">
                          Total Price : {total}
                        </h5>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const mapStateToProps = (state) => {
  return {
    cartItems: state.cart,
    total: state.cart.reduce(
      (total, item) => total + item.quantity * item.product.price,
      0
    ),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (index) => dispatch(removeFromCart(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
