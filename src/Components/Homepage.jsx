import React, { useEffect, useState } from "react";
import "./Styles/Homepage.css";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import img1 from "./Images/Img-1.png";
import img2 from "./Images/Img-2.png";
import img3 from "./Images/Img-3.png";
import all from "./Images/Group 12028.png";
import menu1 from "./Images/Group 12026.png";
import menu2 from "./Images/Group 12029.png";
import menu3 from "./Images/Group 12030.png";
import menu4 from "./Images/Group 12031.png";
import upArr from "./Images/Up-arr-icon.png";
import product from "./Images/Product.png";
import thumbsup from "./Images/Thumbsup.png";
import stars from "./Images/Stars.png";
import msg from "./Images/Message.png";

export const Homepage = () => {
  const [data, setData] = useState([]);
  const [showdata, setShowdata] = useState([]);
  const [page, setPage] = useState(1);
  const [size, setSize] = useState(5);

  useEffect(() => {
    fetch(`http://localhost:7890/products?_limit=${size}&_page=${page}`)
      .then((res) => res.json())
      //   .then((res) => console.log(res))
      .then((res) => {
        setData(res);
        setShowdata(res);
      })
      .catch((err) => console.log(err));
  }, [page, size]);

  return (
    <div>
      <Navbar />
      <div className="container">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
      </div>
      <div className="btns">
        <button
          onClick={() => {
            setPage(1);
            setSize(20);
          }}
        >
          <img src={all} alt="" className="all-btn" />
        </button>
        <button
          onClick={() => {
            setPage(1);
            setSize(5);
          }}
        >
          <img src={menu1} alt="" />
        </button>
        <button
          onClick={() => {
            setPage(2);
            setSize(5);
          }}
        >
          <img src={menu2} alt="" />
        </button>
        <button
          onClick={() => {
            setPage(3);
            setSize(5);
          }}
        >
          <img src={menu3} alt="" />
        </button>
        <button
          onClick={() => {
            setPage(4);
            setSize(5);
          }}
        >
          <img src={menu4} alt="" />
        </button>
        <div className="uparr">
          <img src={upArr} alt="" />
        </div>
      </div>
      <div className="showproducts">
        {data.map((e) => (
          <div className="products" key={e._id}>
            <img src={product} alt="" className="pro-img" />
            <div className="details">
              <h1>{e.name}</h1>
              <div className="company">
                <p>By&#160;</p>
                <p>
                  <h4> {e.company}</h4>
                </p>
              </div>
              <br />
              <br />
              <p className="des1">{e.description1}</p>
              <div className="company1">
                <p>{e.description2}&#160;</p>
                <p>
                  <h4>{e.read}</h4>
                </p>
              </div>
              <br />
              <img src={stars} alt="" className="stars" />
              <div className="price-details">
                <p>
                  <h2>{e.price} </h2>
                </p>
                <p>
                {e.currency}
                </p>
                <img src={thumbsup} alt="" className="thumbsup" />
                <img src={msg} alt="" className="msg" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};
