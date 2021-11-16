import Product from "./ProductDetails/ProductDetails";
import React, { lazy, Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Signin from "./Signin/Signin";
import Cart from "./Cart/Cart";
import Nav from "./Nav/Nav";
import store from "../store/store";
import { Provider } from "react-redux";
const LazyProducts = lazy(() => import("./Products/Products"));

export default function Home() {
  const token = localStorage.getItem("accessToken");
  if (!token) {
    return <Signin />;
  }
  return (
    <Provider store={store}>
      <BrowserRouter>
        <>
          <Route component={Nav} />
          <Suspense fallback={<h1>Still Loading…</h1>}>
            <Route exact path="/" component={LazyProducts} />
          </Suspense>
          {/* <Route exact path="/" component={Products} /> */}
          <Route exact path="/product/:id" component={Product} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/cart" component={Cart} />
        </>
      </BrowserRouter>
    </Provider>
  );
}
