import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

// استيراد الصور
import imgs from "../../img_car/سعر-سيارة-بنتلي-بينتايجا-جديدة-.jpg";
import imgs2 from "../../img_car/5f0d5229e9c27Ford_Bronco_4_door_2021_front_dubai_uae.jpg";
import imgs3 from "../../img_car/فيات-الإيطالية.jpeg";
import imgs4 from "../../img_car/2022-toyota-land-cruiser.jpg";

export const Services = () => {
  const { t } = useTranslation();

  // مصفوفة البيانات لجعل الكود أنظف وأسهل في الترجمة
  const fleetData = [
    {
      key: "luxury",
      img: imgs,
      path: "/luxury-cars-details",
    },
    {
      key: "economy",
      img: imgs3,
      path: "/economy-cars-details",
    },
    {
      key: "suv",
      img: imgs2,
      path: "/suv-cars-details",
    },
    {
      key: "family",
      img: imgs4,
      path: "/family-cars-details",
    },
  ];

  return (
    <div className="Services py-5" id="Services">
      <Container>
        <div className="title text-center mb-5">
          <h1 className="fw-bold">{t("fleet.title")}</h1>
          <h6
            className="text-muted mx-auto"
            style={{ maxWidth: "800px", lineHeight: "1.8" }}
          >
            {t("fleet.subtitle")}
          </h6>
        </div>

        <Row className="gx-4 gy-4">
          {fleetData.map((item) => (
            <Col key={item.key} xs={12} lg={6}>
              <Card className="h-100 shadow-sm border-0 overflow-hidden">
                <Card.Img
                  variant="top"
                  src={item.img}
                  alt={t(`fleet.categories.${item.key}.name`)}
                  style={{
                    width: "100%",
                    aspectRatio: "16 / 9",
                    objectFit: "contain",
                  }}
                />
                <Card.Body className="d-flex flex-column text-center p-4">
                  <Card.Title className="fw-bold fs-4">
                    {t(`fleet.categories.${item.key}.name`)}
                  </Card.Title>
                  <Card.Text className="text-muted flex-grow-1 fs-5">
                    {t(`fleet.categories.${item.key}.desc`)}
                  </Card.Text>
                  <motion.div whileTap={{ scale: 0.95 }}>
                    <Button
                      variant="success"
                      className="w-100 mt-3 fw-bold py-2"
                      style={{
                        backgroundColor: "#fc8b1a",
                        border: "none",
                        fontSize: "1.1rem",
                      }}
                      as={Link}
                      to={item.path}
                    >
                      {t("fleet.more_btn")}
                    </Button>
                  </motion.div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Services;
