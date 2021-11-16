import "./Products.css";
import React, { useState, useEffect, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function Products() {
  interface IProduct {
    price: number;
    description: string;
    id: number;
    image: string;
    category: string;
    title: string;
  }
  const [AllProducts, setAllProducts] = useState([]);
  const [ProductList, setProductList] = useState([]);

  const getAllProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((jsonProducts) => {
        setAllProducts(jsonProducts);
        setProductList(jsonProducts);
      });
  };

  const getSpecificCategory = (category: string) => {
    fetch(`https://fakestoreapi.com/products/category/${category}`)
      .then((res) => res.json())
      .then((jsonCategory) => {
        setProductList(jsonCategory);
      });
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const handleSearch = (e: any) => {
    var searchedData = AllProducts.filter((item: IProduct) =>
      item.title.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setProductList(searchedData);
  };
  var filteringByCat: string[] = [
    "jewelery",
    "men's clothing",
    "women's clothing",
  ];
  const listItems = filteringByCat.map((item: string, index) => (
    <button
      className="btn btn-secondary btn-sm"
      key={item}
      onClick={() => getSpecificCategory(item)}
    >
      {item}
    </button>
  ));
  return (
    <>
      <section className="products">
        <section className="products-container">
          <h1 className="products-header">Our Products</h1>
          <div className="products-buttons">
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => getAllProducts()}
            >
              All{" "}
            </button>
            {listItems}
            <div>
              <input
                onKeyUp={handleSearch}
                placeholder="search by product name"
              />
            </div>
          </div>
          <section className="products-content">
            {ProductList.map((item: IProduct, index: number) => (
              <Card sx={{ maxWidth: 350 }} key={index}>
                <Link to={`/product/${item.id}`}>
                  <CardMedia
                    component="img"
                    height="140"
                    width="50"
                    image={item.image}
                    alt="green iguana"
                  />
                </Link>
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title.slice(0, 19)}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.price}${" "}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </section>
        </section>
      </section>
    </>
  );
}
