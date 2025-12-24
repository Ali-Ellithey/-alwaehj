import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next"; // استيراد الهوك

import imgSlider1 from "../../Images/images-NRVHT9oH.jpg";
import imgSlider2 from "../../Images/rent-Rolls-Royce-Cullinan-in-Dubai--900x600.jpg";
import imgSlider3 from "../../Images/GMC-Yukon-Denali-rental-price-in-dubai-900x600.jpg";

export const HomeSidler = () => {
  const { t } = useTranslation();

  // مصفوفة الشرائح تعتمد الآن على مفاتيح الترجمة
  const slides = [
    {
      img: imgSlider1,
      title: (
        <>
          {t("slider.slide1.title_part1")}{" "}
          <span>{t("slider.slide1.title_span")}</span>{" "}
          {t("slider.slide1.title_part2")}
        </>
      ),
      desc: t("slider.slide1.desc"),
    },
    {
      img: imgSlider2,
      title: (
        <>
          {t("slider.slide2.title_part1")}{" "}
          <span>{t("slider.slide2.title_span")}</span>{" "}
          {t("slider.slide2.title_part2")}
        </>
      ),
      desc: t("slider.slide2.desc"),
    },
    {
      img: imgSlider3,
      title: (
        <>
          {t("slider.slide3.title_part1")}{" "}
          <span>{t("slider.slide3.title_span")}</span>{" "}
          {t("slider.slide3.title_part2")}
        </>
      ),
      desc: t("slider.slide3.desc"),
    },
  ];

  return (
    <div className="home-slider-wrapper">
      <Fade>
        <Carousel fade interval={3000}>
          {slides.map((item, index) => (
            <Carousel.Item key={index}>
              <div className="slider-container">
                <img
                  src={item.img}
                  className="d-block w-100 slider-image"
                  alt="Home_slider"
                />
                <div className="overlay-gradient"></div>
              </div>

              <Carousel.Caption className="custom-caption">
                <motion.h1
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {item.title}
                </motion.h1>
                <div className="line mx-auto"></div>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="d-none d-md-block"
                >
                  {item.desc}
                </motion.p>
                <div className="btBg d-flex justify-content-center gap-3 mt-4">
                  <motion.div whileTap={{ scale: 0.85 }}>
                    <Button
                      id="discover"
                      variant="success"
                      className="px-3 py-2"
                      href="https://wa.me/9659030061"
                    >
                      {t("book_now")}
                    </Button>
                  </motion.div>
                  <motion.div whileTap={{ scale: 0.85 }}>
                    <Button
                      as={Link}
                      to="/contacted"
                      variant="outline-light"
                      id="contactbtn"
                      className="px-3 py-2"
                    >
                      {t("contact_us")}
                    </Button>
                  </motion.div>
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Fade>
    </div>
  );
};

export default HomeSidler;
