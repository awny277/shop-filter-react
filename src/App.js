import "./App.css";
import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./store/ProductsSlice";
// AiFillStar AiOutlineStar
function App() {
  const [page, setPage] = useState(1);
  // const Protype = useRef(null);
  const [search, setsearch] = useState("");
  const [rate, setRate] = useState([]);
  const [range, setRange] = useState("100");
  const [type, setType] = useState([]);
  const [checkArr, setCheckArr] = useState([]);
  const dispatch = useDispatch();
  const { ProductsArr } = useSelector((state) => state.ProductsSlice);
  useEffect(() => {
    if (ProductsArr.length <= 0) {
      dispatch(getProducts(page));
    }
  }, [dispatch, ProductsArr, page]);

  const typeHandeller = (e) => {
    if (e.target.checked) {
      setType((oldArray) => [...oldArray, e.target.value]);
      setCheckArr((oldArray) => [...oldArray, e.target.value]);
    } else {
      setCheckArr(type.filter((item) => item !== e.target.value));
      setType(type.filter((item) => item !== e.target.value));
    }
  };

  const RateHandeller = (e) => {
    if (e.target.checked) {
      setRate((oldArray) => [...oldArray, e.target.value]);
      setCheckArr((oldArray) => [...oldArray, e.target.value]);
    } else {
      setCheckArr(type.filter((item) => item !== e.target.value));
      setRate(type.filter((item) => item !== e.target.value));
    }
  };
  const Products =
    ProductsArr &&
    checkArr.length > 0 &&
    ProductsArr.filter(
      (ele) =>
        (ele.name.toLowerCase().includes(search.toLowerCase()) &&
          ele.price <= parseInt(range) &&
          type.includes(ele.type) &&
          rate.includes(`${ele.rate}`)) ||
        (ele.name.toLowerCase().includes(search.toLowerCase()) &&
          ele.price <= parseInt(range) &&
          type.includes(ele.type) &&
          !rate.includes(`${ele.rate}`)) ||
        (ele.name.toLowerCase().includes(search.toLowerCase()) &&
          ele.price <= parseInt(range) &&
          rate.includes(`${ele.rate}`) &&
          !type.includes(ele.type))
    )
      // .filter((ele) => rate.includes(`${ele.rate}`))
      .map((ele, idx) => {
        return (
          <div className="col-md-4 item" key={idx}>
            <img className="ProductImage" src={ele.image} alt={ele.name} />
            <h5 className="ProductName">{ele.name}</h5>
            <p className="type">{ele.type}</p>
            <span className="Price"> {ele.price}EGP</span>
            <a className="Details" href="/">
              {" "}
              Details
            </a>
            <p>rate :{ele.rate}</p>
          </div>
        );
      });

  const ALlProduct =
    ProductsArr &&
    checkArr.length <= 0 &&
    ProductsArr.filter(
      (ele) =>
        ele.name.toLowerCase().includes(search.toLowerCase()) &&
        ele.price <= parseInt(range)
    ).map((ele, idx) => {
      return (
        <div className="col-md-4 item" key={idx}>
          <img className="ProductImage" src={ele.image} alt={ele.name} />
          <h5 className="ProductName">{ele.name}</h5>
          <p className="type">{ele.type}</p>
          <span className="Price"> {ele.price}EGP</span>
          <a className="Details" href="/">
            {" "}
            Details
          </a>
          <p>rate :{ele.rate}</p>
        </div>
      );
    });

  const GetMoreHandeller = () => {
    dispatch(getProducts(page));
  };

  return (
    <React.Fragment>
      <section className="search_cont">
        <input
          value={search}
          onChange={(e) => setsearch(e.target.value)}
          type="text"
          placeholder="Search Field"
          className="searchInput Fill"
          id="searchInput"
        />
      </section>
      <section className="container-fluid">
        <div className="row">
          <div className="col-md-3">
            <div className="filter_section">
              <div className="Btn">
                <button name="reset" id="reset">
                  Reset
                </button>
              </div>
              <Accordion defaultActiveKey={["0"]} alwaysOpen>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Categories</Accordion.Header>
                  <Accordion.Body>
                    <div className="fil_cont">
                      <div>
                        <input
                          type="checkbox"
                          id="shoes"
                          value="shoes"
                          className="Fill check"
                          placeholder="shoes"
                          onChange={typeHandeller}
                        />
                        <label htmlFor="shoes"> shoes</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="shirt"
                          value="shirt"
                          className="Fill check check"
                          placeholder="shirts"
                          onChange={typeHandeller}
                        />
                        <label htmlFor="shirt">shirt</label>
                      </div>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Rating</Accordion.Header>
                  <Accordion.Body>
                    <div>
                      <input
                        type="checkbox"
                        id="1"
                        className="Fill check"
                        value="1"
                        onChange={RateHandeller}
                      />
                      <label htmlFor="1">
                        <AiFillStar className="active_star" />
                        <AiOutlineStar className="Normal_star" />
                        <AiOutlineStar className="Normal_star" />
                        <AiOutlineStar className="Normal_star" />
                        <AiOutlineStar className="Normal_star" />
                      </label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        id="2"
                        className="Fill check"
                        value="2"
                        onChange={RateHandeller}
                      />
                      <label htmlFor="2">
                        <AiFillStar className="active_star" />
                        <AiFillStar className="active_star" />
                        <AiOutlineStar className="Normal_star" />
                        <AiOutlineStar className="Normal_star" />
                        <AiOutlineStar className="Normal_star" />
                      </label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        id="3"
                        className="Fill check"
                        value="3"
                        onChange={RateHandeller}
                      />
                      <label htmlFor="3">
                        <AiFillStar className="active_star" />
                        <AiFillStar className="active_star" />
                        <AiFillStar className="active_star" />
                        <AiOutlineStar className="Normal_star" />
                        <AiOutlineStar className="Normal_star" />
                      </label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        id="4"
                        className="Fill check"
                        value="4"
                        onChange={RateHandeller}
                      />
                      <label htmlFor="4">
                        <AiFillStar className="active_star" />
                        <AiFillStar className="active_star" />
                        <AiFillStar className="active_star" />
                        <AiFillStar className="active_star" />
                        <AiOutlineStar className="Normal_star" />
                      </label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        id="5"
                        className="Fill check"
                        value="5"
                        onChange={RateHandeller}
                      />
                      <label htmlFor="5">
                        <AiFillStar className="active_star" />
                        <AiFillStar className="active_star" />
                        <AiFillStar className="active_star" />
                        <AiFillStar className="active_star" />
                        <AiFillStar className="active_star" />
                      </label>
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3">
                  <Accordion.Header>Price</Accordion.Header>
                  <Accordion.Body>
                    <label htmlFor="customRange2" className="form-label">
                      Price range
                    </label>
                    <input
                      type="range"
                      className="form-range Fill check"
                      min="0"
                      value={range}
                      onChange={(e) => setRange(e.target.value)}
                      max="100"
                      id="Range"
                    />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
          <div className="col-md-8">
            <div className="container">
              <div className="row " id="productsContainer">
                {/* {Products} */}
                {checkArr.length > 0 ? Products : ALlProduct}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-2">
            <nav
              aria-label="Page navigation example"
              className="pagenation_nav"
            >
              <ul className="pagination">
                <li className="page-item">
                  <button
                    className="page-link"
                    id="btn_prev"
                    onClick={() => {
                      if (page <= 1) {
                        setPage(1);
                        GetMoreHandeller();
                      } else {
                        setPage((state) => state - 1);
                        GetMoreHandeller();
                      }
                    }}
                    // onClick="prevPage(e)"
                  >
                    &lt;
                  </button>
                </li>
                <li className="page-item">
                  <button
                    className="page-link"
                    onClick={() => {
                      setPage(1);
                      GetMoreHandeller();
                    }}
                  >
                    1
                  </button>
                </li>
                <li className="page-item">
                  <button
                    className="page-link"
                    onClick={() => {
                      setPage(2);
                      GetMoreHandeller();
                    }}
                    // onChange={GetMoreHandeller}
                  >
                    2
                  </button>
                </li>
                <li className="page-item">
                  <button
                    // onChange={GetMoreHandeller}
                    className="page-link"
                    id="btn_next"
                    onClick={() => {
                      if (page >= 2) {
                        setPage(2);
                        GetMoreHandeller();
                      } else {
                        setPage((state) => state + 1);
                        GetMoreHandeller();
                      }
                    }}
                    // onClick="nextPage(e)"
                  >
                    &gt;
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}

export default App;
