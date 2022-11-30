import "./App.css";
import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
// AiFillStar AiOutlineStar
function App() {
  return (
    <React.Fragment>
      <section class="search_cont">
        <input
          type="text"
          placeholder="Search Field"
          class="searchInput Fill"
          id="searchInput"
        />
      </section>
      <section class="container-fluid">
        <div class="row">
          <div class="col-md-3">
            <div class="filter_section">
              <div class="Btn">
                <button name="reset" onclick="myFunction()" id="reset">
                  Reset
                </button>
              </div>
              <Accordion defaultActiveKey={["0"]} alwaysOpen>
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Categories</Accordion.Header>
                  <Accordion.Body>
                    <div class="fil_cont">
                      <div>
                        <input
                          type="checkbox"
                          id="shoes"
                          value="shoes"
                          class="Fill check"
                          placeholder="shoes"
                        />
                        <label for="shoes"> shoes</label>
                      </div>
                      <div>
                        <input
                          type="checkbox"
                          id="shirt"
                          value="shirt"
                          class="Fill check check"
                          placeholder="shirts"
                        />
                        <label for="shirt">shirt</label>
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
                        class="Fill check"
                        value="1"
                      />
                      <label for="1">
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
                        class="Fill check"
                        value="2"
                      />
                      <label for="2">
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
                        class="Fill check"
                        value="3"
                      />
                      <label for="3">
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
                        class="Fill check"
                        value="4"
                      />
                      <label for="4">
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
                        class="Fill check"
                        value="5"
                      />
                      <label for="5">
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
                    <label for="customRange2" class="form-label">
                      Price range
                    </label>
                    <input
                      type="range"
                      class="form-range Fill check"
                      min="0"
                      value="100"
                      max="100"
                      id="Range"
                    />
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>
          <div class="col-md-8">
            <div class="container-fluid">
              <div class="row " id="productsContainer"></div>
            </div>
          </div>
        </div>
      </section>
      {/* <section class="container">
    <div class="row align-items-center justify-content-center">
      <div class="col-md-2">
        <nav aria-label="Page navigation example" class="pagenation_nav">
          <ul class="pagination">
            <li class="page-item"><a class="page-link" id="btn_prev" onclick="prevPage(e)" href="/">&lt;</a></li>
            <li class="page-item"><a class="page-link" href="#">1</a></li>
            <li class="page-item"><a class="page-link" href="#">2</a></li>
            <li class="page-item"><a class="page-link" href="#">3</a></li>
            <li class="page-item"><a class="page-link" id="btn_next" onclick="nextPage(e)" href="/">&gt;</a></li>
          </ul>
        </nav>
      </div>
    </div>
  </section> */}
    </React.Fragment>
  );
}

export default App;
