import styles from "./Main.module.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../../components/Header/Header";
import Home from "../../components/Home";
import Skills from "../../components/Skills";
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";
import { useState, useEffect } from "react";
import $ from "jquery";
import Footer from "../../components/Footer/Footer";

const Main = () => {
  const [ratio, setRatio] = useState(1);
  // const [offsetY, setOffsetY] = useState(0);
  // const handleScroll = () => setOffsetY(window.pageYOffset);

  // console.log(offsetY);
  // useEffect(() => {
  //     window.addEventListener("scroll", handleScroll);

  //     return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // const t = document.body.getBoundingClientRect().top;
  // const b = document.body.getBoundingClientRect().bottom;
  // const p = b - t;
  // console.log(p);

  // const x = window.matchMedia("(max-width: 900px)");
  // console.log(x);
  // x.addEventListener("change", console.log);

  useEffect(() => {
    console.log($("#1").outerHeight());
    console.log($("#2").outerHeight());
    console.log($("#3").outerHeight());
    console.log($("#4").outerHeight());
    const totalHeight =
      $("#1").outerHeight() +
      $("#2").outerHeight() +
      $("#3").outerHeight() +
      $("#4").outerHeight();
    console.log(totalHeight);
    setRatio(totalHeight / 1620);

    // console.log(document.body.getBoundingClientRect().bottom);
    // console.log(document.body.scrollHeight);
    // console.log(document.documentElement.offsetHeight);
  });

  const factor = (arg) => {
    return 1 + arg / 10;
  };

  const mult = ratio * 12;
  // console.log(ratio);

  // console.log(x);
  // var media = MediaQueryList.media;
  // console.log(media);

  (function (h, o, t, j, a, r) {
    h.hj =
      h.hj ||
      function () {
        (h.hj.q = h.hj.q || []).push(arguments);
      };
    h._hjSettings = { hjid: 2656481, hjsv: 6 };
    a = o.getElementsByTagName("head")[0];
    r = o.createElement("script");
    r.async = 1;
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
    a.appendChild(r);
  })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");

  return (
    <>
      <Router>
        <div className={styles.Parallax__top}>
          <Header />
        </div>
        <section className={styles.Main}>
          <div
            className={styles.Parallax__back}
            // style={{
            //     transform: `translateZ(-${
            //         ratio * mult
            //     }px) scale(${factor(ratio * mult)})`,
            // }}
          ></div>

          <div className={`${styles.Parallax__middle} ${styles.ball2}`} />
          <div className={`${styles.Parallax__above} ${styles.swirl1}`} />
          <div className={`${styles.Parallax__above} ${styles.swirl2}`} />
          <div className={`${styles.Parallax__middle} ${styles.ball1}`} />
          <div className={styles.Parallax__group}>
            <div className={styles.Parallax__elements} id={"1"}>
              <Home />
            </div>
            <div className={styles.Parallax__elements} id={"2"}>
              <Skills />
            </div>
            <div className={styles.Parallax__elements} id={"3"}>
              <Projects />
            </div>
            <div className={styles.Parallax__elements} id={"4"}>
              <Contact />
            </div>
          </div>
        </section>
      </Router>
    </>
  );
};

export default Main;
