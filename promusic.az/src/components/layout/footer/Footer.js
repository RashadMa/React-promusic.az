import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
// import { Container } from "reactstrap";
// import LogoDark from "../../././assets/images/logo/LogoDark";
// import CategoryList from "../../categories/categoryList/CategoryList";
import * as settingActions from "../../../redux/actions/settingActions";
import { getSettings } from "../../../redux/actions/settingActions";
import "./footer.scss";

function Footer() {
  const { items } = useSelector((state) => state.settingListReducer);
  const dispatch = useDispatch();
  React.useEffect(() => {
    getSettings()(dispatch);
  }, [dispatch]);
  return (
    <>
      {/* {Object.entries(items).map(([salam, xanim]) => (
        <button key={salam}>{xanim}</button>
      ))} */}
      {
        items?.map(({key, value}) => {
          if (key === "PageSize") {
          return <button>{value}</button>
          }
          return null

        })
      }
      {/* <button onClick={()=>console.log("items", items)}>Test</button> */}
      {/* <div class="footer">
        <Container>
          <div class="footer-main">
            <div class="footer-first">
              <div class="footer-first-left">
                <div class="img-container">
                 <LogoDark/>
                </div>
                <div class="footer-social">
                  <a href="mailto:info@promusic.az" target="_blank"></a>
                  <a href="https://www.facebook.com/Promusic.az"></a>
                  <a href="https://www.instagram.com/promusic.az/"></a>
                  <a href="https://www.youtube.com/channel/UCKheavekuxhbnLFjKXL6MhA"></a>
                </div>
              </div>
              <div class="footer-first-right">
                <a href="tel:+994 (77) 312 37 00">+994 (77) 312 37 00 </a>
                <a href="mailto:info@promusic.az">info@promusic.az</a>
              </div>
            </div>
            <CategoryList />
            <div class="footer-middle">
          <a href="/categories/klavis">Keys</a>
          <a href="/categories/gitara">Guitars</a>
          <a href="/categories/studio">Studio</a>
          <a href="/categories/sespasistem">Audio &amp; PA</a>
          <a href="/categories/mikrofon">Microphones</a>
          <a href="/categories/zerbbaraban">Drums</a>
          <a href="/categories/dj">DJ</a>
          <a href="/categories/skripkavioloncel">Violin/ Cello</a>
          <a href="/categories/nefes">Winds</a>
          <a href="/categories/kabeller">Cables</a>
          <a href="/categories/milli">Folk</a>
        </div>
          </div>
        </Container>

        <div class="footer-bottom">
          <div class="footer-bottom-inner">
            <p class="visa-master"></p>
            <div class="footer-bottom-content">
              <a href="/about">About</a>
              <a href="/blog">Blog</a>
              <a href="/contact">Contact</a>
              <a href="/terms">User terms</a>
              <a href="/privacy">Privacy Policy</a>
              <a href="/faq">Faq</a>
            </div>
            <p class="made-by">
              Made by <a>Rashad Hehe</a>
            </p>
          </div>
        </div>
      </div> */}
    </>
  );
}

function mapStateToProps(state) {
  return {
    settings: state.settingListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getSettings: bindActionCreators(settingActions.getSettings, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
