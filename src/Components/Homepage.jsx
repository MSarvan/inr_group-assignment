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
  }, [page]);

  return (
    <div>
      <Navbar />
      <div className="container">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img3} alt="" />
      </div>
      <div className="btns">
        <button onClick={() => setSize(20)}>
          <img src={all} alt="" className="all-btn" />
        </button>
        <button onClick={() => setPage(1)}>
          <img src={menu1} alt="" />
        </button>
        <button onClick={() => setPage(2)}>
          <img src={menu2} alt="" />
        </button>
        <button onClick={() => setPage(3)}>
          <img src={menu3} alt="" />
        </button>
        <button onClick={() => setPage(4)}>
          <img src={menu4} alt="" />
        </button>
        <div className="uparr">
          <img src={upArr} alt="" />
        </div>
      </div>
      <div className="showproducts">
        {data.map((e) => (
          <div className="products" key={e._id}>
            <img src={e.proimage} alt="" className="pro-img" />
            <div>
              <h3>{e.name}</h3>
              <p>
                <span>By </span>
                <span>
                  <h4>{e.company}</h4>
                </span>
              </p>
              <br />
              <p>{e.description1}</p>
              <p>
                <span>{e.description2}</span>
                <span>
                  <h4>{e.read}</h4>
                </span>
              </p>
              <br />
              <img src={e.stars} alt="" />
              <div className="price-details">
                <p>
                  <span>
                    <h3>{e.price} </h3>
                  </span>
                  <span>{e.currency}</span>
                </p>
                <img src={e.thumbsup} alt="" />
                <img src={e.message} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </div>
  );
};
