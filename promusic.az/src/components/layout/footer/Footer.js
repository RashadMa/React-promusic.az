import React from "react";
import { Container } from "reactstrap";
import LogoDark from "../../common/keyValuePair/LogoDark";
import CategoryList from "../../categories/categoryList/CategoryList";
import "./footer.scss";
import { GrMail } from "react-icons/gr";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import Mail from "../../common/keyValuePair/Mail";
import Phone from "../../common/keyValuePair/Phone";
import MasterCard from "../../common/keyValuePair/MasterCard";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="footer">
        <Container>
          <div className="footer-main">
            <div className="footer-first">
              <div className="footer-first-left">
                <div className="img-container d-flex align-items-center">
                  <LogoDark />
                </div>
                <div className="footer-social">
                  <a href="mailto:info@promusic.az">
                    <GrMail className="mail" />
                  </a>
                  <a href="https://www.facebook.com/Promusic.az">
                    <BsFacebook className="facebook" />
                  </a>
                  <a href="https://www.instagram.com/promusic.az/">
                    <BsInstagram className="instagram" />
                  </a>
                  <a href="https://www.youtube.com/channel/UCKheavekuxhbnLFjKXL6MhA">
                    <BsYoutube className="youtube" />
                  </a>
                </div>
              </div>
              <div className="footer-first-right">
                <a href="tel:+994 (77) 312 37 00">
                  <Phone />
                </a>
                <a href="mailto:info@promusic.az">
                  <Mail />
                </a>
              </div>
            </div>
            <CategoryList />
          </div>
        </Container>

        <div className="footer-bottom">
          <Container>
            <div className="footer-bottom-inner">
              <MasterCard />
              <div className="footer-bottom-content">
                <Link to={'/about'}>About</Link>
                <a href="/blog">Blog</a>
                <a href="/contact">Contact</a>
              </div>
              <p className="made-by">
                Made by <a>Rashad Hehe</a>
              </p>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export default Footer;
