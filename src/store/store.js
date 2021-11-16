import { createStore } from "redux";
import cartReduer from "./reducers";

const initialState = {
  cart: [
    {
      product: {
        category: "men's clothing",
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        id: 1,
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        price: 109.95,
        rating: { rate: 3.9, count: 120 },
        title: "asdasdsdasdasdasdsdsasd",
      },
      quantity: 5,
    },
  ],
};
const store = createStore(cartReduer, initialState);

export default store;
