import React from "react";
import { Link } from "react-router-dom";
import { Col, Row } from "reactstrap";
import "./Navigation.scss";

export default function Navigation() {
  return (
    <>
      <div className="header-nav">
        <Row>
          
        </Row>
      </div>
      <div className="top-navbar">
        <Row>
          <Col xs="3" className="logo d-flex">
            <Link to={"/"} className="d-flex align-items-center">
              <svg
                width="130"
                height="18"
                viewBox="0 0 130 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.4604 11.0948C28.5975 10.3024 30.0637 8.59761 30.0637 5.88497V5.83581C30.0637 4.22789 29.5837 2.95543 28.6221 1.99386C27.4942 0.866002 25.8603 0.289062 23.7231 0.289062H16.0392V17.0999H19.738V11.7195H22.643L26.2464 17.0999H30.5684L26.4604 11.0948ZM26.3172 6.07728C26.3172 7.51892 25.3079 8.45301 23.4817 8.45301H19.7366V3.62636H23.4108C25.2371 3.62636 26.3187 4.41875 26.3187 6.02956V6.07728H26.3172Z"
                  fill="#1B1C1F"
                ></path>
                <path
                  d="M41.6101 0C36.4234 0 32.6523 3.91424 32.6523 8.69317V8.74089C32.6523 13.5198 36.3757 17.3863 41.5624 17.3863C46.7491 17.3863 50.5202 13.4721 50.5202 8.69317V8.64546C50.5202 3.86797 46.7968 0 41.6101 0ZM46.6537 8.74089C46.6537 11.6242 44.5888 13.9768 41.6116 13.9768C38.6343 13.9768 36.5218 11.5735 36.5218 8.69317V8.64546C36.5218 5.76219 38.5866 3.4096 41.5639 3.4096C44.5411 3.4096 46.6537 5.8128 46.6537 8.69317V8.74089Z"
                  fill="#1B1C1F"
                ></path>
                <path
                  d="M68.3371 0.289062L62.2134 9.4623L56.0897 0.289062H54.1709V17.0999H56.0188V3.50779L62.1425 12.4902H62.2394L68.3631 3.48321V17.0999H70.2602V0.289062H68.3371Z"
                  fill="#1B1C1F"
                ></path>
                <path
                  d="M86.8502 0.289062V10.0638C86.8502 13.738 84.8794 15.6106 81.7836 15.6106C78.5402 15.6106 76.6446 13.5934 76.6446 9.94236V0.289062H74.7475V10.0638C74.7475 14.8182 77.5801 17.3631 81.7344 17.3631C85.9364 17.3631 88.7473 14.8413 88.7473 9.91923V0.289062H86.8502Z"
                  fill="#1B1C1F"
                ></path>
                <path
                  d="M99.2643 7.78188C95.5409 7.01407 94.7008 6.10021 94.7008 4.51543V4.46627C94.7008 2.93065 96.0687 1.75362 98.2782 1.75362C100.008 1.75362 101.569 2.30599 103.129 3.57844L104.236 2.11367C102.506 0.74434 100.801 0.0488281 98.3273 0.0488281C95.1332 0.0488281 92.8023 2.0168 92.8023 4.634V4.68172C92.8023 7.44496 94.5808 8.69284 98.4459 9.53294C101.975 10.3008 102.817 11.1655 102.817 12.7271V12.7763C102.817 14.4319 101.351 15.6321 99.0691 15.6321C96.7396 15.6321 95.0594 14.8642 93.3055 13.2563L92.1299 14.6488C94.147 16.475 96.3073 17.3383 98.9968 17.3383C102.334 17.3383 104.736 15.4658 104.736 12.5839V12.5362C104.737 9.96674 103.009 8.62199 99.2643 7.78188Z"
                  fill="#1B1C1F"
                ></path>
                <path
                  d="M108.771 0.289062V17.0999H110.668V0.289062H108.771Z"
                  fill="#1B1C1F"
                ></path>
                <path
                  d="M128.748 13.2075C127.141 14.746 125.627 15.6324 123.323 15.6324C119.6 15.6324 116.815 12.5828 116.815 8.69317V8.64546C116.815 4.77893 119.601 1.75396 123.323 1.75396C125.628 1.75396 127.165 2.71408 128.605 4.05884L129.902 2.66637C128.247 1.057 126.396 0 123.346 0C118.424 0 114.847 3.93882 114.847 8.69317V8.74089C114.847 13.5675 118.426 17.3863 123.275 17.3863C126.302 17.3863 128.271 16.2093 130.001 14.4322L128.748 13.2075Z"
                  fill="#1B1C1F"
                ></path>
                <path
                  d="M13.3029 6.09897V6.14813C13.3029 10.0624 10.2765 12.0564 6.50542 12.0564H3.69735V17.0985H0V0.289062H6.86692C10.878 0.289062 13.3029 2.64165 13.3029 6.09897Z"
                  fill="#1B1C1F"
                ></path>
                <path
                  d="M9.02719 7.81597C8.57894 8.15288 7.93983 8.04443 7.62605 7.57883L6.82787 6.39168L4.83966 8.99443L2.90929 6.22251L2.76325 6.39313C2.44658 6.76619 1.98243 6.97875 1.49369 6.97875H0V4.99199H1.39681L3.21728 3.17151L4.87003 5.634L6.9421 3.03125L9.25277 6.48856C9.54196 6.91946 9.44363 7.5022 9.02719 7.81597Z"
                  fill="#F5E333"
                ></path>
              </svg>
            </Link>
          </Col>
          <Col xs="6" className="search-container d-flex">
            <form className="form-group">
              <input
                className="search-input"
                name="search"
                placeholder="Products Search..."
                autocomplete="off"
              />
              <button type="submit" className="search-btn">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
                    stroke="#B8BECE"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M14 14L11.1 11.1"
                    stroke="#B8BECE"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>
            </form>
          </Col>
          <Col xs="7" md="3" className="auth d-flex user-navigation">
            <Col className="d-flex justify-content-evenly align-items-center">
              <a class="icon-container bag" href="/cart">
                <svg
                  width="20"
                  height="22"
                  viewBox="0 0 20 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M4 1L1 5V19C1 19.5304 1.21071 20.0391 1.58579 20.4142C1.96086 20.7893 2.46957 21 3 21H17C17.5304 21 18.0391 20.7893 18.4142 20.4142C18.7893 20.0391 19 19.5304 19 19V5L16 1H4Z"
                    stroke="#575F74"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M1 5H19"
                    stroke="#575F74"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M14 9C14 10.0609 13.5786 11.0783 12.8284 11.8284C12.0783 12.5786 11.0609 13 10 13C8.93913 13 7.92172 12.5786 7.17157 11.8284C6.42143 11.0783 6 10.0609 6 9"
                    stroke="#575F74"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </a>
              <a class="icon-container heart" href="/favorite">
                <svg
                  width="23"
                  height="21"
                  viewBox="0 0 23 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.2913 2.61183C19.7805 2.10083 19.1741 1.69547 18.5066 1.41891C17.8392 1.14235 17.1238 1 16.4013 1C15.6788 1 14.9634 1.14235 14.2959 1.41891C13.6285 1.69547 13.022 2.10083 12.5113 2.61183L11.4513 3.67183L10.3913 2.61183C9.3596 1.58013 7.96032 1.00053 6.50129 1.00053C5.04226 1.00053 3.64298 1.58013 2.61129 2.61183C1.5796 3.64352 1 5.04279 1 6.50183C1 7.96086 1.5796 9.36013 2.61129 10.3918L3.67129 11.4518L11.4513 19.2318L19.2313 11.4518L20.2913 10.3918C20.8023 9.88107 21.2076 9.27464 21.4842 8.60718C21.7608 7.93972 21.9031 7.22431 21.9031 6.50183C21.9031 5.77934 21.7608 5.06393 21.4842 4.39647C21.2076 3.72901 20.8023 3.12258 20.2913 2.61183V2.61183Z"
                    stroke="#575F74"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </a>
              <a class="icon-container" href="/login">
                <svg
                  width="18"
                  height="20"
                  viewBox="0 0 18 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 19V17C17 15.9391 16.5786 14.9217 15.8284 14.1716C15.0783 13.4214 14.0609 13 13 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19"
                    stroke="#575F74"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                  <path
                    d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z"
                    stroke="#575F74"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </a>
              <div class="hamburger-menu hamburger-menu-two">
                <input
                  type="checkbox"
                  class="input-check2"
                  id="input-check2"
                  hidden
                />
                <label
                  class="bars-container bars-container2"
                  for="input-check2"
                >
                  <span class="bar bar1"></span>
                  <span class="bar bar2"></span>
                  <span class="bar bar3"></span>
                </label>
              </div>
            </Col>
          </Col>
        </Row>
      </div>
      <Col className="categories" xs="12" lg="9">
        <div>
          <a>Keys</a>
          <a>Guitars</a>
          <a>Studio</a>
          <a>Audio</a>
          <a>Microphones</a>
          <a>Drums</a>
          <a>Violin&Chello</a>
          <a>Winds</a>
          <a>Folks</a>
          <a>Cables</a>
        </div>
      </Col>
    </>
  );
}
