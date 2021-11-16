import { ADD_TO_CART, Remove_From_CART } from "../actions/types";
import swal from "sweetalert";

export default function cartReducer(state, action) {
  switch (action.type) {
    case ADD_TO_CART: {
      if (action.quantity === 0) {
        swal("You have To Increase The Quantity");
      } else {
        return {
          cart: [
            ...state.cart,
            {
              product: action.productInfo,
              quantity: action.quantity,
            },
          ],
        };
      }
    }
    case Remove_From_CART: {
      const item_index = action.index;
      const new_state = { ...state };
      delete new_state.cart[item_index];
      return new_state;
    }

    default:
      return state;
  }
}
