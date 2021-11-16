import React, { useState, useEffect } from "react";
import "./ProductDetails.css";
import { BrowserRouter, useParams } from "react-router-dom";
import { addToCart } from "../../store/actions/actions";
import { connect } from "react-redux";

interface IProduct {
  price: number;
  description: string;
  id: number;
  image: string;
  category: string;
  title: string;
}
function ProductDetails(props: any) {
  const { id }: any = useParams();
  const [quantity, setQuantity] = useState(0);
  const [ProductDetails, setProductDetails] = useState<IProduct>({
    title: "",
    price: 0,
    description: "",
    id: 0,
    image: "",
    category: "",
  });

  const getProductDetails = (id: number) => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((jsonProductDetails) => {
        setProductDetails(jsonProductDetails);
      });
  };
  useEffect(() => {
    getProductDetails(id);
  }, []);

  const handleQuantity = (event: any) => {
    const value = event.target.value;
    setQuantity(value);
  };
  return (
    <>
      <BrowserRouter>
        <section className="product">
          <section className="product-container">
            <section className="product-content">
              <div key={ProductDetails.id} className="productCard">
                <div className="productCard-container">
                  <h5 className="productCard-title">{ProductDetails.title}</h5>
                  <h6 style={{ color: "blue" }}>{ProductDetails.category}</h6>
                  <div className="productCard-description">
                    {ProductDetails.description}.
                  </div>
                  <div className="productInput">
                    <h5>Price: {ProductDetails.price} $</h5>
                    <input
                      className="form-control"
                      aria-label="Small"
                      aria-describedby="inputGroup-sizing-sm"
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={handleQuantity}
                    />
                    <button
                      className="btn btn-primary btn-sm"
                      onClick={() => props.addToCart(ProductDetails, quantity)}
                    >
                      {" "}
                      addToCart
                    </button>
                  </div>
                </div>
                <div>
                  <div className="productDesc-container">
                    <div className="productImg-container">
                      <img
                        className="productImg"
                        src={ProductDetails.image}
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </section>
      </BrowserRouter>
    </>
  );
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    addToCart: (productsInfo: IProduct, quantity: any) =>
      dispatch(addToCart(productsInfo, quantity)),
  };
};

export default connect(null, mapDispatchToProps)(ProductDetails);
