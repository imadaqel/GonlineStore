import React from "react";
import "./CartIcon.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function CartIcon(props) {
  return (
    <Link to={`/cart`}>
      <div className="Icon">
        <i className="fa fa-shopping-cart"></i>
        <span>{props.totalQuantity}</span>
      </div>
    </Link>
  );
}
const mapStateToProps = (state) => {
  if (state) {
    return {
      totalQuantity: state.cart.reduce(
        (totalQuantity, item) =>
          parseInt(totalQuantity) + parseInt(item.quantity),
        0
      ),
    };
  }
};
export default connect(mapStateToProps)(CartIcon);
