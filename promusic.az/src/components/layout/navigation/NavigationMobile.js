import React from "react";
import LogoLight from "../../common/keyValuePair/LogoLight";
import { BsSearch, BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import { IoMdPaperPlane } from "react-icons/io";
import { GrMail } from "react-icons/gr";
import CategoryListMobile from "../../categories/categoryList/CategoryListMobile";
import { Link } from "react-router-dom";

export default function NavigationMobile({ changeState }) {
  return (
    <div className="mobile-navbar">
      <div className="mobile-container">
        <div className="mobile-menu-header">
          <div className="mobile-logo">
            <LogoLight />
            <div onClick={changeState} className="close" />
          </div>
        </div>
        <div className="mobile-menu-content">
          <form className="form-group undefined">
            <input
              className="search-input"
              name="search"
              placeholder="Products Search..."
              autoComplete="off"
            />
            <button type="submit" className="search-btn">
              <BsSearch className="search-icon" style={{ color: "white" }} />
            </button>
          </form>
          <CategoryListMobile />
          <div className="social d-flex justify-content-between">
            <a href="mailto:info@promusic.az">
              <GrMail className="social-icon mail-icon" />
            </a>
            <a href="https://www.facebook.com/Promusic.az">
              <BsFacebook className="social-icon facebook-icon" />
            </a>
            <a href="https://www.instagram.com/promusic.az/">
              <BsInstagram className="social-icon instagram-icon" />
            </a>
            <a href="https://www.youtube.com/channel/UCKheavekuxhbnLFjKXL6MhA">
              <BsYoutube className="social-icon youtube-icon" />
            </a>
          </div>
          <div className="contact-mobile-menu d-flex">
            <div className="pages d-flex">
              <Link to={"/contact"}>Contact</Link>
              <Link to={"/about"}>About</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
